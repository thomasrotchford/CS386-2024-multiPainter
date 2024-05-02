from selenium import webdriver
from selenium.webdriver.common.by import By
import time

TEST_UNAME = "Dummy Email"
TEST_PW = "Dummy PW"

SIGN_IN_PAGE = "https://multi-pixel.com/Signin"
CREATE_PAGE = "https://multi-pixel.com/Create"
PROFILE_PAGE = "https://multi-pixel.com/Profile"

# Function to test submitting a palette
def testSubmit(browser):
    # initialize list and set result to failure
    resultLog = ["Begin Testing now"]

    try:
        # Navigate to a multi pixel sign in 
        browser.get(SIGN_IN_PAGE)
        
        # get all input elements on sign in in order they should be username, pw and submit btn
        inputElements = browser.find_elements(By.TAG_NAME, "input")
        # enter the username
        inputElements[0].send_keys(TEST_UNAME)
        resultLog.append("Username input")
        # enter the pw
        inputElements[1].send_keys(TEST_PW)
        resultLog.append("Password input")

        #now submit
        inputElements[2].click()
        resultLog.append("Logging in")

        # Wait for page to load 
        time.sleep(5)

        # get current paintings
        currentPaintings = len(browser.find_elements(By.CLASS_NAME, "communityDisplayTemplate"))
        resultLog.append(f"Current paintings now = {currentPaintings}")


        # get navigation bar
        navBar = browser.find_element(By.TAG_NAME, "ul").find_elements(By.TAG_NAME, "li")
        
        navBar[1].click()#navigate to /create
        resultLog.append(browser.current_url)
        
        # begin free draw board add results navigate to free draw
        resultLog = resultLog + paintBoard(browser)
        
        navBar[4].click() #navigate to /Profile
        resultLog.append(browser.current_url)

        
        # Wait for page to load 
        time.sleep(2)

    
        # get updated paintings
        updatedPaintingsNum = len(browser.find_elements(By.CLASS_NAME, "communityDisplayTemplate"))

        # Sign out
        browser.find_element(By.CLASS_NAME, "better-button").click()
        resultLog.append("Signed Out")

        # check for current paintings to be 1 less than updated paintings num to show one more painting
        # is added
        resultLog.append(f"Previous Paintings: {currentPaintings}\nNow: {updatedPaintingsNum}")
        if currentPaintings + 1 != updatedPaintingsNum:
            #failure throw error
            raise Exception("Paintings Not Updated")
        
        # make it to end, set result as success
        result = "success"

    except Exception as err:
        result = "paintings not updated error, test failure"
    except:
        result = "failure falling out"

    resultLog.append("Test result: " + result)
    
    return resultLog



# paint a board and submit it
def paintBoard(browser):
    resultLog = ["\nBeginning Paint Board"]
    try:
        # navigate to correct paint Website
        resultLog.append(f"At {CREATE_PAGE}")

        # get the palette buttons from the palette dive that contains it
        palette = browser.find_element(By.CLASS_NAME, "freedraw-palette").find_elements(By.TAG_NAME, "button")    
        resultLog.append("Palette generated...")
        
        # get the board divs
        boardSquares = browser.find_element(By.ID, "board").find_elements(By.TAG_NAME, "div")
        resultLog.append("Board divs generated...")

        # paint the board a different color until board length below comments are for debuggin until for loop
        resultLog.append("\nPainting board: ")
        
        # below is used for debugging 
        #print(f"\n\nLengths of palette = {len(palette)} and board = {len(boardSquares)}\n\n")
        #print(browser.find_element(By.ID, "brush").value_of_css_property('color'))
        #palette[0].click()
        #boardSquares
        #print(browser.find_element(By.ID, "brush").value_of_css_property('color'))
        
        for i in range(len(boardSquares)):
            #choose a palette color by clicking it (mod by length to stay in range)
            palette[i % len(palette)].click()
            boardSquares[i].click()
            # output action
            resultLog.append(f"Panting square {i + 1} {palette[i % len(palette)].value_of_css_property('color')}")

        # after paint, begin submission by clicking button (assume last button)
        browser.find_elements(By.CLASS_NAME, "submit-button")[-1].click()
        resultLog.append("Submitting now")

        
        # Wait for page to load 
        time.sleep(2)

        

        # now get the form that submits the painting
        form = browser.find_element(By.CLASS_NAME, "modal").find_elements(By.TAG_NAME, "form")[0]
        resultLog.append("Entering user info")

        # get the input values
        inputs = form.find_elements(By.TAG_NAME, "input")
        #expect author
        inputs[0].send_keys("Selenium Tester")
        #expect an art name
        inputs[1].send_keys("Selenium Test Painting")
        #expect a description
        inputs[2].send_keys("This is a test painting from selenium to test functionality")
        # expect tags
        inputs[3].send_keys("Test, Selenium, test, selenium")


        # click the submission button. Expecting to be first (and only) button
        form.find_elements(By.TAG_NAME, "button")[0].click()
        resultLog.append("Submitting the template information")

        # Wait for page to load 
        time.sleep(2)

        #Finish drawing and submission click ok on alert
        alert = browser.switch_to.alert
        alert.accept()
        resultLod.append("Accepting alert that painting is finished")

        

    except:
        resultLog.append("Failure")

    return resultLog



# Main function to test on Chrome and Firefox
def main():
    print("Begin Chrome Testing: \n")
    # Chrome browser
    chrome_browser = webdriver.Chrome()
    # maximize the window to make everything visible
    chrome_browser.maximize_window()
    
    chrome_logs = testSubmit(chrome_browser)  # run and log

    # Output logs to file for Chrome
    with open("testLogChrome.txt", "w") as file:
        for log in chrome_logs:
            file.write(log + "\n")
    
    chrome_browser.quit()
    
    print("\n\nChrome testing complete. Begin firefox testing: \n")
    
    # Firefox browser
    firefox_browser = webdriver.Firefox()
    # maximize the window to view and make all elements visible
    firefox_browser.maximize_window()
    
    firefox_logs = testSubmit(firefox_browser) #run and log
    
    # Output logs to file for Firefox
    with open("testLogFirefox.txt", "w") as file:
        for log in firefox_logs:
            file.write(log + "\n")
    
    firefox_browser.quit()


if __name__ == "__main__":
    main()

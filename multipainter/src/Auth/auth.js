// START IMPORTS

// Imports the useState hook from React, used for managing state within a React component
import { useState } from 'react';
// Imports the Amplify object from AWS Amplify library
import { Amplify } from 'aws-amplify';
// REFERENCE TO FILE - Imports the configuration object from amplifyconfiguration.json file
import config from '../amplifyconfiguration.json';
// Imports specific authentication APIs from the AWS Amplify authentication module
import { signUp, confirmSignUp, fetchUserAttributes } from 'aws-amplify/auth';

// Configures AWS Amplify with settings specified in the config object
// More or less the main function when it comes to our authentication
Amplify.configure(config);

// Asynchronous function to fetch user attributes of the currently authenticated user
// Works with promises, a weird form of if/then with different possible returns
export async function currentAuthenticatedUser() 
  {
   try 
     {
     // Calls fetchUserAttributes() function from AWS Amplify authentication module
     // it will get the user attributes if successful, used to check if a session is valid
     const userAttributes  = await fetchUserAttributes();
     // Returns the user attributes if successful
     return userAttributes;
     } 
   // If there is an error, catch it
   catch (err) 
     {
      // Logs the error if any occurs during fetching user attributes
      console.log(err);
      // Returns null if an error occurs
      return null;
     } 
  }

// Asynchronous function to handle user sign-up
// also works with promises
export async function handleSignUp({ username, password, email }) 
  {
   try 
     {
      // Calls signUp() function from AWS Amplify authentication module with provided parameters
      const { isSignUpComplete, userId, nextStep } = await signUp(
       {
        username: email,
        password,
        options: 
          {
           userAttributes: 
             {
              email,
              preferred_username: username
             },
           // optional
           autoSignIn: true // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
          }
       });

      // Returns the userId upon successful sign-up
      return userId;
    } 
  catch (error) 
    {
      // Logs the error if any occurs during sign-up
      console.log('error signing up:', error);
    }
  }

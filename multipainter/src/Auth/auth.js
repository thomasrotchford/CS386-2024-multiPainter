// auth configuration files
import { Amplify } from 'aws-amplify';
import config from '../amplifyconfiguration.json';

// auth APIs
import { signUp, confirmSignUp, fetchUserAttributes } from 'aws-amplify/auth';


Amplify.configure(config);


export async function currentAuthenticatedUser() {
  try {
    const userAttributes  = await fetchUserAttributes();
    return userAttributes;
  } catch (err) {
    console.log(err);
    return null;
  }
}



export async function handleSignUp({ username, password, email }) {
  try {
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username: email,
      password,
      options: {
        userAttributes: {
          email,
          preferred_username: username
        },
        // optional
        autoSignIn: true // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
      }
    });

    return(userId);
  } catch (error) {
    console.log('error signing up:', error);
  }
}

async function handleSignUpConfirmation({ username, confirmationCode }) {
    try {
      const { isSignUpComplete, nextStep } = await confirmSignUp({
        username,
        confirmationCode
      });
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }
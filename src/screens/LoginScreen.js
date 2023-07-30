import React, { useState } from 'react';
import "./LoginScreen.css";
import SignUpScreen from './SignUpScreen'; 

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className='loginScreen'>
      <div className="loginScreen__background">
        <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" className="loginScreen__logo" />
      </div>
      <button onClick={() => setSignIn(true)} className='loginScreen__button'>
        sign in
      </button>
      <div className="loginScreen__gradient"></div>
      <div className="loginScreen__body">
        {signIn ? (
          <SignUpScreen />
        ) :(
          <>
            <h1>Unlimited films, TV programes and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart uour membership.</h3>


            <div className="loginScreen__input">
              <form action="">
                <input type="email"
                  name="email" id="" placeholder='Email Address' />
                <button onClick={() => setSignIn(true)} className='loginScreen__getStarted'>GET STARTED</button>
              </form>
            </div>
          </>
        )
          
        }
      </div>
      
        
    </div>
  )
}

export default LoginScreen;

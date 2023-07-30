import React from 'react';
import './App.css';
import Homescreen from './screens/Homescreen';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';

function App() {
  const user = null;
  return (

    <BrowserRouter>
      { !user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<Homescreen />} >

            </Route>
            {/* <Route path="/" element={<TextForms heading="Enter some text below" mode={mode} />}>
             </Route> */}
          </Routes>
        )



      }
    </BrowserRouter>

  );
}

export default App;

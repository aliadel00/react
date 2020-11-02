import React from 'react';
import './App.css';
import Logo from "./components/logo";
import Footer from "./components/footer";
import Questionere from './components/questionere';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <React.Fragment>
 <Logo></Logo>
 <Questionere></Questionere>
 <Footer></Footer>
   </React.Fragment>
  );
}

export default App;

import './App.css';

import {BrowserRouter} from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';


import './styles/styles.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Main/>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

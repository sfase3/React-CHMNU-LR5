import React, { createContext, useState } from 'react';
import LR4 from './components/LR4';
import UseContextExample from './components/LR5/UseContextExample';
import Home from './components/LR5/Home';
import Help from './components/LR5/Help';
import About from './components/LR5/About';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

export const FirstContext = createContext(null);
export const HistoryContext = createContext(null);

function App() {
  const [firstCt, setFirstCt] = useState(String(Math.random()));
  const [history, setHistory] = useState([]);
  return (
    <BrowserRouter>
    <HistoryContext.Provider value={{history, setHistory}}>
      <FirstContext.Provider value={{firstCt, setFirstCt}}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
          </ul>
        </nav>
        <div>
          {/* <LR4 /> */}
          <UseContextExample /> 
          <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/" element={<Home />} />
        </Routes>
        </div>
        </div>
      </FirstContext.Provider>
    </HistoryContext.Provider>
    </BrowserRouter>
  );
}

export default App;

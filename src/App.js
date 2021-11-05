import React from 'react'
import './App.scss'
import {Route , Routes} from 'react-router-dom';
import Home from './components/Home/Home'
import Quiz from './components/Quiz/Quiz'
import Score from './components/Score/Score'


function App() {
  return (
    <div className="App">
      <Routes>
         <Route path='/' element={<Home/>}/>  
         <Route path='/quiz' element={<Quiz/>}/>    
         <Route path='/score' element={<Score/>}/>         
      </Routes>  
    </div>
  );
}

export default App;

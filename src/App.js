
import './App.css';
import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
const App =()=> {
  
    return (
      <div>
       
         
          <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route exact path='/' element={<News key="general" pageSize={8} category="general" country="in"></News>}>
            </Route>
            <Route exact path='/sports' element={<News key="sports" pageSize={8} category="sports" country="in"></News>}>
            </Route> 
            <Route exact path='/entertainment' element={<News key="entertainment" pageSize={8} category="entertainment" country="in"></News>}>
            </Route> 
            <Route exact path='/business' element={<News key="business" pageSize={8} category="business" country="in"></News>}>
            </Route>  
            <Route exact path='/health' element={<News key="health" pageSize={8} category="health" country="in"></News>}>
            </Route> 
            <Route exact path='/technology' element={<News key="technology" pageSize={8} category="technology" country="in"></News>}>
            </Route> 
            <Route exact path='/science' element={<News key="science" pageSize={8} category="science" country="in"></News>}>
            </Route> 
          </Routes>
          </BrowserRouter>
      
      </div>
    )
  }
  export default App


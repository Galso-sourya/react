import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Main from './Components/pages/Main'
import Cat from './Components/pages/Cat'
import Dog from './Components/pages/Dog'
const App = () => {
  return (
    
    <div><nav><ul>
      <li><Link to="/">Main</Link></li>
    <li><Link to="/cat">Cat</Link></li>
    <li><Link to="/dog">Dog</Link></li>
    </ul>
    </nav>
    <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='/cat' element={<Cat />}/>
      <Route path='/dog' element={<Dog />}/>
      </Routes></div>
    
  )
}

export default App

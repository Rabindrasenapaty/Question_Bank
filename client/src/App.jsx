
import './App.css'
import Navbar from './components/Navbar'
import  {Routes,Route} from 'react-router-dom'
import Create from './components/Create'
import Read from './components/Read'
import SinglePost from './components/SinglePost'

function App() {


  return (
    <>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Read/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/SinglePost/:postId" element={<SinglePost/>}/>
      <Route path="/UpdatePost/:postId" element={<Create/>}/>
     </Routes>
    </>
  )
}

export default App

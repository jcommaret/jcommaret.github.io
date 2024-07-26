import './App.css'
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';



function App() {
  
  return (
    <main>
      <Sidebar/>
      <div className="main-content">
    
          <Navbar/>
    
      </div>
    </main>
  )
}

export default App

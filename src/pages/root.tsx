import { Outlet } from 'react-router-dom';

import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import '../App.css';

function Root() {
  return (
    <main>
      <Sidebar/>
      <div className="main-content">
          <Navbar/>
          <Outlet/>
      </div>
    </main>
  )
}

export default Root

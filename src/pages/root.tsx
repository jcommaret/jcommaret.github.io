import { Outlet } from 'react-router-dom';

import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import Head from '../components/head';
import '../App.scss';

function Root() {
  return (
    <>
    <Head/>
    <main>
      <Sidebar/>
      <div className="main-content">
          <Navbar/>
          <Outlet/>
      </div>
    </main>
    </>
  )
}

export default Root

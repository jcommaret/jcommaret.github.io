import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import Head from '../components/head';
import '../App.scss';

function Root() {
  return (
    <HelmetProvider>
      <Head/>
      <main>
        <Sidebar/>
        <div className="main-content">
          <Navbar/>
          <Outlet/>
        </div>
      </main>
    </HelmetProvider>
  )
}

export default Root

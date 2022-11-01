import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
    <header className='container bg-info p-2'>
        <nav className='d-flex '>
                <Link to="/">Home</Link>
                <Link to="/graph1" >graph1</Link>
                <Link to="/graph2" >graph2</Link>
        </nav>
    </header>
    <main>
        <Outlet />
    </main>
    <footer className='container  text-center'>All rights reserved to Shimon Dariham</footer>
</div >
  )
}

export default Layout
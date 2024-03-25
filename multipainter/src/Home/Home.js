//        <Link to="/create">Create Board</Link>
import './home.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/*<meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <title>Main Menu</title>
      
      <header>Header</header>
      <div className="columns">
        <nav>Navigation</nav>
        <main>Main</main>
        <aside>Sidebar</aside>
      </div>
  <footer>Footer</footer>*/}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <title>Admin Dashboard</title>
      
      <div className="grid-container">
        {/* Header */}
        <header className="header">
          <div className="menu-icon" onclick="openSidebar()">
            <i className="bx bx-menu" />
          </div>
          <div className="header-left">
            <i className="bx bx-search-alt bx-md" />
          </div>
          <div className="header-right">
            <i className="bx bxs-bell-plus bx-md" />
            <i className="bx bxs-envelope bx-md" />
            <i className="bx bxs-user-account bx-md" />
          </div>
        </header>
        {/* End Header */}
        {/* Side Bar*/}
        <aside id="sidebar">
          <div className="sidebar-title">
            <div className="sidebar-brand">
              <i className="bx bxs-color bx-md"> </i> MultiPixel
            </div>
            <i className="bx bxs-x-circle bx-md" onclick="closeSidebar()" />
          </div>
          <ul className="sidebar-list">
            <li className="sidebar-list-item" onclick="gotoSignin()">
              <i className="bx bxs-dashboard bx-md" /> Sign-in{" "}
            </li>
            <li className="sidebar-list-item">
              <i className="bx bxs-shapes bx-md" /> Workshop{" "}
            </li>
            <li className="sidebar-list-item" onclick="gotoGrid()">
              <i className="bx bx-customize bx-md" /> Pixel Grid{" "}
            </li>
            <li className="sidebar-list-item">
              <i className="bx bxs-group bx-md" /> Template Grid{" "}
            </li>
            <li className="sidebar-list-item">
              <i className="bx bxs-calendar-edit bx-md" /> Portfolio{" "}
            </li>
            <li className="sidebar-list-item">
              <i className="bx bx-line-chart bx-md" /> Bug Reports{" "}
            </li>
            <li className="sidebar-list-item">
              <i className="bx bx-cog bx-md" /> Settings{" "}
            </li>
          </ul>
        </aside>
        {/* End Side Bar*/}
        {/* Main */}
        <main className="main-container">
          <div className="main-title">
            <h2> DASHBOARD </h2>
          </div>
          <div className="main-cards">
            <div className="card">
              <div className="card-inner">
                <h3>PRODUCTS</h3>
                <i className="bx bx-customize bx-md" />
              </div>
              <h1>249</h1>
            </div>
            
          </div>
        </main>
        {/* End Main */}
      </div>
      {/* Apex Charts */}
      {/* Custom Js */}
    </>


    );
  }
  
  export default Home;
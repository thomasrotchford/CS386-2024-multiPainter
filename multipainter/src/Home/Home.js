//        <Link to="/create">Create Board</Link>
// import './home.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <>
      <Helmet><title>Multi Pixel | Home</title></Helmet>
      
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
            <i className="bx bxs-x-circle bx-md" />
          </div>
          <ul className="sidebar-list">
            <Link to="/sign-in" style={{color: 'white'}} activeStyle={{color: 'red'}}>
              <li className="sidebar-list-item" >
               Sign-in{" "}
              </li>
            </Link>
            <Link to="/WorkShop" style={{color: 'white'}} activeStyle={{color: 'red'}}>
              <li className="sidebar-list-item" >
               Workshop{" "}
              </li>
            </Link>
            <Link to="/create" style={{color: 'white'}} activeStyle={{color: 'red'}}>
              <li className="sidebar-list-item" >
               Template Grid{" "}
              </li>
            </Link>
            <Link to="/portfolio" style={{color: 'white'}} activeStyle={{color: 'red'}}>
              <li className="sidebar-list-item" >
               Portfolio{" "}
              </li>
            </Link>
            <Link to="/paint" style={{color: 'white'}} activeStyle={{color: 'red'}}>
              <li className="sidebar-list-item" >
               Paint{" "}
              </li>
            </Link>
            <Link to="/settings" style={{color: 'white'}} activeStyle={{color: 'red'}}>
              <li className="sidebar-list-item" >
               Settings{" "}
              </li>
            </Link>
          </ul>
        </aside>
        {/* End Side Bar*/}
        {/* Main */}
        <main className="main-container">
          <div className="main-title">
          </div>
          <div className="main-cards">
            <div className="card">
              <div className="card-inner">
                <i className="bx bx-customize bx-md" />
              </div>
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
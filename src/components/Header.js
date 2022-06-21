import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
 
    return (
      <div>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
              <div className="container">
                  <Link className="navbar-brand" to="/">
                      Weather App<i className="fa fa-cloud m-2"></i>
                  </Link>
                  <button
                  className="navbar-toggler d-lg-none"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapsibleNavId"
                  aria-controls="collapsibleNavId"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collaps navbar-colapse" id="collapsibleNavId">
                      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                          <li className="nav-item active">
                              <Link className="nav-link" to="/">
                                  Home<i className="fa fa-home m-1"></i>
                              </Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link text-light  " to="/weather">
                                  Weather<i  className="fa fa-cloud m-1" ></i>
                              </Link>
                          </li>
                      </ul>
                  </div>
              </div>

          </nav>
      </div>
    );
  }



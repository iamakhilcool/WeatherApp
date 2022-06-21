import React, { Component } from 'react';
// import Css from "../Assets/Home.module.css"
import '../Assets/Home.css'
export class Home extends Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center">
          
          <div className="align-self-center mt-2" >
          <div className="icon sun-shower">
              <div className="cloud"></div>
              <div className="sun">
                <div className="rays"></div>
              </div>
              <div className="rain"></div>
            </div>
            <h1><i>Welcome Dear</i></h1>

            <div className="icon sun-shower">
              <div className="cloud"></div>
              <div className="sun">
                <div className="rays"></div>
              </div>
              <div className="rain"></div>
            </div>

            <div className="icon thunder-storm">
              <div className="cloud"></div>
              <div className="lightning">
                <div className="bolt"></div>
                <div className="bolt"></div>
              </div>
            </div>

            <div className="icon cloudy">
              <div className="cloud"></div>
              <div className="cloud"></div>
            </div>

            <div className="icon flurries">
              <div className="cloud"></div>
              <div className="snow">
                <div className="flake"></div>
                <div className="flake"></div>
              </div>
            </div>

            <div className="icon sunny">
              <div className="sun">
                <div className="rays"></div>
              </div>
            </div>

            <div className="icon rainy">
              <div className="cloud"></div>
              <div className="rain"></div>
            </div>

          </div>

        </div>
          
      </div>

    );
  }
}

export default Home;

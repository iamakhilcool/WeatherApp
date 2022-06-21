import React, { Component } from 'react';

import Search from './Search';
import Result from './Result';
import axios from 'axios';
import Recent from './Recent';
class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: "",
      lon: "",
      weatherData: null,
      city: "",
      isSearched: false,
      recent: [],
    };
  }
  changeHandler = (event) => {
    const name = event.target.name;
    event.preventDefault();
    if (name === "city") {
      this.setState({
        city: event.target.value,
      })
    }
    else if (name === "lat") {
      this.setState({
        lat: event.target.value,
      })

    } else if (name === "lon") {
      this.setState({
        lon: event.target.value,
      })
    }
  };
  researchHandler = (lat, lon) => {
    this.setState({ weatherData: null }, () => {
      this.setState({ lat, lon }, () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=8932473848eed4e9588f29b4de821ecb`)
          .then(
            (result) => {
             
              this.setState({
                city: result.data.name,
                weatherData: result.data,
              });

            })
          .catch(
            (error) => {
              console.log(error);
            });
      });
    })


  };
  SearchHandler = () => {
    this.setState({
      isSearched: true,
      weatherData: null,

    });
    
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=8932473848eed4e9588f29b4de821ecb`)
      .then(
        (result) => {
         
          this.setState({
            city: result.data.name,
            weatherData: result.data,
          }, () => {
            this.addDataToRecent();
          });

        })
      .catch(
        (error) => {
          console.log(error);
        });

  }
  addDataToRecent = () => {

    let recent = this.state.recent;
    recent.push({
      lat: this.state.lat,
      lon: this.state.lon,
      city: this.state.city,
    });
    this.setState({ recent }, () => {
      window.localStorage.setItem('recent', JSON.stringify(this.state.recent))
    });
  };
  componentDidMount() {
    const data = window.localStorage.getItem('recent');
    let recent = data === null ? [] : JSON.parse(data);
    this.setState({ recent });
  }
  cityHandler=()=>{
   
    this.setState({
      isSearched: true,
      weatherData: null,

    });
   
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=6d586c5f41ef58f6c5086116ff25db1f`)
    .then(
      (result) => {
          
        this.setState({
          lat:result.data.coord.lat,
          lon:result.data.coord.lon,
          city: result.data.name,
          weatherData: result.data,
        }, 
        () => {
          this.addDataToRecent();
        }
       
        )

      })
    .catch(
      (error) => {
        console.log(error);
      });


  }
  locationHandler = () => {
    this.setState({
      lat: "",
      lon: "",
      city: "",
      isSearched: true,
      weatherData: null,
    });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (res) => {
          setTimeout(() => {

            this.setState({
              lat: res.coords.latitude,
              lon: res.coords.longitude,
              city: res.name,
            }, () => {
              axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=8932473848eed4e9588f29b4de821ecb`)
                .then(
                  (result) => {

                    this.setState({
                      city: result.data.name,
                      weatherData: result.data,
                    }, () => {
                      this.addDataToRecent();
                    })

                  })
                .catch(
                  (error) => {
                    console.log(error);
                  });
            });
          }, 500)
        },

        (error) => {
          console.log(error);
        }
      );
    }

    else {
      console.log("Location is not supported");
    }

  };

  render() {

    return (
      <>
      <div className='box' style={{display:"flex"}}>
        <div className='sidebar'>
          <Recent recent={this.state.recent} research={this.researchHandler} />
        </div>
        <div className='menus' >
          <div className="container pt-4 " style={{ height: "500px" }}>

            <Search
              lat={this.state.lat}
              lon={this.state.lon}
              city={this.state.city}
              weatherData={this.state.weatherData}
              change={this.changeHandler}
              getLocation={this.locationHandler}
              searchByCity={this.cityHandler}
              search={this.SearchHandler}
            ></Search>
            <Result

              isSearched={this.state.isSearched} weatherData={this.state.weatherData}></Result>
          </div>

        </div>
      </div>
      </>
    );
  }
}
export default Weather;
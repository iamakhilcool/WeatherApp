import React from 'react';
import Loader from './Loader';
export default function Result(props) {
  const { weatherData: data } = props;
  function ktoC(k) {
    if(k>100)
    return (k - 273.15).toFixed(2) + "° C";
    else return (k).toFixed(2) + "° C";
  }
  function getTheDate(stamp){
    const date=new Date(stamp*1000);
    return date.toLocaleTimeString('en-US', {  hour12: true });
  }
  let showOnPage;
  if(data==null){
    if(props.isSearched===true)
    showOnPage=  <Loader/>;
    else 
    showOnPage= (
      <div className="container">
        <h1 className="text-center mt-2">Please search a city</h1>

      </div>
    );
  }
   else{
     showOnPage=<div>
       <div className="row">

       <div className="col">
         <div className="card border-primary">
           <div className="card-body">

       <h4 className="card-title">
         <img src={` http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt=" "/>
          {data.name} ({ktoC(data.main.temp)}) <span className="p1-2">{data.weather[0].description}</span>  </h4>


       <div className="row">
         <div className="col">
           <div className="row">
             <table className="table">
               <tbody>
                 <tr>
                   <th>Feels Like</th>
                   <td>{ktoC(data.main.feels_like)}</td>
                 </tr>
                 <tr>
                   <th>Min Temp</th>
                   <td>{ktoC(data.main.temp_min)}</td>
                 </tr>
                 <tr>
                   <th>Max Temp</th>
                   <td>{ktoC(data.main.temp_max)}</td>
                 </tr>
                 <tr>
                   <th>Sun Rise</th>
                   <td>{getTheDate(data.sys.sunrise)}</td>
                 </tr>
                 <tr>
                   <th>Sun Set</th>
                   <td>{getTheDate(data.sys.sunset)}</td>
                 </tr>
               </tbody>
             </table>

           </div>

         </div>

       </div>
     </div>
  

 </div>

</div>

</div>

</div>
   }
  return (
    <>
   
      {showOnPage}        
    </>
  );

}

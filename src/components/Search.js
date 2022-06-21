import React from 'react';

export default function Search(props) {
   
    return (

        <div className="row text-light">
            <div className="col-lg-5">
                <div className="form-group">
                    <label htmlFor="">Type City Name</label>
                    <input type="text"
                        className="form-control " name="city"
                        id="city"
                        value={props.city}
                        onChange={props.change}
                        aria-describedby="helpId"
                        placeholder="" />
                        
                </div>

            </div>
            
            <div className="col-lg-1 text-center " >
                <label htmlFor=""></label>
                <label htmlFor="">Search</label>
                <button onClick={props.searchByCity}  className="btn btn-primary fa fa-search" ></button>
                
            </div>
            <div className="col-lg-5">
                <div className="form-group">
                    <label htmlFor="">Get Co-ordinate</label>
                    <button className="btn btn-light fa fa-crosshairs" onClick={props.getLocation}></button>
                    <div className="row">
                        <div className="bg-dark text-white rounded pt-1 pr-1">Lat</div>
                        <input type="number"
                            step="any"
                            className="form-control col mr-1"
                            name="lat"
                            id="lat"
                            onChange={props.change}
                            value={props.lat}
                            aria-describedby="helpId"
                            placeholder="" />
                         
                        <div className="bg-dark text-white rounded pt-1 pr-1 ">Lon</div>
                        <input type="number" step="any"
                            onChange={props.change}
                            className="form -control col" name="lon" id="lon"
                            value={props.lon}
                            aria-describedby="helpId"

                            placeholder="" />
                       </div>
                </div>
            </div>
            <div className="col-lg-1">
                <label htmlFor="">Search</label>
                <button onClick={props.search}  className="btn btn-primary fa fa-search " ></button>
            </div>
        </div>

    );
}

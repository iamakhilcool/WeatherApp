import React from 'react';

export default function Recent(props) {
    let data;
    if(props.recent==null){
        data="";
    }
    else{
        data = props.recent.map((recentData,id)=>{
            return <li 
            onClick={()=>props.research(recentData.lat,recentData.lon)}
             className="shadow mt-3 bg-dark text-light p-1" style={{textAlign:"center" }} key={id}
             >
                 {recentData.city}
            </li>;
        });
    }
  return (
      
    <div className="recent-box">
      <h3 className="shadow p-2 text-dark mt-2" style={{backgroundColor:"white"}}>Recent Searches</h3>
      <ul className="list-unstyled" style={{margin:"20px"}}>{data}</ul>
    </div>
     
  );
}

import React from 'react';
import LoaderCss from "../Assets/Loader.module.css";
export default function Loader() {
   
  return (
    <div id={LoaderCss.preloader}>
      <div id={LoaderCss.loader}></div>
    </div>
  );
}

import React from 'react';

const Preloaders = {
  A: "https://i.gifer.com/embedded/download/H0bj.gif",
  B: "https://cdn.dribbble.com/users/2014028/screenshots/4455123/opentime_from_png_20fps.gif",
};

const Preloader = () => {
  return (    
      <div>
        <img width="50" src={Preloaders.A}/>
      </div>    
  )
};

export default Preloader;
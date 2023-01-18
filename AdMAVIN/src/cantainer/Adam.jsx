import React from 'react';
import {Link} from "react-router-dom";

const Adam = () => {
  return (
    <div className='application'>
          <Link to=""><button className='btn bg-primary'>adam</button></Link>
          <Link to=""><button className='btn bg-primary'>ghost</button></Link>
          <Link to=""><button className='btn bg-primary'>Shared</button></Link>
         
    </div>
  )
}

export default Adam
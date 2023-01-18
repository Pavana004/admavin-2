import React from 'react'
import {Link} from "react-router-dom";
const User = () => {
  return (
    <div className='application'>
    <Link to=""><button className='btn bg-primary'>Application</button></Link>
    <Link to=""><button className='btn bg-primary'>System</button></Link>
    <Link to=""><button className='btn bg-primary'>Library</button></Link>
    <Link to=""><button className='btn bg-primary'>User</button></Link>
    <Link to=""><button className='btn bg-primary'>Application</button></Link>
    <Link to=""><button className='btn bg-primary'>System</button></Link>
    <Link to=""><button className='btn bg-primary'>Library</button></Link>
    <Link to=""><button className='btn bg-primary'>User</button></Link>
</div>
  )
}

export default User
import React from 'react'
import {Link} from "react-router-dom"


const System = () => {
  return (
    <div className='application'>
    <Link to=""><button className='btn bg-primary'>Application</button></Link>
    <Link to=""><button className='btn bg-primary'>System</button></Link>
    <Link to=""><button className='btn bg-primary'>Library</button></Link>
    <Link to=""><button className='btn bg-primary'>User</button></Link>
</div>
  )
}

export default System
import React from 'react'
import {Link} from "react-router-dom"

const Library = () => {
  return (
    <div className='application'>
    <Link to=""><button className='btn bg-primary'>Application</button></Link>
    <Link to=""><button className='btn bg-primary'>System</button></Link>
    
</div>
  )
}

export default Library
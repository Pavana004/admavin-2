import React from 'react'
import { Link } from 'react-router-dom'


const Parents = () => {
    
  return (
    <div className='parents'>
          <Link to="/app"><button className='btn bg-primary'>Application</button></Link>
          <Link to="/system"><button className='btn bg-primary'>System</button></Link>
          <Link to="/library"><button className='btn bg-primary'>Library</button></Link>
          <Link to="/user"><button className='btn bg-primary'>User</button></Link>
    </div>
  )
}

export default Parents
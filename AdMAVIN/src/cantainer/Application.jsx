import React from 'react'
import {Link} from "react-router-dom"

const Application = () => {
  
    
  return (
    <div className='application'>
          <Link to="/adam"><button className='btn bg-primary'>adam</button></Link>
          <Link to=""><button className='btn bg-primary'>ghost</button></Link>
          <Link to=""><button className='btn bg-primary'>Shared</button></Link>
          <Link to=""><button className='btn bg-primary'>thing1</button></Link>
          <Link to=""><button className='btn bg-primary'>thing2</button></Link>
          <Link to=""><button className='btn bg-primary'>tonyae</button></Link>
    </div>
  )
}

export default Application
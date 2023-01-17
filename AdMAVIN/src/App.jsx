import { useState } from 'react'
import './App.css'
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {

  const[data,setData]=useState(Array.from({length:20}))
  const [more,setMore] = useState(true)  
  
  const fetchData =  ()=>{
    if(data.length < 200){
      setTimeout(()=>{
        setData(data.concat(Array.from({length:20})))
      },500)
    }else{
      setMore(false);
    }
  
  }
   

  return (
    <div className="App">
     <h3>INFINITY SCROLL</h3>
      <InfiniteScroll dataLength={data.length} next={fetchData}
      loader={<h4>Loading...</h4>}
      hasMore={more}
      endMessage={<h4>end...</h4>}

      >

        {data.map((res,key)=>{
          return(
            <div className='infinity'>Infinity Scroll-{key +1}</div>
          )
        })}

      </InfiniteScroll>
    </div>
  )
}

export default App
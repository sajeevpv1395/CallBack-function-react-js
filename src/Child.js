import React from 'react'

function Child({data,ChangeTitle}) {
  return (
    <div className='Child' style={{backgroundColor: "red",width:"300px", height:"300px",textAlign:"center",marginLeft:"400px"}}>
        <h2>child components</h2>
    
      <button onClick={()=>ChangeTitle("welcome")}>click me</button>
    </div>
  )
}

export default Child

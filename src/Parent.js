import React, { useState } from 'react'
import Child from './Child'
function Parent() {
    const[word,SetWord]=useState("parent")
  return (
    <div style={{backgroundColor: "lightblue",width:"100%", height:"600px"}}>
        <h2>Parent Components</h2>
      <h1>{word}</h1>
      <Child ChangeTitle={text=>SetWord(text)}/>
    </div>
  )
}

export default Parent

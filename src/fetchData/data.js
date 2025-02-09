import React, { useEffect, useState } from 'react'

function data() {
  const [data,setData] = useState({});
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((resp)=>resp.json())
    .then((jsData)=>setData(jsData))
  },[])
  console.log(data)
}

export default data

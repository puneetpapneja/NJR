import React from 'react'
import { memo } from "react";

export default function  Memocomponent({prop}) {
    console.log('render')
  return (
    <div>
        {prop.map((todo,id)=>{
           
           return <h1 key={id}>{todo}</h1>

        })}
    </div>
  )
}

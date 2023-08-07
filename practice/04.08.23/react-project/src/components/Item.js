import React from 'react'

export default function Item({x,clr}) {
  return (
    <>
    <div id='gfs' style={{
        backgroundColor:`${clr}`
    }}>{x}</div>
    </>
  )
}

import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function PageLayout() {
  return (
    <React.Fragment>
        <Header/>
        <Outlet/>
    </React.Fragment>
  )
}

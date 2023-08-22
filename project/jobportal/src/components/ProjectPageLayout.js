import React from 'react'
import { Outlet } from 'react-router'

const ProjectPageLayout = () => {
  return (
    <React.Fragment>
        {/* <Header /> */}
        <Outlet />
    </React.Fragment>
  )
}

export default ProjectPageLayout


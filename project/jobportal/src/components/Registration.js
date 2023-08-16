import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Registration = () => {
  return (

    <Button as={Link} to={'/Dashboard'}>Dashboard</Button>
  )
}

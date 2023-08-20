import React from 'react'

export const Footer = () => {
  let footerstyle = {
    padding: "1%",
    position: "relative",
    width: "100%",
    top: "50vh",
  }
  return (
    <div className="footer bg-dark text-light text-center" style={footerstyle}>
      Copyright &copy; Myreact.com
    </div>
  )
}

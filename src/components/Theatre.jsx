// import React from 'react'

import { Outlet } from "react-router-dom"

export default function Theatre() {
  console.log(localStorage.getItem('movie'))
  console.log("Hello")
  return (
    <div>
      <p>Hello</p>
      <Outlet />
    </div>
  )
}

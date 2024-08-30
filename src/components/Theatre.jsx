// import React from 'react'

import { Outlet } from "react-router-dom"

export default function Theatre() {
  console.log(localStorage.getItem('movie'))
  return (
    <div>
      hello
      <Outlet />
    </div>
  )
}

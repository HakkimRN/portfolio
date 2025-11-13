import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
    <div className="sidebar">
      <Link>Github</Link>
      <Link>Instagram</Link>
      <Link>LinkedIn</Link>
    </div>
    </>
  )
}

export default Sidebar
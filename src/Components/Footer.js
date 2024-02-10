import React from "react"
import langCommon from "../lang/langCommon"

function Footer() {
  return (
    <div
      className='text-white p-3 rounded'
      style={{ backgroundColor: "cornsilk" }}
    >
      <div className='text-md-right text-dark'>
        <p style={{ display: "inline" }}>{langCommon.CREATED_BY}</p>
      </div>
    </div>
  )
}

export default Footer

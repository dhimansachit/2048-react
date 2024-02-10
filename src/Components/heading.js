import React, { Component } from "react"
import langCommon from "../lang/langCommon"

class Heading extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 className='text-center font-weight-bold p-4 bg-danger display-3 rounded'>
            {langCommon.HEADING}
          </h1>
        </div>
      </div>
    )
  }
}

export default Heading

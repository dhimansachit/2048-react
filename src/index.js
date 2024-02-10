import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Heading from "./Components/heading"
import App from "./Components/App"
import "bootstrap/dist/css/bootstrap.css"
import Footer from "./Components/Footer"

ReactDOM.render(
  <React.StrictMode>
    <Heading />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

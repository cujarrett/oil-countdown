import React, { useState, useEffect } from "react"
import "./App.css"

import { Content } from "./components/content/index.js"
import { Footer } from "./components/footer/index.js"

const App = () => {
  const [initialLoad, setInitialLoad] = useState(true)
  const [oilLeft, setOilLeft] = useState(1517941760333)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOilLeft(Math.round(oilLeft - 4.68286417243))
    }, 4.16666666667)

    return () => clearInterval(intervalId)
  }, [oilLeft])

  useEffect(() => {
    const dataReferenceDate = new Date("2020-02-10T10:07:26")
    const now = new Date()
    const diffTime = Math.abs(dataReferenceDate - now)
    const diff = Math.ceil(diffTime / (1000))
    setOilLeft(Math.round(oilLeft - (diff * 1123.88740138)))
    setInitialLoad(false)
  }, [initialLoad])

  return (
    <div className="app">
      <Content oilLeft={oilLeft}/>
      <Footer/>
    </div>
  )
}

export default App

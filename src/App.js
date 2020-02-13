import React, { useState, useEffect } from "react"
import "./App.css"

import { Content } from "./components/content/index.js"
import { Footer } from "./components/footer/index.js"

const oilUsedPerMs = 1.15559027778

const App = () => {
  const [initialLoad, setInitialLoad] = useState(true)
  const [oilLeft, setOilLeft] = useState(1727500000000)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOilLeft(oilLeft - oilUsedPerMs)
    }, 1)

    return () => clearInterval(intervalId)
  }, [oilLeft])

  useEffect(() => {
    const dataReferenceDate = new Date("2019-11-19T00:00:00")
    const now = new Date()
    const diffTime = Math.abs(dataReferenceDate - now)
    const diff = Math.ceil(diffTime)
    setOilLeft(oilLeft - (diff * oilUsedPerMs))
    setInitialLoad(false)
  }, [initialLoad])

  return (
    <div className="app">
      <Content oilLeft={Math.round(oilLeft)}/>
      <Footer/>
    </div>
  )
}

export default App

import React, { useState, useEffect } from "react"
import "./App.css"

import { Content } from "./components/content/index.js"
import { Footer } from "./components/footer/index.js"

const oilUsedPerMs = 1.15559027778

const App = () => {
  const [initialLoad, setInitialLoad] = useState(true)
  const [oilLeft, setOilLeft] = useState(1727500000000)
  const [timeLeft, setTimeLeft] = useState()

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOilLeft(oilLeft - oilUsedPerMs)
    }, 1)

    return () => clearInterval(intervalId)
  }, [oilLeft])

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date()
      const endOfOilReferenceDate = new Date("2069-11-19T00:00:00")
      const timeLeft = Math.abs(now - endOfOilReferenceDate)
      const msLeft = Math.ceil(timeLeft)
      const secsLeft = msLeft / 1000
      const minsLeft = secsLeft / 60
      const hoursLeft = minsLeft / 60
      const daysLeft = hoursLeft / 24
      const yearsLeft = daysLeft / 365.25

      const yearsLeftFormatted = Math.floor(yearsLeft)
      const daysLeftFormatted = Math.floor(daysLeft % 365.25)
      const hoursLeftFormatted = Math.floor(hoursLeft % 24)
      const minsLeftFormatted = Math.floor(minsLeft % 60)
      const secsLeftFormatted = Math.floor(secsLeft % 60)
      // Long line ¯\_(ツ)_/¯
      // eslint-disable-next-line max-len
      const timeLeftFormatted = `${yearsLeftFormatted} years ${daysLeftFormatted} days ${hoursLeftFormatted} hours ${minsLeftFormatted} mins ${secsLeftFormatted} seconds`
      setTimeLeft(timeLeftFormatted)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [timeLeft])

  useEffect(() => {
    const dataReferenceDate = new Date("2019-11-19T00:00:00")
    const now = new Date()
    const elapsedTimeSinceReport = Math.abs(dataReferenceDate - now)
    const msElapsedSinceReport = Math.ceil(elapsedTimeSinceReport)
    setOilLeft(oilLeft - (msElapsedSinceReport * oilUsedPerMs))
    setInitialLoad(false)
    // This function only runs on initial load and afterwards it has no need to calculate oil left
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialLoad])

  return (
    <div className="app">
      <Content oilLeft={Math.round(oilLeft)} timeLeft={timeLeft}/>
      <Footer/>
    </div>
  )
}

export default App

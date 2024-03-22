/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import AgeCalculatorForm from './components/AgeCalculatorForm'
import AgeResult from './components/AgeResult'
import {differenceInYears, differenceInMonths, differenceInDays} from 'date-fns'

function App() {
  const [age, setAge] = useState(null)
  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDayObject = new Date(birthDate);
    const ageYears = differenceInYears(today, birthDayObject)
    const ageMonths = differenceInMonths(today, birthDayObject)
    const ageDays = differenceInDays(today, birthDayObject)
    console.log(ageYears+" - "+ageMonths+" - "+ageDays)

    setAge({
      years: ageYears,
      months: ageMonths,
      days: ageDays,
    })
  }

  return (
    
    <div>
        <div className="container">
            <h1>
            Age Calculator
            </h1>
            <p>
                Enter your age to calculate in years, months and days.
            </p>
            <AgeCalculatorForm calculateAge={calculateAge} />
            {age && <AgeResult age={age} />}
        </div>
    </div>
  )
}

export default App

/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../App.css'

const AgeCalculatorForm = ({ calculateAge }) => {
    const [birthDay, setBirthDay] = useState('')
    console.log(birthDay)

    //Calling Function
    const handleChangeDate = (e) => {
        setBirthDay(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        calculateAge(birthDay)
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="date" name="" value={birthDay} onChange={handleChangeDate} />
            <button disabled={!birthDay} type='submit'>Calculate Age</button>
        </form>
    </div>
  )
}

AgeCalculatorForm.propTypes = {
    calculateAge: PropTypes.func.isRequired
}



export default AgeCalculatorForm
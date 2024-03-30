import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
import SignupForm from './SignupForm'
import axios from 'axios'

const Signup = () => {
  // const navigate = useNavigate()

  // getting the input fields into an object as a state
  const [gender, setGender] = useState()
  const [location, setLocation] = useState()
  const [userDetails, setUserDetails] = useState({
    firstname: '',
    lastname: '',
    phoneNumber: '',
    password: '',
  })
  const [firstnameError, setFirstnameError] = useState(false)
  const [lastnameError, setLastnameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [locationError, setLocationError] = useState(false)
  const [genderError, setGenderError] = useState(false)

  const [errMsg, setErrMsg] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  // fetchData connects the frontend to the backend
  //it is called upon submission and all validatiion runs
  const handleError = () => {
    setEmailError(false)
    setLastnameError(false)
    setFirstnameError(false)
    setGenderError(false)
    setLocationError(false)
  }

  const checkNumber = (value) => {
    if (isNaN(value)) return false
    setUserDetails({ ...userDetails, phoneNumber: value })

    console.log(value)
  }
  const fetchData = async () => {}
  const handleSubmit = async (e) => {
    e.preventDefault()
    const firstnameRegex = /^[a-zA-Z]+$/ // Regular expression to match alphabetic characters only
    if (!firstnameRegex.test(userDetails.firstname)) {
      setFirstnameError(true) // Set error state if firstname contains non-alphabetic characters
    }
    const lastnameRegex = /^[a-zA-Z]+$/ // Regular expression to match alphabetic characters only
    if (!lastnameRegex.test(userDetails.lastname)) {
      setLastnameError(true) // Set error state if firstname contains non-alphabetic characters
    }
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    const emails = userDetails.email
    if (emails < 1) {
      setEmailError(true)
      return
    }
    if (!emailRegex.test(userDetails.email)) {
      // Check if email format is valid
      setEmailError(true)
    }
    if (!location) {
      setLocationError(true)
    }
    if (!gender) {
      setGenderError(true)
      return
    }

    fetchData()
  }
  return (
    <div className="w-full rounded-xl mx-auto my-auto mt-8 px-2 py-4 text-center bg-blue-950">
      <div className="p-4">
        <h1 className="text-white font-bold text-[2rem]">Registration Form </h1>
      </div>
      <SignupForm
        gender={gender}
        setGender={setGender}
        location={location}
        setLocation={setLocation}
        userDetails={userDetails}
        setUserDetails={setUserDetails}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        isError={isError}
        setIsError={setIsError}
        errMsg={errMsg}
        firstnameError={firstnameError}
        lastnameError={lastnameError}
        emailError={emailError}
        checkNumber={checkNumber}
        locationError={locationError}
        genderError={genderError}
        handleError={handleError}
      />
    </div>
  )
}
export default Signup

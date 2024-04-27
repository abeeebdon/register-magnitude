import { useState } from 'react'
import SignupForm from './SignupForm'
import axios from 'axios'

const Signup = ({ setSuccess }) => {
  // getting the input fields into an object as a state
  const [userDetails, setUserDetails] = useState({
    firstname: '',
    lastname: '',
    phoneNumber: '',
    password: '',
    location: '',
    gender: '',
    skills: '',
  })
  const [firstnameError, setFirstnameError] = useState(false)
  const [lastnameError, setLastnameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [locationError, setLocationError] = useState(false)
  const [genderError, setGenderError] = useState(false)
  const [skillError, setSkillError] = useState(false)

  const [optionValue, setOptionValue] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const URL = 'https://entacrest.azurewebsites.net/reg/register/'
  const postData = {
    first_name: userDetails.firstname,
    last_name: userDetails.lastname,
    email: userDetails.email,
    phone: userDetails.phoneNumber,
    gender: userDetails.gender,
    technical_skill: userDetails.skills,
    heard_by: optionValue,
    location: userDetails.location,
  }
  // fetchData connects the frontend to the backend

  //it is called upon submission and all validatiion runs
  const handleError = () => {
    setEmailError(false)
    setLastnameError(false)
    setFirstnameError(false)
    setGenderError(false)
    setLocationError(false)
    setSkillError(false)
    setIsError(false)
  }
  const handleOptionChange = (e) => {
    setOptionValue(e.target.value)
  }
  const checkNumber = (value) => {
    if (isNaN(value)) return false
    setUserDetails({ ...userDetails, phoneNumber: value })
  }
  const fetchData = async () => {
    setSuccess(true)
    try {
      setIsError(false)
      const resp = await axios.post(URL, postData)
      console.log(resp)

      if (resp.status === 201) {
        setIsLoading(false)
        setSuccess(true)
      }
    } catch (err) {
      setIsError(true)
      setIsLoading(false)
      const error = err?.response?.data?.message
      setErrMsg(error)
    }
  }
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

    if (!userDetails.skills) {
      setSkillError(true)
    }
    if (!userDetails.gender) {
      setGenderError(true)
      return
    }
    if (!userDetails.location) {
      setLocationError(true)
      return
    }
    setIsLoading(true)

    fetchData()
  }
  return (
    <section id="register" className="basis-[45%]">
      <div className="mx-auto my-auto  px-2 py-2 text-center ">
        <div className="p-4">
          <h1 className="registernabout">REGISTER</h1>
        </div>
        <div>
          <p>
            Please kindly register below to attend the events and be a part of
            the first to
            <p>know about the latest news and features</p>
          </p>
        </div>
        <SignupForm
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
          skillError={skillError}
          handleOptionChange={handleOptionChange}
        />
      </div>
    </section>
  )
}
export default Signup

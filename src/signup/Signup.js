import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import { CgSpinner } from 'react-icons/cg'

// Validation schema using Yup
const validationSchema = yup.object().shape({
  first_name: yup.string().required('First name is required'),
  last_name: yup.string().required('Last name is required'),
  phone: yup
    .string()
    .matches(/^\d+$/, 'Phone number must be numeric')
    .required('Phone number is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  skills: yup.string().required('Skills are required'),
})

const Signup = ({ setSuccess }) => {
  const [errMsg, setErrMsg] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [optionValue, setOptionValue] = useState('')
  const [gender, setGender] = useState(true)
  const [location, setLocation] = useState('Lagos')
  const URL = 'https://twocdc-conference.onrender.com/reg/register/'

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = async (data) => {
    console.log(data)
    setIsLoading(true)
    setIsError(false)
    setErrMsg('')

    try {
      const response = await axios.post(URL, {
        ...data,
        gender: gender,
        location: location,
        heard_by: optionValue,
      })
      console.log(response)
      if (response.status === 201) {
        setIsLoading(false)
        setSuccess(true)
        reset()
      }
    } catch (err) {
      setIsError(true)
      setIsLoading(false)
      const error = err?.response?.data?.message || err.message
      setErrMsg(error)
    }
  }

  const handleOptionChange = (e) => {
    setOptionValue(e.target.value)
  }

  return (
    <section id="register" className="basis-[45%] p-2">
      <div className="mx-auto my-auto px-2 text-center sm:border border-blue-950 rounded-lg">
        <div className="p-2">
          <h1 className="registernabout">REGISTER</h1>
        </div>
        <div>
          <p>Register to attend the 2CDC Conference</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* First name and  last name */}
          <div className="pr-4 w-full max-w-[550px] mx-auto justify-between">
            <div className="mx-2 my-4 w-full">
              <input
                placeholder="First Name"
                {...register('first_name')}
                className="input"
              />
              {errors.firstname && (
                <p className="errors">{errors.firstname.message}</p>
              )}
            </div>
            <div className="mx-2 my-4 w-full">
              <input
                {...register('last_name')}
                className="input"
                placeholder="Last Name"
              />
              {errors.lastname && (
                <p className="errors">{errors.lastname.message}</p>
              )}
            </div>
          </div>

          {/* Email and Password  */}
          <div className="pr-4 w-full max-w-[550px] mx-auto justify-between">
            <div className="mx-2 my-4 w-full">
              <input
                {...register('email')}
                className="input"
                placeholder="Email Address"
              />
              {errors.email && <p className="errors">{errors.email.message}</p>}
            </div>

            <div className="mx-2 my-4 w-full">
              <input
                {...register('phone')}
                className="input"
                placeholder="Phone Number"
              />
              {errors.phoneNumber && (
                <p className="errors">{errors.phoneNumber.message}</p>
              )}
            </div>
          </div>
          <div className="pr-4 w-full max-w-[550px] mx-auto justify-between">
            <div className="p-2 text-left flex">
              <label className="block">Gender:</label>
              <div className="px-2">
                <input
                  type="radio"
                  name="gender"
                  value="true"
                  checked={gender === 'true'}
                  onChange={(e) => setGender(e.target.value)}
                />
                <span className="mx-2">Male</span>
              </div>
              <div className="px-2">
                <input
                  type="radio"
                  name="gender"
                  value="false"
                  checked={gender === 'false'}
                  onChange={(e) => setGender(e.target.value)}
                />
                <span className="mx-2">Female</span>
              </div>
            </div>

            {/* Skills Checkboxes */}
            <div className="mx-2 my-4 w-full text-left">
              <label className="block">Do you have any technical skills?</label>
              <div className="flex items-center space-x-4">
                <label>
                  <input
                    type="radio"
                    value="true"
                    {...register('skills')}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    value="false"
                    {...register('skills')}
                    className="mr-2"
                  />
                  No
                </label>
              </div>
              {errors.skills && (
                <p className="errors">{errors.skills.message}</p>
              )}
            </div>
          </div>

          <div className="m-2 text-left p-2  mx-auto max-w-[550px] justify-start items-center gap-6">
            <label className="block w-fit">How did you hear about us?</label>

            <select
              className="outline-none w-full p-2"
              onChange={handleOptionChange}
            >
              <option className="option-input" value="">
                Select an option
              </option>

              <option className="option-input" value="Google">
                Google
              </option>
              <option className="option-input" value="Facebook">
                Facebook
              </option>
              <option className="option-input" value="Linkedin">
                Linkedin
              </option>
              <option className="option-input" value="Instagram">
                Instagram
              </option>
              <option className="option-input" value="Others">
                Others
              </option>
            </select>
          </div>
          <div className="m-2 text-left p-2  mx-auto max-w-[550px] justify-start items-center gap-6">
            <label className="block w-fit">Select your location</label>

            <select
              className="outline-none w-full p-2"
              onChange={(e) => setLocation(e.target.value)}
            >
              <option className="option-input" value="lagos">
                Lagos
              </option>
              <option className="option-input" value="others">
                Others
              </option>
            </select>
          </div>
          {isError && <p className="errors text-center">{errMsg}</p>}
          <div className="mx-auto m-4 pb-10 w-[100%] max-w-[550px] relative">
            <button
              type="submit"
              className="bg-blue-950 p-3 rounded-lg text-white text-center font-semibold w-full outline-none sm:max-w-[200px] sm:absolute right-0"
              disabled={isLoading}
            >
              {isLoading ? (
                <CgSpinner
                  className="animate-spin text-[1.4rem] w-full mx-auto"
                  size={24}
                />
              ) : (
                'Register'
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Signup

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import { CgSpinner } from 'react-icons/cg'

// Validation schema using Yup
const validationSchema = yup.object().shape({
  firstname: yup.string().required('First name is required'),
  lastname: yup.string().required('Last name is required'),
  phoneNumber: yup
    .string()
    .matches(/^\d+$/, 'Phone number must be numeric')
    .required('Phone number is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  location: yup.string().required('Location is required'),
  gender: yup.string().required('Gender is required'),
  skills: yup.string().required('Skills are required'),
})

const Signup = ({ setSuccess }) => {
  const [errMsg, setErrMsg] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [optionValue, setOptionValue] = useState('')

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
    setIsLoading(true)
    setIsError(false)
    setErrMsg('')

    try {
      const response = await axios.post(URL, { ...data, heard_by: optionValue })
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
        <SignupFor
          onSubmit={handleSubmit(onSubmit)}
          register={register}
          isLoading={isLoading}
          isError={isError}
          errMsg={errMsg}
          errors={errors}
          handleOptionChange={handleOptionChange}
        />
      </div>
    </section>
  )
}

export default Signup

const SignupFor = ({
  onSubmit,
  register,
  isLoading,
  isError,
  errMsg,
  errors,
  handleOptionChange,
}) => (
  <form onSubmit={onSubmit}>
    {/* First name and  last name */}
    <div className="pr-4 w-full max-w-[550px] mx-auto justify-between">
      <div className="mx-2 my-4 w-full">
        <input
          placeholder="First Name"
          {...register('firstname')}
          className="input"
        />
        {errors.firstname && (
          <p className="errors">{errors.firstname.message}</p>
        )}
      </div>
      <div className="mx-2 my-4 w-full">
        <input
          {...register('lastname')}
          className="input"
          placeholder="Last Name"
        />
        {errors.lastname && <p className="errors">{errors.lastname.message}</p>}
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
          {...register('phoneNumber')}
          className="input"
          placeholder="Phone Number"
        />
        {errors.phoneNumber && (
          <p className="errors">{errors.phoneNumber.message}</p>
        )}
      </div>
    </div>
    <div className="pr-4 w-full max-w-[550px] mx-auto justify-between">
      <div className="mx-2 my-4 text-left w-full">
        <label className="block">Gender:</label>
        <div className="flex items-center space-x-4">
          <label>
            <input
              type="radio"
              value="male"
              {...register('gender')}
              className="mr-2"
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              value="female"
              {...register('gender')}
              className="mr-2"
            />
            Female
          </label>
        </div>
        {errors.gender && <p className="errors">{errors.gender.message}</p>}
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
        {errors.skills && <p className="errors">{errors.skills.message}</p>}
      </div>
    </div>

    <div className="m-2 text-left p-2  mx-auto max-w-[550px] justify-start items-center gap-6">
      <label className="block w-fit">How did you hear about us?</label>

      <select className="outline-none w-full p-2" onChange={handleOptionChange}>
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
        <option className="option-input" value="Friends">
          Friends
        </option>
        <option className="option-input" value="Others">
          Others
        </option>
      </select>
    </div>
    <div className="p-2 max-w-[550px] mx-auto">
      <input
        {...register('location')}
        className="input"
        placeholder="Please Enter Your Location"
      />
      {errors.location && <p className="errors">{errors.location.message}</p>}
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
)

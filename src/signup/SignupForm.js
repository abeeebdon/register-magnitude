import { CgSpinner } from 'react-icons/cg'

const SignupForm = ({
  userDetails,
  handleSubmit,
  setUserDetails,
  isLoading,
  firstnameError,
  lastnameError,
  emailError,
  errMsg,
  isError,
  locationError,
  genderError,
  checkNumber,
  handleError,
  skillError,
  handleOptionChange,
}) => {
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className=""
      onClick={() => handleError()}
    >
      {/* for names */}
      <div className="pr-4 w-full max-w-[550px] mx-auto justify-between">
        <div className="m-2 my-4 w-full">
          <input
            type="text"
            id="Firstname"
            placeholder="First Name"
            value={userDetails.firstname}
            onChange={(e) =>
              setUserDetails({ ...userDetails, firstname: e.target.value })
            }
            className="input"
          />
          {firstnameError && <p className="error">This is a required field</p>}
        </div>
        <div className="mx-2 my-4 w-full">
          <input
            type="text"
            id="Lastname"
            placeholder="Last Name"
            value={userDetails.lastname}
            onChange={(e) =>
              setUserDetails({ ...userDetails, lastname: e.target.value })
            }
            className="input"
          />
          {lastnameError && <p className="error">This is a required field</p>}
        </div>
      </div>
      {/* for email and phone number */}
      <div className="pr-4 w-full max-w-[550px] mx-auto justify-between">
        <div className="mx-2 my-4 w-full">
          <input
            type="text"
            id="email"
            placeholder="Email Address"
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
            className="input"
          />
          {emailError && <p className="error">Please enter a valid email</p>}
        </div>
        <div className="mx-2 my-4 w-full">
          <input
            type="text"
            id="number"
            placeholder="Phone Number"
            value={userDetails.phoneNumber}
            onChange={(e) => {
              checkNumber(e.target.value)
            }}
            className="input"
          />
        </div>
      </div>
      {/* for Gender and technical skills */}
      <div className="pr-4 w-full max-w-[550px] mx-auto justify-between">
        <div className="p-2 text-left flex">
          <label className="block">Gender:</label>
          <div className="px-2">
            <input
              type="radio"
              name="gender"
              value="true"
              checked={userDetails.gender === 'true'}
              onChange={(e) =>
                setUserDetails({ ...userDetails, gender: e.target.value })
              }
            />
            <span className="mx-2">Male</span>
          </div>
          <div className="px-2">
            <input
              type="radio"
              name="gender"
              value="false"
              checked={userDetails.gender === 'false'}
              onChange={(e) =>
                setUserDetails({ ...userDetails, gender: e.target.value })
              }
            />
            <span className="mx-2">Female</span>
          </div>
        </div>
        <div className="m-2 text-left  flex">
          <label className="block">Do you have any technical skills?</label>

          <div className="px-2">
            <input
              type="checkbox"
              name="skills"
              value="true"
              checked={userDetails.skills === 'true'}
              onChange={(e) =>
                setUserDetails({ ...userDetails, skills: e.target.value })
              }
            />
            <span className="md:mx-2">Yes</span>
          </div>
          <div className="px-2">
            <input
              type="checkbox"
              name="skills"
              value="false"
              checked={userDetails.skills === 'false'}
              onChange={(e) =>
                setUserDetails({ ...userDetails, skills: e.target.value })
              }
            />
            <span className="sm:mx-2">No</span>
          </div>
        </div>
      </div>
      <div className="mx-4">
        {skillError && genderError && (
          <p className=" text-red-500 text-left">This is a required field</p>
        )}
      </div>
      {/* How did you hear about us */}
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
          type="text"
          id="location"
          value={userDetails.location}
          onChange={(e) =>
            setUserDetails({ ...userDetails, location: e.target.value })
          }
          placeholder="Please Enter Your Location"
          className="input"
        />
        {locationError && <p className="error">This is a required field</p>}
      </div>
      {isError && (
        <div className="text-red-400 text-[1rem] m-2">
          <p>{errMsg}</p>
        </div>
      )}
      <div className="mx-auto m-4 pb-14 w-[100%] max-w-[550px] relative">
        {isLoading ? (
          <div className="bg-blue-950 p-3 rounded-lg text-white font-semibold w-full outline-none sm:w-[200px] text-center sm:absolute right-0">
            <CgSpinner className="animate-spin text-[1.4rem] w-full mx-auto" />
          </div>
        ) : (
          <button className="bg-blue-950 p-3 rounded-lg text-white font-semibold w-full outline-none sm:max-w-[200px] sm:absolute right-0">
            Register Here
          </button>
        )}
      </div>
    </form>
  )
}
export default SignupForm

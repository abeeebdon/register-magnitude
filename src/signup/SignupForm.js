import { CgSpinner } from 'react-icons/cg'

const SignupForm = ({
  userDetails,
  handleSubmit,
  setUserDetails,
  gender,
  setGender,
  location,
  setLocation,
  isLoading,
  firstnameError,
  lastnameError,
  emailError,
  locationError,
  genderError,
  checkNumber,
  handleError,
  skills,
  setSkills,
  skillError,
  handleOptionChange,
}) => {
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="w-full"
      onClick={() => handleError()}
    >
      {/* for names */}
      <div className="pr-4 w-full sm:flex justify-between">
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
      <div className="pr-4 w-full sm:flex justify-between">
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
      <div className="pr-4 w-full sm:flex justify-between">
        <div className="m-2 text-left text-white p-2 flex">
          <label className="block">Gender:</label>
          <div className="px-2">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === 'male'}
              onChange={() => setGender('male')}
            />
            Male
          </div>
          <div className="px-2">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === 'female'}
              onChange={() => setGender('female')}
            />
            Female
          </div>
          {genderError && (
            <p className="block text-red-500 text-left">
              Please select your gender
            </p>
          )}
        </div>
        <div className=" m-2 text-left text-white p-2 flex">
          <label className="block">Do you have any technical skills?</label>

          <div className="px-2">
            <input
              type="radio"
              name="gender"
              value="Yes"
              checked={skills === 'yes'}
              onChange={() => setSkills('yes')}
            />
            Yes
          </div>
          <div className="px-2">
            <input
              type="radio"
              name="gender"
              value="No"
              checked={skills === 'No'}
              onChange={() => setSkills('No')}
            />
            No
          </div>

          {skillError && (
            <div>
              <p className=" text-red-500 text-left">
                This is a required field
              </p>
            </div>
          )}
        </div>
      </div>
      {/* How did you hear about us */}
      <div className="m-2 text-left text-white p-2 sm:flex justify-start items-center gap-6">
        <label className="w-fit">How did you hear about us</label>
        <select
          className="text-white outline-none  sm:w-fit  bg-blue-900 w-full p-2"
          onChange={handleOptionChange}
        >
          <option className="option-input" value="">
            Select an option
          </option>
          <option className="option-input" value="Facebook">
            Facebook
          </option>
          <option className="option-input" value="WhatsApp">
            WhatsApp
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
      <div className="m-4">
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Please Enter Your Location"
          className="input"
        />
        {locationError && <p className="error">This is a required field</p>}
      </div>
      <div className="m-4 bg-blue-600 p-2 rounded-lg">
        {isLoading ? (
          <CgSpinner className=" mx-auto w-[3rem] text-[3rem] text-blue-400 animate-spin" />
        ) : (
          <button className="text-white font-semibold">Register here</button>
        )}
      </div>
    </form>
  )
}
export default SignupForm

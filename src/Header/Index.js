import { FaBars } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import useWindowSize from '../hooks/useWindowSize'
import NavBar from '../components/NavBar'

const Index = ({ handleSideBar, sideBar }) => {
  const { width } = useWindowSize()
  return (
    <header className="flex justify-between items-center p-2">
      <div>
        <img src="./logo.png" alt="logo" className="w-[60px]" />
      </div>
      {width < 650 ? (
        <div className="cursor-pointer" onClick={() => handleSideBar()}>
          {sideBar ? (
            <MdClose className="text-[1.2rem] text-blue-600" />
          ) : (
            <FaBars className="text-[1.2rem] text-blue-600" />
          )}
        </div>
      ) : (
        <NavBar />
      )}
    </header>
  )
}

export default Index

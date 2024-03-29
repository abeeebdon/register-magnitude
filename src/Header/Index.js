import { FaBars } from 'react-icons/fa'
import useWindowSize from '../hooks/useWindowSize'
import NavBar from '../components/NavBar'

const Index = () => {
  const { width } = useWindowSize()
  return (
    <header className="flex justify-between items-center p-2 bg-red-100">
      <div>
        <img src="./logo.png" alt="logo" className="w-[60px]" />
      </div>
      {width < 650 ? (
        <div>
          <FaBars />
        </div>
      ) : (
        <NavBar />
      )}
    </header>
  )
}

export default Index

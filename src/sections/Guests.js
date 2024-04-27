import image1 from '../images/speaker1.jpg'
import image2 from '../images/speaker2.jpg'
const Guests = () => {
  const data = [
    {
      name: 'Gbolahan Alaba',
      position: 'Software Engineer',
      image: '/speaker1.jpg',
    },
    {
      name: 'Isaac Olowofila',
      position: 'CEO CovelTWorld',
      image: '/speaker2.jpg',
    },
    {
      name: 'Gbolahan Alaba',
      position: 'Software Engineer',
      image: '/speaker2.jpg',
    },
    {
      name: 'Gbolahan Alaba',
      position: 'Software Engineer',
      image: '/speaker2.jpg',
    },
  ]
  return (
    <article className="font-rubik pb-8">
      <div className="flex flex-wrap">
        {data.map((datum, index) => {
          return (
            <div
              key={index}
              className="relative my-6 py-10 h-[400px] w-[300px] text-center mx-auto"
            >
              <img src={datum.image} className="image" alt="elon" />
              <div className="bg-white p-4 w-[85%] absolute text-blue-600 text-[1.4rem] bottom-[-10%] left-0 right-0 mx-auto">
                <h2 className="font-bold">{datum.name}</h2>
                <p className="mt-4 text-[1.2rem]">{datum.position}</p>
              </div>
            </div>
          )
        })}
      </div>
    </article>
  )
}

export default Guests

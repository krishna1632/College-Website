import CountUp from 'react-countup';
import { Parallax } from 'react-parallax';

const Total = () => {

  return (
    <>
      <div className='relative mt-7 h-[500px] w-screen'>
        <Parallax
          blur={0}
          bgImage='images/students.jpg'
          strength={300}
          className='relative w-screen'
          bgImageStyle={{
            objectFit: 'cover', 
          }}
        >
          
        </Parallax>
        <div className='absolute inset-0 bg-black opacity-60'></div>
        <div className='absolute inset-0 flex items-center justify-around text-white'>
          <div className="flex flex-col items-center">
            <div className='text-4xl font-bold'>
              <CountUp end={3300} duration={1.5}></CountUp>
            </div>
            <div className='mt-7'>
              <img src="images/Belan_icon.png" alt="" className='' />
            </div>
            <div className='mt-7 text-2xl'>Students</div>
          </div>

          <div className="flex flex-col items-center">
            <div className='text-4xl font-bold'>
              <CountUp end={140} duration={1.5}></CountUp>
            </div>
            <div className='mt-7'>
              <img src="images/Belan_icon.png" alt="" className='' />
            </div>
            <div className='mt-7 text-2xl'>Faculty</div>
          </div>

          <div className="flex flex-col items-center">
            <div className='text-4xl font-bold'>
              <CountUp end={40} duration={1.5}></CountUp>
            </div>
            <div className='mt-7'>
              <img src="images/Belan_icon.png" alt="" className='' />
            </div>
            <div className='mt-7 text-2xl'>Program Offered</div>
          </div>
        </div>
      </div>

      <div className='h-[100px] w-screen bg-red-300'></div>
    </>


  )
}

export default Total;
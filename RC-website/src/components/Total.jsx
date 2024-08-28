// import CountUp from 'react-countup';
// import { Parallax } from 'react-parallax';

// const Total = () => {

//   return (
//     <>
//       <div className='mt-7'>
//         <Parallax
//           blur={0}
//           bgImage='images/students.jpg'
//           strength={300}
//           className='relative w-screen'
//           style={{ height: '400px' }}
//           bgImageStyle={{
//             objectFit: 'cover',
//             height: '100%'
//           }}
//         >

//           <div className='absolute inset-0 bg-black opacity-60'></div>
//           <div className='absolute inset-0 flex items-center justify-around text-white'>
//             <div className="flex flex-col items-center ">
//               <div className='text-4xl font-bold'>
//                 <CountUp end={3300} duration={1.5}></CountUp>
//               </div>
//               <div className='mt-7'>
//                 <img src="images/Belan_icon.png" alt="" className='' />
//               </div>
//               <div className='mt-7 text-2xl'>Students</div>
//             </div>

//             <div className="flex flex-col items-center ">
//               <div className='text-4xl font-bold'>
//                 <CountUp end={140} duration={1.5}></CountUp>
//               </div>
//               <div className='mt-7'>
//                 <img src="images/Belan_icon.png" alt="" className='' />
//               </div>
//               <div className='mt-7 text-2xl'>Faculty</div>
//             </div>

//             <div className="flex flex-col items-center ">
//               <div className='text-4xl font-bold'>
//                 <CountUp end={40} duration={1.5}></CountUp>
//               </div>
//               <div className='mt-7'>
//                 <img src="images/Belan_icon.png" alt="" className='' />
//               </div>
//               <div className='mt-7 text-2xl'>Program Offered</div>
//             </div>
//           </div>
//         </Parallax>
//       </div>


//     </>


//   )
// }

// export default Total;























import CountUp from 'react-countup';
import { Parallax } from 'react-parallax';

const Total = () => {

  return (
    <>
      <div className='mt-7'>
        <Parallax
          blur={0}
          bgImage='images/students.jpg'
          strength={300}
          className='relative w-screen'
          style={{ height: '400px' }} // Container height
          bgImageStyle={{
            objectFit: 'cover', // Image cover the container
            height: '100%',
            width: '100%'
          }}
        >
          <div className='absolute inset-0 bg-black opacity-60'></div>
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='flex flex-row justify-between w-full max-w-5xl'>
              {/* Left Side */}
              <div className='flex flex-col items-center w-1/3 text-white'>
                <div className='text-4xl font-bold'>
                  <CountUp end={3300} duration={1.5} />
                </div>
                <div className='mt-7'>
                  <img src="images/Belan_icon.png" alt="Belan Icon" />
                </div>
                <div className='mt-7 text-2xl'>Students</div>
              </div>

              {/* Center */}
              <div className='flex flex-col items-center w-1/3 text-white'>
                <div className='text-4xl font-bold'>
                  <CountUp end={140} duration={1.5} />
                </div>
                <div className='mt-7'>
                  <img src="images/Belan_icon.png" alt="Belan Icon" />
                </div>
                <div className='mt-7 text-2xl'>Faculty</div>
              </div>

              {/* Right Side */}
              <div className='flex flex-col items-center w-1/3 text-white'>
                <div className='text-4xl font-bold'>
                  <CountUp end={40} duration={1.5} />
                </div>
                <div className='mt-7'>
                  <img src="images/Belan_icon.png" alt="Belan Icon" />
                </div>
                <div className='mt-7 text-2xl'>Program Offered</div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </>
  )
}

export default Total;

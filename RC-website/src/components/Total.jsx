import CountUp from 'react-countup';
import { Parallax } from 'react-parallax';

const Total = () => {
  return (
    <>
      <div className='mt-7'>
        <Parallax blur={0} bgImage='images/exp.jpg' strength={300} className='parallax-container w-screen h-[270px]'>
          <div className='parallax-overlay'></div>
          <div className='parallax-content absolute inset-0 flex justify-around items-center text-white pt-20'>
            <div className='flex flex-col gap-5 items-center'>
              <div className='text-6xl font-bold'>
                <CountUp start={1} end={3300} duration={1.5} />
              </div>
              <div className=''>
                <img src="/images/Belan_icon.png" alt="Belan Icon" className='w-14'/>
              </div>
              <div className=' text-xl'>Students</div>
            </div>

            <div className='flex flex-col gap-5 items-center'>
              <div className='text-6xl font-bold'>
                <CountUp start={1} end={140} duration={1.5} />
              </div>
              <div className=''>
                <img src="/images/Belan_icon.png" alt="Belan Icon" className='w-14' />
              </div>
              <div className=' text-xl'>Faculty</div>
            </div>

            <div className='flex flex-col gap-5 items-center'>
              <div className='text-6xl font-bold'>
                <CountUp start={1} end={40} duration={1.5} />
              </div>
              <div className=''>
                <img src="/images/Belan_icon.png" alt="Belan Icon" className='w-14' />
              </div>
              <div className=' text-xl'>Program Offered</div>
            </div>
          </div>

        </Parallax>
      </div>

      <div className='h-[100px]'></div>

    </>
  );
};

export default Total;


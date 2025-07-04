import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
      <h1 className='md:text-4xl text-xl text-gray-800 font-semibold'>Learn anything, anytime, anywhere</h1>
      <p className='text-gray-500 sm:text-sm'>Join a world of limitless learning — flexible, accessible, and designed for your journey. Whether it&apos;s a new skill or a career leap, your future starts here.</p>
      <div className='flex items-center font-medium gap-6 mt-4'>
        <button className='px-10 py-3 rounded-md text-white bg-cyan-600'>Get started</button>
        <button className='flex items-center gap-2'>
          Learn more
          <img src={assets.arrow_icon} alt="arrow_icon" />
        </button>
      </div>
    </div>
  )
}

export default CallToAction
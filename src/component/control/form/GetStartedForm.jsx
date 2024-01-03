import React from 'react'
import ArrowButton from '../ArrowButton'
import FloatingEmailInput from '../input/FloatingEmailInput'

const GetStartedForm = () => {
  return (
<div className='max-w-2xl mx-auto mt-6'>
  <label className='text-5xl font-bold mb-5 block'>
    Track your fitness goals
  </label>
  <label className='max-w-xs mb-4 italic block'>
    Build a custom workout, log your results, and track your growth.
  </label>
  <div className='flex flex-col md:flex-row items-center mb-4'>
    <div className='w-full md:w-1/2 mb-4 md:mb-0 md:mr-4'>
      <FloatingEmailInput className='w-full md:w-2/3 lg:w-1/2' />
    </div>
    <div>
      <ArrowButton label={'Get Started'} />
    </div>
  </div>
</div>





  )
}

export default GetStartedForm
import React from 'react'
import ButtonBar from './ButtonBar'
import NavigationBarButton from '../control/NavigationBarButton';

const Header = () => {

  const navigationButtons = [
    { id: 1, label: 'Home', component: NavigationBarButton },
    { id: 2, label: 'Button 2', component: NavigationBarButton },
  ];

  const accountButtons = [
    { id: 1, label: 'Sign-In', component: NavigationBarButton },
    { id: 2, label: 'Get Started', component: NavigationBarButton },
  ];

  return (
    <>
      <div className='grid grid-cols-9 gap-y-4 mt-3'>
        <div className='ml-4 mt-3 font-bold text-xl col-span-2'>
          Cool Logo
        </div>
        <div className='col-span-5'>
          <ButtonBar buttons={navigationButtons}/>
        </div>
        <div className='col-span-2'>
          <ButtonBar buttons={accountButtons}/>
        </div>
      </div>
      
    </>
  )
}

export default Header
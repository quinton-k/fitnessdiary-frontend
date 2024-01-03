import React from 'react'

const NavigationBarButton = ({label}) => {
  return (
    <a href="#_" className="inline-flex items-center px-6 py-3 bg-transparent rounded-md hover:bg-transparent hover:text-gray-400">
        {label}
    </a>
  )
}

export default NavigationBarButton
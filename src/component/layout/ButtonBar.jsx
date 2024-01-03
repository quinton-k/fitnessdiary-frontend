import React from 'react'
import NavigationBarButton from '../control/NavigationBarButton';

const ButtonBar = ({buttons}) => {
  return (
    <div>
       {buttons.map((aButton) => {
        const { id, label } = aButton;
        return <NavigationBarButton key={id} label={label} />;
      })}
    </div>
  )
}

export default ButtonBar
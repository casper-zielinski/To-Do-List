import React, { ReactNode } from 'react'

interface Props{
      children:  string;
      color?: 'primary' | 'secondary' | 'danger';    //this is an optional property, it can be undefined
      onClick: () => void; // the 'primary' | 'secondary' | 'danger'; syntax means that this property can be one of the values in the array
}

const ExerciseButton = ({children, onClick, color = 'primary' } : Props) => {
  return (
    <button type="button" className={"btn btn-" + color + " p-2 m-4"} onClick={onClick}>{children}</button>
  )
}

export default ExerciseButton
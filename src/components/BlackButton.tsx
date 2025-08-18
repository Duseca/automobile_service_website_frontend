import React from 'react'
interface BlackButtonProps{
wFull : boolean;
handleClick?: (event : React.MouseEvent<HTMLButtonElement>)=>void
text:string;
}
const BlackButton = ({wFull=false, handleClick, text="Request a Quote"}:BlackButtonProps) => {
  return (
      <button
    onClick={handleClick}
    type='button'
              className={`bg-black cursor-pointer text-secondary px-4 py-2 rounded-md font-medium text-lg transition-colors
                ${wFull ? 'w-full':'w-auto'}
                `}
            >{text}
            </button>
  )
}

export default BlackButton

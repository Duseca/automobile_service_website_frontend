interface YellowButtonProps{
wFull : boolean;
handleClick?: (event : React.MouseEvent<HTMLButtonElement>)=>void
text:string;
}
const YellowButton = ({wFull=false, handleClick, text="Request a Quote"}: YellowButtonProps) => {
  return (
    <button
    onClick={handleClick}
    type='button'
              className={`bg-secondary cursor-pointer text-black px-4 py-2 rounded-md font-medium text-lg transition-colors
                ${wFull ? 'w-full':'w-auto'}
                `}
            >{text}
            </button>
  )
}

export default YellowButton

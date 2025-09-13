import { MapPinIcon } from '@heroicons/react/24/outline'

function Header() {
  return (
    <>
      <div className="flex items-center border p-2 rounded-lg">
        <div className='animate-bounce'>
          <MapPinIcon className='w-5' />
        </div>
        <span className="text-[clamp(.8rem,3vw,1rem)] font-bold">
          Philippines
        </span>
      </div>
    </>);
}

export default Header
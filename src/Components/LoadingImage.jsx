import Image from 'next/image'
import Logo from '../assets/Logo.png'
const LoadingImage = () => {
  return (
  <div className="animate-pulse flex justify-center items-center h-screen bg-color-primary_black">
    <Image src={Logo} alt="Loading" className="w-[50%]" />
  </div>
  )
}

export default LoadingImage
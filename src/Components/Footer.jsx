import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa"
const Footer = () => {
  return (
    <div className="Container flex flex-col justify-center mx-auto items-center mt-4 space-y-8 font-DMSans">
      <div className="flex space-x-8">
        <a href="https://facebook.com/" target="_blank" rel="noreferrer noopener"> <FaFacebookSquare size={25} /></a>
        <a href="https://instagram.com/" target="_blank" rel="noreferrer noopener"> <FaInstagram size={25} /></a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener"> <FaTwitter size={25} /></a>
        <a href="https://youtube.com/" target="_blank" rel="noreferrer noopener"> <FaYoutube size={25} /></a>
        
      </div>
      <div className="flex flex-col text-center space-y-4  md:space-x-8 md:flex-row md:space-y-0">
        <a href="http://google.com" target="_blank" rel="noopener noreferrer" className="font-bold">Conditions of Use</a>
        <a href="http://google.com" target="_blank" rel="noopener noreferrer" className="font-bold">Privacy & Policy</a>
        <a href="http://google.com" target="_blank" rel="noopener noreferrer" className="font-bold">Press Room</a>
      </div>
      <p className="text-lightGrey font-bold">© 2021 Movix</p>
    </div>
  )
}

export default Footer
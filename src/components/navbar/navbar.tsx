import Logo from '../../assets/elite-primary-logo.png';
import ShimmerButton from "../ui/shimmer-button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import ContactPopup from '../selltemplate/selltemplatecard';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/aboutus' },
  { name: 'ContactUs', href: '/contactus' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate()
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);
  return (
    <div className="relative z-50">
      <div className="flex justify-between items-center p-3 lg:p-10">
        <div  className="lg:w-72">
          <img onClick={() => {navigate('/')}} className="lg:h-16 h-12" src={Logo} alt="logo" />
        </div>
        
        <div className="lg:flex lg:w-96 justify-between text-gray-400 hidden">
          {navigation.map((element, index) => (
            <div className='cursor-pointer hover:text-white'  onClick={() => {navigate(element.href)}}  key={index}>
              {element.name}
            </div>
          ))}
        </div>
        <ContactPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
        
        <div className="lg:flex gap-5 lg:w-72 hidden">
          <ShimmerButton onClick={() => {
            handleOpenPopup()
          }} className="text-black" background={"#87a922"}>
            Contact Us
          </ShimmerButton>
          <ShimmerButton shimmerColor={"#87a922"}>
            Get Started
          </ShimmerButton>
        </div>
         
        <div className="lg:hidden block z-50">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-500 hover:text-gray-700  focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black shadow-lg z-50">
          <div className="px-4 py-6 space-y-4">
            {navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block text-gray-400 hover:text-gray-900"
              >
                {item.name}
              </a>
            ))}
            <div className="space-y-4 pt-4">
              <ShimmerButton 
                onClick={() => {navigate('contactus')}}
                className="w-full text-black" 
                background={"#87a922"}
              >
                Contact Us
              </ShimmerButton>
              <ShimmerButton 
                onClick={()=>{navigate('/')}}
                className="w-full" 
                shimmerColor={"#87a922"}
              >
                Get Started
              </ShimmerButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
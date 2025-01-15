import { useEffect, useState } from "react";

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const checkScreenWidth = () => {
        setIsMobile(window.innerWidth <= 768); // 768px is a common breakpoint for mobile
      };
  
      // Check on initial render
      checkScreenWidth();
  
      // Add event listener for window resize
      window.addEventListener('resize', checkScreenWidth);
  
      // Cleanup event listener on unmount
      return () => window.removeEventListener('resize', checkScreenWidth);
    }, []);
  
    return isMobile;
  };

  export default useIsMobile
import  { useState, useEffect } from 'react';


interface ContactPopupProp {
 isOpen : boolean ,
 onClose : () => void
}
const ContactPopup: React.FC<ContactPopupProp> = ({isOpen , onClose}) => {
  
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
        onClose(); 
      }, 300);
  };

  return (
    <>
      {/* Popup */}
      {(isOpen || isAnimating) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${isAnimating ? 'opacity-50' : 'opacity-0'}`}
            onClick={handleClose}
          />

          {/* Popup Content */}
          <div 
            className={`relative w-full max-w-lg p-6 rounded-xl shadow-2xl transition-all duration-300 ${isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ 
              backgroundColor: '#e5f2bf',
              backgroundImage: 'radial-gradient(circle at 100% 100%, rgba(135, 169, 34, 0.1) 0%, transparent 50%)',
            }}
          >
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 p-2 rounded-full transition-all duration-300 hover:bg-black/10"
              aria-label="Close popup"
            >
              <CloseIcon color="#6a7a38" />
            </button>

            <h2 className="text-2xl font-bold font-Oddiline mb-6" style={{ color: '#6a7a38' }}>
              Premium Gym  Website Template
            </h2>

            <div className="space-y-8">
            <div className="p-6 rounded-lg bg-white/50 backdrop-blur-sm space-y-4 transition-all duration-300 hover:shadow-lg">
  <h3 className="text-lg font-semibold" style={{ color: '#6a7a38' }}>
    Ready to transform your online presence?
  </h3>
  <p className="text-base opacity-90" style={{ color: '#6a7a38' }}>
    Choose from our expertly designed templates or let us craft a brand-new identity for your business:
  </p>
  <ul className="space-y-2 ml-4" style={{ color: '#6a7a38' }}>
    {[
      'Customizable templates tailored to your needs',
      'Fresh, unique designs for your brand identity',
      'Seamless user experience with modern features',
    ].map((item, index) => (
      <li key={index} className="flex items-center gap-2">
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: '#87a922' }}
        />
        {item}
      </li>
    ))}
  </ul>
</div>


              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://www.brilianttyx.solutions/"
                  className="flex-1 group relative rounded-lg p-4 transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: '#87a922' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-white">
                    <p className="font-semibold mb-1">Visit Website</p>
                    <p className="text-sm opacity-90">Brilianttyx Solutions</p>
                  </div>
                  <ExternalLinkIcon className="absolute right-4 top-1/2 -translate-y-1/2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1" />
                </a>

                <a 
                  href="mailto:brilianttyxsolutions@gmail.com"
                  className="flex-1 group relative rounded-lg p-4 transition-all duration-300 hover:shadow-lg bg-white/50 backdrop-blur-sm"
                >
                  <div style={{ color: '#6a7a38' }}>
                    <p className="font-semibold mb-1">Contact Us</p>
                    <p className="text-sm opacity-90">brilianttyxsolutions@gmail.com</p>
                  </div>
                  <MailIcon className="absolute right-4 top-1/2 -translate-y-1/2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Icon components remain the same
const CloseIcon = ({ color = 'currentColor' }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4L4 12M4 4L12 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ExternalLinkIcon = ({ className = '' }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 2H14V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.66666 9.33333L14 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MailIcon = ({ className = '' }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.66667 2.66666H13.3333C14.0667 2.66666 14.6667 3.26666 14.6667 3.99999V12C14.6667 12.7333 14.0667 13.3333 13.3333 13.3333H2.66667C1.93333 13.3333 1.33333 12.7333 1.33333 12V3.99999C1.33333 3.26666 1.93333 2.66666 2.66667 2.66666Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.6667 4L8 8.66667L1.33333 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default ContactPopup;
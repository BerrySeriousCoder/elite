import useIsMobile from "@/hooks/viewporthook";

type Color = string;

interface ColorArray {
    colors : Color[]
}




const AnimatedBackground = ({ colors }: ColorArray) => {

    const isMobile = useIsMobile() ;

    const boxValue = isMobile ? 8 : 20
  return (
    <div className="fixed inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      {[...Array(boxValue)].map((_, i) => (
        <div
          key={i}
          className="absolute transform rotate-45"
          style={{
            width: '100px',
            height: '100px',
            border: `2px solid ${colors[i % colors.length]}`,
            opacity: 0.1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 5}s infinite linear`
          }}
        />
      ))}
     <style {...{ jsx: "true", global: "true" } as any}>{`
  @keyframes float {
    0% { transform: rotate(0deg) translate(0, 0); }
    100% { transform: rotate(360deg) translate(20px, 20px); }
  }
`}</style>
    </div>
  );
};

export default AnimatedBackground;

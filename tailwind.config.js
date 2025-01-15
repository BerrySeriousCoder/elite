/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
		clipPath: {
			'paper-cut-10': 'polygon(0 10%, 10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%)',
			'paper-cut-20': 'polygon(0 20%, 20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%)',
			'paper-cut-30': 'polygon(0 30%, 30% 0, 100% 0, 100% 70%, 70% 100%, 0 100%)',
		  },
		fontFamily: {
			GrillMaster: ['GrillMaster', 'sans-serif'], 
			Oddiline: ['Oddiline' , 'sans-serif']
		  },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {},
		
  		animation: {
  			'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
  			'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear'
  		},
  		keyframes: {
  			'shimmer-slide': {
  				to: {
  					transform: 'translate(calc(100cqw - 100%), 0)'
  				}
  			},
  			'spin-around': {
  				'0%': {
  					transform: 'translateZ(0) rotate(0)'
  				},
  				'15%, 35%': {
  					transform: 'translateZ(0) rotate(90deg)'
  				},
  				'65%, 85%': {
  					transform: 'translateZ(0) rotate(270deg)'
  				},
  				'100%': {
  					transform: 'translateZ(0) rotate(360deg)'
  				}
  			}
  		}
  	}
  },
  corePlugins: {
    filter: true, 
  },
  plugins: [require("tailwindcss-animate"),
	function ({ addUtilities }) {
		const newUtilities = {
		  '.no-scrollbar::-webkit-scrollbar': {
			display: 'none', 
		  },
		  '.no-scrollbar': {
			'-ms-overflow-style': 'none', 
			'scrollbar-width': 'none',
		  },
		};
		addUtilities(newUtilities);
	  },
	  function ({ addUtilities }) {
		const clipPathUtilities = {
		  '.paper-cut-10': {
			clipPath: 'polygon(0 10%, 10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%)',
		  },
		  '.paper-cut-20': {
			clipPath: 'polygon(0 20%, 20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%)',
		  },
		  '.paper-cut-30': {
			clipPath: 'polygon(0 30%, 30% 0, 100% 0, 100% 70%, 70% 100%, 0 100%)',
		  },
		};
		addUtilities(clipPathUtilities, ['responsive', 'hover']);
	  }
  ]
  ,
}


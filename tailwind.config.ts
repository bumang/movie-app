import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xxl: '1700px',
    },
    colors: {
      black: '#000',
      white: '#fff',
      background: { default: '#FEFEFE', preLoader: '#637174' },
      transparent: 'transparent',
      primary: {
        darkBlue: '#212839',
        black: '#000000',
        blue: '#037096',
        darkGray: '#5C5E62',
        gray: '#A1A3A7',
        lightGray: '#FFFFFF',
      },
      secondary: {
        red: '#E41043',
        yellow: '#FCB900',
        shadow: '#232628',
        darkBlue: '#4D5360',
        blueHover: '#0599CD',
        blue: '#D9EAEF',
        lightBlue: '#F2F8F9',
        lightGray: '#E0E0E0',
        green: '#05C98E',
      },
      text: {
        default: '#E8E7CB',
        preLoader: '#637174',
        black: '#262A34',
      },

      whiteAlpha: {
        50: 'rgba(255, 255, 255, 0.04)',
        100: 'rgba(255, 255, 255, 0.06)',
        200: 'rgba(255, 255, 255, 0.08)',
        300: 'rgba(255, 255, 255, 0.16)',
        400: 'rgba(255, 255, 255, 0.24)',
        500: 'rgba(255, 255, 255, 0.36)',
        600: 'rgba(255, 255, 255, 0.48)',
        700: 'rgba(255, 255, 255, 0.64)',
        800: 'rgba(255, 255, 255, 0.80)',
        900: 'rgba(255, 255, 255, 0.92)',
      },
      blackAlpha: {
        50: 'rgba(0, 0, 0, 0.04)',
        100: 'rgba(0, 0, 0, 0.06)',
        200: 'rgba(0, 0, 0, 0.08)',
        300: 'rgba(0, 0, 0, 0.16)',
        400: 'rgba(0, 0, 0, 0.24)',
        500: 'rgba(0, 0, 0, 0.36)',
        600: 'rgba(0, 0, 0, 0.48)',
        700: 'rgba(0, 0, 0, 0.64)',
        800: 'rgba(0, 0, 0, 0.80)',
        900: 'rgba(0, 0, 0, 0.92)',
      },
      gray: {
        0: '#FFFFFF',
        100: '#EEF1F7',
        200: '#DFE5EC',
        300: '#CBD0D6',
        400: '#AFB4BB',
        500: '#91979F',
        600: '#636972',
        700: '#474F5C',
        800: '#343C46',
        900: '#1D2530',
      },
      danger: {
        0: '#FFEBEE',
        100: '#FFC0C9',
        200: '#FFA1AF',
        300: '#FF768A',
        400: '#FF5C73',
        500: '#FF3350',
        600: '#E82E49',
        700: '#B52439',
        800: '#8C1C2C',
        900: '#6B1522',
        DEFAULT: '#FF3350',
      },
      success: {
        0: '#E9FBEF',
        100: '#B9F3CE',
        200: '#98EDB6',
        300: '#68E494',
        400: '#4BDF80',
        500: '#1ED760',
        600: '#1BC457',
        700: '#159944',
        800: '#117635',
        900: '#0D5A28',
        DEFAULT: '#1ED760',
      },
      border: {
        layout: '#E0E5EB',
        element: '#91979F',
      },
      highlight: {
        500: '#F7F9FE',
      },
      disabled: {
        disabled: '#CBD0D6',
        textDisabled: '#91979F',
      },
      red: {
        0: '#FFECEB',
        100: '#FFC5C1',
        200: '#FFA9A3',
        300: '#FF827A',
        400: '#FF6A60',
        500: '#FF4538',
        600: '#E83F33',
        700: '#B53128',
        800: '#8C261F',
        900: '#6B1D18',
      },

      orange: {
        50: '#FFFAF0',
        100: '#FEEBC8',
        200: '#FBD38D',
        300: '#F6AD55',
        400: '#ED8936',
        500: '#DD6B20',
        600: '#C05621',
        700: '#9C4221',
        800: '#7B341E',
        900: '#652B19',
      },

      yellow: {
        50: '#FFFFF0',
        100: '#FEFCBF',
        200: '#FAF089',
        300: '#F6E05E',
        400: '#ECC94B',
        500: '#D69E2E',
        600: '#B7791F',
        700: '#975A16',
        800: '#744210',
        900: '#5F370E',
      },

      green: {
        0: '#F5F9F7',
        100: '#E6F0EB',
        200: '#C2DBCA',
        300: '#80B496',
        400: '#3D8F5F',
        500: '#006837',
        600: '#005337',
        700: '#003E2F',
        800: '#043430',
        900: '#042B2F',
      },

      accent: {
        0: '#f9ca24',
        100: '#f0932b',
        200: '#d83790',
        300: '#c038cc',
        400: '#9c88ff',
        500: '#5f27cd',
        600: '#0984e3',
        700: '#1b959a',
        800: '#85d044',
        900: '#44b556',
      },

      neutralColorLight: {
        'Gray-0': '#FFFFFF',
        'Gray-10': '#EEF1F7',
        'Gray-20': '#DFE5EC',
        'Gray-30': '#CBD0D6',
        'Gray-40': '#AFB4BB',
        'Gray-50': '#91979F',
        'Gray-60': '#636972',
        'Gray-70': '#474F5C',
        'Gray-80': '#343C46',
        'Gray-90': '#1D2530',
      },

      info: {
        0: '#E6F7FF',
        100: '#BAE7FF',
        200: '#91D5FF',
        300: '#69C0FF',
        400: '#40A9FF',
        500: '#1890FF',
        600: '#096DD9',
        700: '#0050B3',
        800: '#003A8C',
        900: '#002766',
      },
      warning: {
        0: '#FFF5EA',
        500: '#FBC02D',
        900: '#D1912E',
      },
    },
    fontFamily: {
      inter: ['Inter'],
      trial: ['var(--druk-trail)'],
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      heavy: '900',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    opacity: {
      '0': '0',
      '10': '0.1',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1',
    },
    extend: {
      spacing: {
        s0: '0px',
        s1: '1px',
        s2: '2px',
        s3: '3px',
        s4: '4px',
        s5: '5px',
        s6: '6px',
        s8: '8px',
        s10: '10px',
        s12: '12px',
        s16: '16px',
        s18: '18px',
        s20: '20px',
        s24: '24px',
        s28: '28px',
        s32: '32px',
        s36: '36px',
        s40: '40px',
        s44: '44px',
        s48: '48px',
        s60: '60px',
        s64: '64px',
        s88: '88px',
        s118: '118px',
      },

      fontSize: ({ theme }) => ({
        ...theme('spacing'),
        h1: '260px',
        h2: '112px',
        h3: '64px',
      }),
      lineHeight: {
        bold: '107px',
        heavy: '244.4px',
        normal: '24px',
      },

      boxShadow: {
        shadow1: '0px 8px 35px -14px rgba(35, 38, 40, 0.13)',
        shadow2: '0px 2px 27px -5px rgba(35, 38, 40, 0.12)',
        shadow3: '0px 4px 17px -5px rgba(35, 38, 40, 0.18)',
        shadow4: '0px 1px 24px -1px rgba(255, 255, 255, 0.25)',
        shadow5: '0px 3px 5px -1px rgba(35, 38, 40, 0.15)',
        shadow6: '0px 2px 27px -5px rgba(35, 38, 40, 0.32)',
        shadow7: '0px 3px 15px -1px rgba(35, 38, 40, 0.07)',
        shadow8: '0px -2px 15px 0px rgba(35, 38, 40, 0.17)',
      },

      backgroundSize: ({ theme }) => ({
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        ...theme('spacing'),
      }),
      backgroundColor: ({ theme }) => ({
        ...theme('colors'),
      }),
      backgroundImage: {
        'gradient-custom': 'linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111)',
      },
      borderRadius: {
        none: '0',
        br1: '2px',
        br2: '4px',
        br3: '8px',
        br4: '16px',
        br5: '20px',
        br6: '32px',
        br7: '40px',
        circle: '50%',
        DEFAULT: '2px',
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-in-out forwards',
        fadeInFromBelow: 'fadeInFromBelow 0.5s ease-in-out forwards',
      },
      keyframes: {
        textUnderline: {
          '100%': { opacity: '1', transform: 'translate3d(-100%, 0, 0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInFromBelow: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
};
export default config;

import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
  // *{
  //   -ms-overflow-style: none;
  // }
  // ::-webkit-scrollbar {
  //   display: none;
  // }
  :root{
    --dark-navy: #020c1b;
    --navy: #0a192f;
    --light-navy: #112240;
    --lightest-navy: #233554;
    --navy-shadow: rgba(2,12,27,0.7);
    --dark-slate: #495670;
    --slate: #8892b0;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
    --white: #e6f1ff;
    --green: #64ffda;
    --green-tint: rgba(100,255,218,0.1);
    --pink: #f57dff;
    --blue: #57cbff;
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --font-sans: "Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;
    --font-mono: "SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace;
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 70px;
    --fz-heading: 32px;
    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;
    --tab-height: 42px;
    --tab-width: 120px;
    --easing: cubic-bezier(0.645,0.045,0.355,1);
    --transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    --hamburger-width: 30px;
    --ham-before: top 0.1s ease-in 0.25s,opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out,opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s,transform 0.22s cubic-bezier(0.55,0.055,0.675,0.19);
    --ham-after-active: bottom 0.1s ease-out,transform 0.22s cubic-bezier(0.215,0.61,0.355,1) 0.12s;
  }
  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }
  body {
    
    overflow: hidden;
    margin: 0;
    width: 100%;
    min-height: 100%;
    background: var(--navy);
    font-family: var(--font-sans);
    overflow-x: hidden;
    @media (max-width: 768px) {
      background: var(--navy);
    }
  }
  .cls-1,.cls-2{
    fill:none;
  }.cls-2{
    stroke:#fff;
    stroke-miterlimit:10;
    stroke-width:120px;
  }
 
  main {
    margin: 0 15vmax;
    min-height: 100vh;
    overflow: hidden;

  }
  section {
    margin: 0 auto;
    padding: 150px 0;
    overflow: hidden;

    
    @media (max-width: 1080px) {
      padding: 120px 0;
    }
    @media (max-width: 768px) {
      padding: 80px 0;
    }
    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }
  a {
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
  }
`

export default GlobalStyle
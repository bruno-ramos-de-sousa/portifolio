import "./styles/App.css";
import "./styles/variables.css";
import titleVideo from "./assets/test.webm";
import CardNav from "./components/CardNav";
import ScrollExpand from "./components/ScrollExpand";
import DarkVeil from "./components/DarkVeil";
import MaskedHeading from "./components/MaskedHeading";
import Home from "./pages/Home";

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2 });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
  const navigationItems = [
    {
      label: "Projects",
      bgColor: "var(--primary-black)",
      textColor: "var(--off-white)",
      links: [
        {
          label: "Featured",
          href: "https://github.com/bruno-ramos-de-sousa",
          ariaLabel: "Featured Projects",
        },
      ],
    },
    {
      label: "Contact",
      bgColor: "var(--primary-black)",
      textColor: "var(--off-white)",
      links: [
        {
          label: "Email",
          href: "mailto:brunoramosdsousa@gmail.com",
          ariaLabel: "Email us",
        },
        {
          label: "Twitter",
          href: "https://x.com/theduckiest",
          ariaLabel: "Twitter",
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/bruno-ramos-de-sousa/",
          ariaLabel: "LinkedIn",
        },
      ],
    },
    {
      label: "About me",
      bgColor: "var(--primary-black)",
      textColor: "var(--off-white)",
      links: [
        {
          label: "Quem sou eu?",
          href: "#who",
          ariaLabel: "Who am I?",
        },
        {
          label: "Minha Historia",
          href: "#",
          ariaLabel: "Minha Historia",
        },
        {
          label: "Minha Habilidades",
          href: "#",
          ariaLabel: "My Skills",
        },
      ],
    },
  ];

  return (
    <div className="app">
      <div style={{ width: "100%", height: "1200px", position: "absolute", pointerEvents: "none" }}>
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>
      <CardNav
        logo="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb2RlLXhtbCI+PHBhdGggZD0ibTE4IDE2IDQtNC00LTQiLz48cGF0aCBkPSJtNiA4LTQgNCA0IDQiLz48cGF0aCBkPSJtMTQuNSA0LTUgMTYiLz48L3N2Zz4="
        logoAlt="Logo"
        items={navigationItems}
        baseColor="var(--off-white)"
        menuColor="var(--primary-black)"
        buttonText="teste"
        buttonBgColor="var(--secondary-black)"
        buttonTextColor="var(--off-white)"
        ease="power3.out"
      />
      <Home />
      <ScrollExpand
        endAnchorId="who"
        scrollDistance={1.2}
        title="Bruno Ramos de Sousa"
        scrollHint="Scroll inside the frame"
        useWindowScroll
      >
        <MaskedHeading
          text="Quem é Bruno Ramos?"
          mediaType="video"
          src={titleVideo}
          fillScale={1.25}
          parallax={26}
          reveal="rise"
          trigger="view"
          drift={18}
          brightness={1}
          saturation={1}
          grayscale={false}
          duration={1}
          stagger={0}
          align="center"
          weight={700}
          tracking={0}
          lineHeight={1.06}
          textScale={0.099}
        />
        <p id="profession">
          Esse tal de Bruno diz ser estudante de Análise e Desenvolvimento de
          Sistemas na Fatec São Paulo e de Desenvolvimento de Sistemas no Senai
          Vila Mariana. Diz tambem que passou pela ETEC Getúlio Vargas como
          técnico em Mecatrônica e por experiências como auxiliar
          administrativo, além de cursos de Administração e Informática.
        </p>
      </ScrollExpand>
    </div>
  );
}

export default App;

import "./styles/App.css";
import "./styles/variables.css";
import CardNav from "./components/CardNav";
import ScrollExpand from "./components/ScrollExpand";
import DarkVeil from "./components/DarkVeil";
import Home from "./pages/Home";
import MaskedHeading from './MaskedHeading';

function App() {
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
          href: "#",
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
      <div style={{ width: "100%", height: "1200px", position: "absolute" }}>
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
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="var(--off-white)"
        ease="power3.out"
      />
      <Home />
      <ScrollExpand
        src="src/imgs/aclimacao_parque.jpg"
        alt="Product hero"
        startWidth={0}
        startHeight={0}
        scrollDistance={1.3}
        title="Bruno Ramos de Sousa"
        scrollHint="Scroll inside the frame"
        useWindowScroll
      >
        
        <MaskedHeading text="Quem e Bruno Ramos?" src="/hero.jpg" />
        <MaskedHeading
          text="Designed in the details"
          mediaType="video"
          src="/reel.mp4"
          poster="/reel-poster.jpg"
          fillScale={1.25}
          parallax={26}
          reveal="rise"
          trigger="view"
          drift={18}
          brightness={1}
          saturation={1}
          grayscale={false}
          duration={1.1}
          stagger={0.09}
          align="center"
          weight={700}
          tracking={-0.03}
          lineHeight={1.06}
          textScale={0.115}
        />
        <p>
          Sou desenvolvedor e estudante de Análise e Desenvolvimento de Sistemas
          na Fatec São Paulo e de Desenvolvimento de Sistemas no Senai Vila
          Mariana. Minha trajetória também passou pelo Getúlio Vargas e por
          experiências como auxiliar administrativo, além de cursos de
          Administração e Informática. Venho de uma família humilde e
          nordestina, uma história que carrego com orgulho enquanto sigo
          construindo meu caminho na tecnologia.
        </p>
      </ScrollExpand>
      <div style={{ height: "520px" }}>
        <ScrollExpand
          src="/hero.jpg"
          title="Built to scale"
          mediaZoom={1.35}
          startWidth={42}
          startHeight={58}
          startRadius={24}
          endRadius={0}
          scrollDistance={1.2}
          holdDistance={0.35}
          smoothing={0.1}
          overlayScrim={0.45}
          enabled
        />
      </div>
    </div>
  );
}

export default App;

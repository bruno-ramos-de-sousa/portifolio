import "./styles/App.css";
import { useEffect } from "react";

//Importando as variaveis de estilo
import "./styles/variables.css";

//Importanto todos os elementos do React bits
import CardNav from "./components/CardNav";
import ScrollExpand from "./components/ScrollExpand";
import DarkVeil from "./components/DarkVeil";
import MaskedHeading from "./components/MaskedHeading";
import AccordionGallery from "./components/AccordionGallery";

//Caminho das imagens e videos
const titleVideo = "/assets/hero.webm";
const itaimBibiPhoto = "/assets/itaim_bibi.webp";
const paraibaPhoto = "/assets/paraiba.webp";
const parqueAclimacaoPhoto = "/assets/parque_aclimacao.webp";
const museuIpirangaPhoto = "/assets/museu_ipiranga.webp";
const euPhoto = "/assets/eu.webp";

const items = [
  {
    image: paraibaPhoto,
    label:
      "Minha história começou quando meus pais deixaram a Paraíba e seguiram para São Paulo em busca de trabalho. Foi lá, por acaso, que suas histórias se encontraram.",
  },
  {
    image: parqueAclimacaoPhoto,
    label:
      "Fui o caçula da família. Mesmo com pouco acesso, a tecnologia e os jogos sempre acenderam em mim uma curiosidade difícil de ignorar.",
  },
  {
    image: itaimBibiPhoto,
    label:
      "Aos 16 anos, comecei como jovem aprendiz na área administrativa. Foi ali que descobri o poder de transformar tarefas repetitivas em pequenas automações com Excel.",
  },
  {
    image: museuIpirangaPhoto,
    label:
      "Depois, o interesse virou caminho: no curso técnico em Mecatrônica, encontrei minha primeira base de programação, entre máquinas CNC e os primeiros projetos com Arduino.",
  },
  {
    image: euPhoto,
    label:
      "Hoje, essa busca continua na FATEC São Paulo e no SENAI Vila Mariana, onde estudo Desenvolvimento de Sistemas e transformo curiosidade em ferramentas reais.",
  },
];

function App() {
  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    const resetScroll = () => {
      window.scrollTo(0, 0);
    };

    resetScroll();
    window.addEventListener("pageshow", resetScroll);

    const handleAnchorClick = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return;

      event.preventDefault();
      window.history.pushState(null, "", hash);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("pageshow", resetScroll);
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);
  const navigationItems = [
    {
      label: "Projetos",
      bgColor: "var(--primary-black)",
      textColor: "var(--off-white)",
      links: [
        {
          label: "Projetos em destaque",
          href: "https://github.com/bruno-ramos-de-sousa",
          ariaLabel: "Featured Projects",
        },
      ],
    },
    {
      label: "Contato",
      bgColor: "var(--primary-black)",
      textColor: "var(--off-white)",
      links: [
        {
          label: "E-mail",
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
      label: "Sobre mim",
      bgColor: "var(--primary-black)",
      textColor: "var(--off-white)",
      links: [
        {
          label: "Quem sou eu?",
          href: "#who",
          ariaLabel: "Who am I?",
        },
        {
          label: "Minha história",
          href: "#my-history",
          ariaLabel: "Minha Historia",
        },
        {
          label: "Minhas habilidades",
          href: "#",
          ariaLabel: "My Skills",
        },
      ],
    },
  ];

  return (
    <div className="app">
      <div
        style={{
          width: "100%",
          height: "1200px",
          position: "absolute",
          pointerEvents: "none",
        }}
      >
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
        buttonText="Olá"
        buttonBgColor="var(--secondary-black)"
        buttonTextColor="var(--off-white)"
        ease="power3.out"
      />

      <ScrollExpand
        endAnchorId="who"
        scrollDistance={0.6}
        holdDistance={0}
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
          textScale={0.1}
        />
        <p id="profession">
          Bruno é estudante de Análise e Desenvolvimento de Sistemas na FATEC
          São Paulo e de Desenvolvimento de Sistemas no SENAI Vila Mariana.
          Antes disso, passou pela ETEC Getúlio Vargas, onde se formou técnico
          em Mecatrônica, e acumulou experiências como auxiliar administrativo,
          além de cursos de Administração e Informática.
        </p>
      </ScrollExpand>

      <ScrollExpand
        scrollDistance={0.3}
        holdDistance={0.1}
        useWindowScroll
        endAnchorId="my-history"
      >
        <h3>Minha Historia</h3>
        <AccordionGallery
          items={items}
          defaultIndex={2}
          expandRatio={0.52}
          trigger="click"
          accentColor="var(--off-white)"
          overlayColor="var(--primary-black)"
          textColor="var(--off-white)"
          grayscale
          showLabels
          duration={0.4}
          ease="power3.out"
          parallax={0.5}
          tilt={8}
          stagger={0.06}
          height={460}
          gap={10}
          radius={16}
          orientation="horizontal"
        />
      </ScrollExpand>
    </div>
  );
}

export default App;

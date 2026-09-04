import "./App.css";
import "./styles/variables.css";
import CardNav from "./components/CardNav";
import ScrollExpand from "./components/ScrollExpand";
import Home from "./pages/Home";

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
  ];

  return (
    <div className="app">
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
      <ScrollExpand
        src="/hero.jpg"
        alt="about me scroll expand"
        title="Bruno Ramos de Sousa"
        scrollHint="Scroll inside the frame"
        useWindowScroll
      >
        <h2></h2>
        <p>Tecnico em Desenvolvimento de Sistemas</p>
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
      <Home />
    </div>
  );
}

export default App;

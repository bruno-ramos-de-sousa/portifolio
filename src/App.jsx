import './App.css'
import CardNav from './components/CardNav'
import Home from './pages/Home'

function App() {
  const navigationItems = [
    {
      label: "Projects",
      bgColor: "#2F293A",
      textColor: "#fff",
      links: [
        { label: "Featured", href: "https://github.com/bruno-ramos-de-sousa", ariaLabel: "Featured Projects" },
      ]
    },
    {
      label: "Contact",
      bgColor: "#2F293A",
      textColor: "#fff",
      links: [
        { label: "Email", href: "mailto:brunoramosdsousa@gmail.com", ariaLabel: "Email us" },
        { label: "Twitter", href: "https://x.com/theduckiest", ariaLabel: "Twitter" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/bruno-ramos-de-sousa/", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (
    <div className="app">
      <CardNav
        logo= "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb2RlLXhtbCI+PHBhdGggZD0ibTE4IDE2IDQtNC00LTQiLz48cGF0aCBkPSJtNiA4LTQgNCA0IDQiLz48cGF0aCBkPSJtMTQuNSA0LTUgMTYiLz48L3N2Zz4="
        logoAlt="Logo"
        items={navigationItems}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      />
      <Home />
    </div>
  )
}

export default App

import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Problem from './components/Problem.jsx'
import About from './components/About.jsx'
import Method from './components/Method.jsx'
import Services from './components/Services.jsx'
import Niches from './components/Niches.jsx'
import Cases from './components/Cases.jsx'
import Testimonials from './components/Testimonials.jsx'
import Guarantees from './components/Guarantees.jsx'
import Process from './components/Process.jsx'
import Pricing from './components/Pricing.jsx'
import Faq from './components/Faq.jsx'
import FinalCta from './components/FinalCta.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <About />
        <Method />
        <Services />
        <Niches />
        <Cases />
        <Testimonials />
        <Guarantees />
        <Process />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}

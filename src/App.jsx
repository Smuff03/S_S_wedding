import { MotionConfig } from 'framer-motion'
import { LanguageProvider } from './context/LanguageContext'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Petals from './components/Petals'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import Journey from './components/Journey'
import Couple from './components/Couple'
import Family from './components/Family'
import Events from './components/Events'
import Countdown from './components/Countdown'
import Gallery from './components/Gallery'
import Info from './components/Info'
import RSVP from './components/RSVP'
import Shagun from './components/Shagun'
import Thanks from './components/Thanks'
import FloatingTranslateButton from './components/FloatingTranslateButton'

export default function App() {
  return (
    // reducedMotion="user" makes Framer Motion respect prefers-reduced-motion
    <MotionConfig reducedMotion="user">
      {/* LanguageProvider makes useLanguage() / the EN↔MR toggle available
          to every component below it — this is what Journey.jsx needs. */}
      <LanguageProvider>
        <Loader />
        <Navbar />
        <Petals />
        <main>
          <Hero />
          <Welcome />
          <Journey />
          <Couple />
          <Family />
          <Events />
          <Countdown />
          <Gallery />
          <Info />
          <RSVP />
          <Shagun />
          <Thanks />
        </main>
        <FloatingTranslateButton />
      </LanguageProvider>
    </MotionConfig>
  )
}
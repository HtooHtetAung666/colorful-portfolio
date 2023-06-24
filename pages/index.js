import { Navbar } from '../components/Navbar'
import { HeroSection } from '../sections/HeroSection'
import Hobbies from '../sections/Hobbies'
import { Skills } from '../sections/Skills'
import { Projects } from '../sections/Projects'
import { Contact } from '../sections/Contact'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <div>

      <Navbar/>
      <HeroSection/>
      <Hobbies/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>

    </div>
  )
}

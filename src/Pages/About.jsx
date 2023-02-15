import Motto from "../Containers/Motto/Motto"
import Gallery from "../Containers/Gallery/Gallery"
import { AnimatePresence } from "framer-motion"
const About = () => {
  return (
    <AnimatePresence>
      <Motto/>
      <Gallery/>
    </AnimatePresence>
  )
}

export default About

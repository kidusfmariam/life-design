import './Motto.css'
import { motion } from 'framer-motion'
const Motto = () => {
  return (
    <div className='motto-container'>
      <div className='motto-wrapper'>
        <motion.div 
            initial={{width: 0}}
            whileInView={{width: "100%"}}
            viewport={{once: true}}
            transition={{duration: 1.2, ease: 'easeInOut'}}
        className='motto-bg'></motion.div>
       <div className='moto-text'>
            <div className='moto-img'>
                <img src="/Images/About/motto-img.jpg" alt="" />
            </div>
            <motion.h1
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1.4, delay: 1.2}}
                viewport={{once: true}}
            >Everything has the<br/>potential to be <span className='yellow'>beautiful.</span></motion.h1>
       </div>
      </div>
    </div>
  )
}

export default Motto

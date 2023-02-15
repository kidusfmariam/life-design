import './Form.css'
import { motion } from 'framer-motion'
const Form = () => {
  return (
    <div className='contact-page-container'>
        <motion.h1
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.4, dealy: 0.2}}
        >Contact <span className='yellow'>us</span></motion.h1>
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.8, dealy: 0.4}}
        className='form-container'>
        <form>
        <div className='name'>
        <div className='form-element'>
            <label htmlFor="First-name">First Name</label><br/>
            <input type="text" id="First-name" />
        </div>
        <div className='form-element'>
            <label htmlFor="Last-name">Last Name</label><br/>
            <input type="text" id="Last-name" /><br/>
        </div>
        <div className='form-element'>
            <label htmlFor="Email">Email</label><br/>
            <input type="email" label="Email" /><br/>
        </div>

        <div className='form-element'>
            <label htmlFor="Last-name" className='message'>Message</label><br/>
            <textarea type="text" id="Last-name" /><br/>
        </div>
        
        </div>
        <button>Submit</button>
      </form>
      </motion.div>
    </div>
    
  )
}

export default Form

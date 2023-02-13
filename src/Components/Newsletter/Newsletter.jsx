import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='container'>
      <div className='newsletter-wrapper'>
            <h1>Subscribe to our<br/><span className='yellow'>Newsletter</span></h1>
            <p>Get the latest updates from our company and the design world. Never miss out on discounts and special deals.</p>
            <input type="email" />
            <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter

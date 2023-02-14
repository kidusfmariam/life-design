import './Gallery.css'

const Gallery = () => {
  return (
    <div className='gallery-container'>
        <h1>Our <span className='yellow'>gallery.</span></h1>

        <div className='gallery-images'>
            <img src="/Images/About/gallery-img-1.jpg" alt="" />
            <img src="/Images/About/gallery-img-2.jpg" alt="" />
            <img src="/Images/About/gallery-img-3.jpg" alt="" />
            <img src="/Images/About/gallery-img-4.jpg" alt="" />
            <img src="/Images/About/gallery-img-5.jpg" alt="" />
            <img src="/Images/About/gallery-img-6.jpg" alt="" />
           
        </div>
        <div className='project-cta'>
            <button>View our projects</button>
        </div>
    </div>
  )
}

export default Gallery

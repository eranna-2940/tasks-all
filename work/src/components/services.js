import React from 'react'
import pic7 from '../images/services-banner.png'
import pic8 from '../images/services-300x199.jpg'

const Services =()=>{
    return(
        <div>
        <div className="about-head">
        <h1>Services</h1>
        <img src={pic7} alt="no-image"  className="about-img"/>
        </div>
        <div className='service-info'>
         
           <div>
            <img src={pic8} alt='no-image'/>
           </div>
           <div>
            <p>Our focus is on meeting your technology needs. We offer a spectrum of services that are appropriate to your requirements – custom product development, application maintenance, system implementation, technical support, and onsite consulting. Whether you are a small company or a Fortune 500 leader, we have the experience and capabilities to work with you. In addition to our technology services, our senior management has extensive expertise in strategy, product innovation, supply chain management, and other areas of business.</p>
            <h3>Our core areas of services:</h3>
            <p>APPLICATION DEVELOPMENT</p>
            <p>CUSTOM CONSULTING SERVICES</p>
            <p>TRAINING</p>
           </div>

        </div>

        </div>
    )
}
export default Services;
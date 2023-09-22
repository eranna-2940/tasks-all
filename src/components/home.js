import React  from "react";
import pic from '../images/home.jpg'



const Home=()=>{
    return(
        <div>
            <div className="image">
            <img id="homeimage" src={pic} alt="no-imagee"/>
            <h className='imgtxt'>Welcome</h>
            </div>
            <div className="homeinfo">
                <div className="minhome">
                    <h4><i class="bi bi-lightbulb"></i>&nbsp;&nbsp;IT Services</h4>
                    <p>Our focus is on meeting your technology needs. We offer a spectrum of services that are appropriate to your requirements.. Read more</p>
                </div>
                <div className="minhome">
                    <h4><i class="bi bi-briefcase"></i>&nbsp;&nbsp;Custom Consulting Services</h4>
                    <p>Our focus is on meeting your technology needs. We offer a spectrum of services that are appropriate to your requirements.. Read more</p>
                </div>
                <div className="minhome">
                    <h4><i class="bi bi-trophy"></i>&nbsp;&nbsp;Traning</h4>
                    <p>Our focus is on meeting your technology needs. We offer a spectrum of services that are appropriate to your requirements.. Read more</p>
                </div>


            </div>
          
        </div>
    )
}

export default Home;
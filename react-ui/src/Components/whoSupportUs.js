import React from 'react';
import Carousel from 'react-bootstrap/carousel';
import '../assets/Styles/styles.css';

class WhoSupportUs extends React.Component {
  render() {
    return (
    <React.Fragment>
        <h3 class="Main-heading text-center heading-custom">WHO SUPPORT US</h3>
        <hr class="headHr border border-primary" width="20%"></hr>
    <img class="img-fluid wsum" src={require('../assets/Images/Support.jpg')}/>

        <div class="col-md-8 bg-content text-center">
        <p class="wsup mt-1 p-3 content-p-1 f-2px">
        <code class="Soch">SOCH</code>   is supported by individuals across the globe for the organizations Nobel cause. Apart from the like minded individuals the organization is also supported by various organizations
        </p>
      </div>
        <div class="WSUC">
      <Carousel>
         <Carousel.Item>
          <img   
           className="d-block wsuimg" 
           src={require('../assets/Images/Znet.png')} 
           alt="First slide"/>

        </Carousel.Item>
        <Carousel.Item>
          <img  
            className="d-block wsuimg" 
            src={require('../assets/Images/Bisleri.svg')} 
            alt="Second slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img  
                className="d-block wsuimg" 
                src={require('../assets/Images/mrf.svg')} 
                alt="Third slide"/>
           </Carousel.Item>
</Carousel>
</div>


    </React.Fragment>
    )
  }
}
export default WhoSupportUs
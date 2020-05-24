import React from 'react';
import '../assets/Styles/styles.css';

class WhatWeDo extends React.Component {
  render() {
    return (
    <React.Fragment>
        <h3 class="Main-heading text-center heading-custom">WHAT WE DO</h3>
        <hr class="headHr border border-primary" width="20%"></hr>
    <img class="img-fluid waw" src={require('../assets/Images/Charity.jpg')}/>

        <div class="col-md-8 bg-content text-justify">
        <p class="mt-1 p-3 content-p-1">
        <code class="Soch">SOCH</code> mission is to help build strong communities that provide people with an opportunity to earn a dignified living, raise healthy families, and participate in democratic life. 
        <br></br>
        <code class="Soch">SOCH</code> achieves this by strengthening the capacity of grassroots organizations, coalitions and networks and by forging linkages among government, business and the citizen sectors to achieve social, economic and environmental justice.

       In the current environment the rich is getting richer and poor is getting poorer.
       <br></br>
        The ideology of <code class="Soch">SOCH</code> is to break this vicious cycle by bringing the poor at par. The best way to achieve this to provide education for self-sustenance and make the community self-sufficient.
 </p>
        <div class="Mid-Section-1 text-center">
            <h4 >
            With the blessing of Almightily SOCH working in the following areas: </h4>
        

        <div class="Mid-Section-2">
         <div f-head>
           <h4 class="text-success text-center">Faeley Vidya Chanan Hoye</h4>
           <img class="WWD" src={require('../assets/Images/WWD1.jpg')}/></div>
        <div f-head>
          <h4 class="text-info text-center">Medical and Hos pitalization Aid </h4>
          <img class="WWD" src={require('../assets/Images/WWD2.jpg')}/> </div>
        </div>     
        </div>
        </div>
        
    </React.Fragment>
    )
  }
}
export default WhatWeDo
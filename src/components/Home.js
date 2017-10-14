import React, { Component } from 'react';
import { render } from 'react-dom';
import '../styles/Home.css';
import Timer from './Timer';


//There are breaks to help visually, but we should probably solve this through padding or margins

class Home extends React.Component{
    render(){
        return(
        <div>
            
        <input type='text' className='queryInput' placeholder='Enter Query'></input>
         <br/>
         <br/>
         <Timer/>
         <br/>
         <br/>
         <br/>
        </div>
        )
    }
}
export default Home;
import React from "react";
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

//the component build starts here 
//This is a class component


class App extends React.Component {


    // 1st step: state

    //state initialization (without constructor)

    state = { lat: null, errMsg: '', };

    // 2nd step: lifecycle methods


    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position)=> this.setState({ lat: position.coords.latitude }),
            (err)=> this.setState({ errMsg: err.message})
        );
    };



    //3rd step: rendering and using operational rendering


    render(){
        if( this.state.errMsg && !this.state.lat ){
            return <div>Error: {this.state.errMsg}</div>
        }
        if ( !this.state.errMsg && this.state.lat ){
            return <SeasonDisplay lat={this.state.lat} />
           
        }
        if ( !this.state.errMsg && !this.state.lat){
           return <Spinner msg='locating you'/>
        
        };
    };
};

ReactDOM.render( <App /> ,document.querySelector('#root') );
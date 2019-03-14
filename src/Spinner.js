import React from 'react';
import rings from '/Users/dimitrisdortas/Desktop/weather/src/rings.svg'


const Spinner = (props) => {
    return(
    
        <div className='loading'>
            <p>{props.msg} you</p> <br />
            
            
            <img src= {rings} />
        </div>
        
    
    );
};

export default Spinner;
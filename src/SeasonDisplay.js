import React from 'react';
import './SeasonDisplay.css';

//SeasonConfig is a javascript object property with specific values and variables

const SeasonConfig = {
    summer: {
        text: 'Lets hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr it`s cold',
        iconName: 'snowflake'
    }
};

// an arrow function that configures the season

const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    }
    else{
        return lat > 0 ? 'winter' : 'summer';
    }
};




const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} =SeasonConfig[season]; //it returns the {text, iconName}
    return (
    <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`} />
        <h1 className='text'>
        {text}
        </h1>
        <i className={`icon-right massive ${iconName} icon`} />
    </div>
    );
};

export default SeasonDisplay;
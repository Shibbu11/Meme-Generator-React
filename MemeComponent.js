import React from 'react';

function MemeComponenet(props){
    return(
        <div className='meme'>
            <img src={props.data.randomImg} alt=''/>
            <h2 className='top'>{props.data.topText}</h2>
            <h2 className='bottom'>{props.data.bottomText}</h2>
        </div>
    );
}

export default MemeComponenet;
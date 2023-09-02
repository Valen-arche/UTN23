import React from 'react';

const PrediccionItem = (props) => {
    const {user, body} = props;
    return (
        <div className='predicciones'>
            <h1>{user}</h1>
            <div dangerouslySetInnerHTML={{__html: body}}/>
            
            <hr/>
        </div>
    );
}

export default PrediccionItem;
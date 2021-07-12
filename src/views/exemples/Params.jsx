import React from 'react';

import { useParams } from 'react-router-dom';

const Param = props => {

    const { id } = useParams();

   return (
    <div className='Param'>
        <h1>Router Params</h1>
        <p>User id: {id}</p>
    </div>
   )
}

export default Param;
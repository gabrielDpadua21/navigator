import React from 'react';

import { useParams } from 'react-router-dom';

interface ParamTypes {
    id: string;
}

const Param = (props: any) => {

    console.log(useParams);

    const { id } = useParams<ParamTypes>();

   return (
    <div className='Param'>
        <h1>Router Params</h1>
        <h2>User id: {id}</h2>
    </div>
   )
}

export default Param;
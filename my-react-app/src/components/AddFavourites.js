import React, { useState } from 'react';
import Heart from "react-animated-heart";
const AddFavourite = () => {
	const  [isClick,setClick] =useState(false);
    return(
        <>
            <span className='mr-2'>Add to favourites</span>
			<div className='heart'>
            <Heart isClick={isClick} onClick={()=> setClick(!isClick)} />
			</div>
        </>

    );
};

export default AddFavourite;
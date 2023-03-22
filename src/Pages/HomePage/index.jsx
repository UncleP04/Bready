import React from 'react'
import BakeryItems from '../../Components/BakeryItems';
import Family from '../../Components/FamilyBakery';
import FamilySelection from '../../Components/FamilySelection';
import Introduction from '../../Components/Introduction';

const HomePage = () => {
    return(
        <div>
            <Introduction />
            <Family />
            <FamilySelection />
            <BakeryItems />
        </div>
    )
}

export default HomePage;
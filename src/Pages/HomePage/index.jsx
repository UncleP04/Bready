import React from 'react'
import BakeryItems from '../../Components/BakeryItems';
import Family from '../../Components/FamilyBakery';
import FamilySelection from '../../Components/FamilySelection';
import Introduction from '../../Components/Introduction';
import OrganicBread from '../../Components/OrganicBread';
import StoryRender from '../../Components/StoryRender';

const HomePage = () => {
    return(
        <div>
            <Introduction />
            <Family />
            <FamilySelection />
            <BakeryItems />
            <OrganicBread />
            <StoryRender />
        </div>
    )
}

export default HomePage;
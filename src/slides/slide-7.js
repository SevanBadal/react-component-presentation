import React from 'react';
import { ListCard, StatefullListCard } from '../components/cards';
import { Heading, UnorderedList } from 'spectacle';
import solarizedColor from '../Constants/colors';
const Slide_Seven = () => {
    return (
        <div>
            <Heading fontSize='h3'>Components Summary</Heading>
            <UnorderedList>
                <ListCard number={1} content={"Created from Smaller Units"} />
                <ListCard number={2} content={"DRYer Code"} />
                <ListCard number={3} content={"Seperation of Concerns"} />
                <StatefullListCard background={{ background: solarizedColor.magenta }} number={4} />
            </UnorderedList>
        </div>
    );
}

export default Slide_Seven;
import React from 'react';
import { ListCard } from '../components/cards';
import { Heading, UnorderedList } from 'spectacle';
import solarizedColor from '../Constants/colors';
const SlideEleven = () => {
    return (
        <div>
            <Heading fontSize='h3'>Unmounting</Heading>
            <h1 style={{ textAlign: 'center' }} ><span role="img" aria-label="old man">👴🏽</span></h1>
            <UnorderedList>
                <ListCard background={{ background: solarizedColor.violet }} number={1} content="componentWillUnmount( )" />
            </UnorderedList>
        </div >
    );
}

export default SlideEleven;
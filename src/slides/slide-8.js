import React, { useState } from 'react';
import { StatefullCard, ListCard } from '../components/cards';
import { Heading, UnorderedList } from 'spectacle';
import solarizedColor from '../Constants/colors';
const SlideEight = () => {
    const [mount, setMount] = useState(false);
    const mountCard = () => {
        setMount(true);
    }
    const unmountCard = () => {
        setMount(false);
    }
    return (
        <div>
            <Heading fontSize='h3'>Component Lifecycle</Heading>
            {
                mount &&
                <div style={{ display: 'flex', justifyContent: 'center', margin: '16px' }}>
                    <StatefullCard />
                </div>
            }

            <UnorderedList>
                <div onClick={mountCard}>
                    <ListCard background={{ background: solarizedColor.violet }} number="👶🏽" content="Mounting" />
                </div>
                <ListCard background={{ background: solarizedColor.violet }} number="🧔🏽" content="Updating" />
                <div onClick={unmountCard}>
                    <ListCard background={{ background: solarizedColor.violet }} number="👴🏽" content="Unmounting" />
                </div>

            </UnorderedList>
        </div >
    );
}

export default SlideEight;
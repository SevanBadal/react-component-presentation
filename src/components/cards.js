import React, { Component, useState } from 'react';
import solarizedColors from '../Constants/colors';

const cardStyle = {
    cardContainer: {
        width: '350px',
        background: '#eee8d5',
        marginLeft: '4px',
        marginRight: '4px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        borderRadius: 4,
        overflow: 'hidden'
    },
    cardHeader: {
        width: '100%',
        background: '#2aa198',
    },
    headerText: {
        margin: '0',
        padding: '8px',
        color: '#fff',
    },
    contentContainer: {
        padding: '8px',
        fontWeight: 'bold',
    }

}

class Card extends Component {
    render() {
        return (
            <div style={cardStyle.cardContainer}>
                <div style={cardStyle.cardHeader}>
                    <h2 style={cardStyle.headerText}>{this.props.title}</h2>
                </div>
                <div style={cardStyle.contentContainer}>
                    <p>{this.props.body}</p>
                </div>
            </div>
        )
    }
}
class StatefullCard extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick = () => {
        this.setState({
            date: new Date()
        })
    }
    render() {
        return (
            <div style={cardStyle.cardContainer}>
                <div style={cardStyle.cardHeader}>
                    <h2 style={cardStyle.headerText}>{this.state.date.toLocaleTimeString()}</h2>
                </div>
                <div style={cardStyle.contentContainer}>
                    <p>{this.props.body || "This is a stateful card"}</p>
                </div>
            </div>
        )
    }
}

const itemStyle = {
    container: {
        display: 'flex',
        alignItems: 'center',
        height: 100,
        borderRadius: 6,
        overflow: 'hidden',
        margin: 32,
        boxShadow: solarizedColors.shadow,
    },
    leftSide: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        background: solarizedColors.cyan,
        color: solarizedColors.base3

    },
    rightSide: {
        color: solarizedColors.base01,
        fontSize: 32,
        paddingLeft: 16,
    }
}

const ListCard = (props) => {
    const [toggleColor, setToggleColor] = useState(false);
    const toggle = () => {
        setToggleColor(!toggleColor);
    }
    return (
        <div onClick={toggle} style={{ ...itemStyle.container }}>
            <div style={{ ...itemStyle.leftSide, background: toggleColor ? solarizedColors.magenta : solarizedColors.cyan, ...props.background, }}>
                <p style={{ margin: 0 }}>{props.number}</p>
            </div>
            <p style={itemStyle.rightSide}>{props.content}</p>
        </div>
    )
}

const StatefullListCard = (props) => {
    const [toggleText, setToggleText] = useState(false);
    const toggle = () => {
        setToggleText(!toggleText);
    }
    return (
        <div onClick={toggle} style={{ ...itemStyle.container }}>
            <div style={{ ...itemStyle.leftSide, ...props.background, }}>
                <p style={{ margin: 0 }}>{props.number}</p>
            </div>
            <p style={itemStyle.rightSide}>{toggleText ? 'Lifecycles' : '?'}</p>
        </div>
    )
}

export {
    StatefullCard,
    Card,
    ListCard,
    StatefullListCard,
}
import React from 'react';
import styled from 'styled-components';

export default class Topic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            activeClass: `pt4 pr3 center f3 fw4 blue pointer dim .bg-light-silver`,
            inactiveClass: `pt4 pr3 center f3 fw4 dark-gray pointer dim .bg-light-silver`,
            topics: [
                "Web",
                "Unix",
                "ML"
            ]
        }
    }

    toggleClass = () => {
        const state = this.state.active
        this.setState({
            active: !state
        });

        console.log("hit")
    }

    render() {
        return (
            <div
                
            >

            </div>
        )
    }
}
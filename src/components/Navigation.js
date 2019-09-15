import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav.attrs({
    className: `db dt-l w-100 border-box pa3 ph5-l top-0 bg-white`
})``

const Tab = styled.a.attrs({
    className: `f4-l dib mr3 mr4-l dim pointer avenir gray`
})``

export default class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <NavBar>
               <Tab>
                   Home
               </Tab>
               
               <Tab>
                   About
               </Tab>

               <Tab>
                   Photography
               </Tab>
               
               <Tab>
                   Blog
               </Tab>
            </NavBar>
        )
    }
}
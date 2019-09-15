import React from 'react';
import tachyons from 'tachyons';
import styled from 'styled-components';

import Navigation from '../components/Navigation';
import Home from '../components/Home';
import About from '../components/About';
import Work from '../components/Work';
import Footer from '../components/Footer';

const FlexContainer = styled.div.attrs({
    className: `flex flex-column`
})``

const FlexBox = styled.div.attrs({
    className: `w-100 mr2 h-100`
})``

export default class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <FlexContainer>
                <FlexBox>
                    <Navigation/>
                </FlexBox>

                <FlexBox>
                    <Home/>
                </FlexBox>

                <FlexBox>
                    <About/>
                </FlexBox>

                <FlexBox>
                    <Work/>
                </FlexBox>

                <FlexBox>
                    
                </FlexBox>

                <FlexBox>
                    <Footer/>
                </FlexBox>
            </FlexContainer>
        )
    }   
}
import React from 'react';
import styled from 'styled-components';

import Home from '../components/Home';
import About from '../components/About';
import Work from '../components/Work';
import Projects from '../components/Project';
import Footer from '../components/Footer';

const FlexContainer = styled.div.attrs({
    className: `flex flex-column`
})``

const FlexBox = styled.div.attrs({
    className: `w-75 center mr2 h-100`,
})``

export default class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            components: [
                <Home/>,
                <About/>,
                <Work/>,
                <Projects/>,
                <Footer/>
            ]
        }
    }

    render() {
        return (
            <FlexContainer>
                    <FlexBox>
                        <Home/>
                    </FlexBox>

                    <FlexBox>
                        <About/>
                    </FlexBox>


                    <FlexBox>
                        <Work/>
                    </FlexBox>

                    {/*<FlexBox>
                       <Projects/>
                    </FlexBox>*/}

                    <FlexBox>
                        <Footer/>
                    </FlexBox>
            </FlexContainer>
        )
    }   
}
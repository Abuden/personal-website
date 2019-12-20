import React from 'react';
import styled from 'styled-components';

import Navigation from '../components/Navigation';
import Home from '../components/Home';
import About from '../components/About1';
import Work from '../components/Work1';
import Projects from '../components/Project';
import Footer from '../components/Footer';
import Me from '../assets/img/me.jpg';

const FlexContainer = styled.div.attrs({
    className: `flex flex-column`
})``

const FlexBox = styled.div.attrs({
    className: `w-75 center mr2 h-100`,
})``

const Image = styled.img.attrs({
    className: `mw-100 cover`,
})``
export default class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            components: [
                <Navigation/>,
                <Home/>,
                <About/>,
                <Work/>,
                <Projects/>,
                <Footer/>
            ]
        }
    }

    componentDidMount = () => {
        //scrollToComponent()
    }

    handleClick = () => {
        
    }

    render() {
        return (
            <FlexContainer>
                    <FlexBox>
                        <Home/>
                    </FlexBox>

               
                        <Image
                            style={{backgroundImage: '../assets/img/me.jpg'}}
                        />
                   

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
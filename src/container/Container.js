import React from 'react';
import styled from 'styled-components';

import ResponsiveGallery from 'react-responsive-gallery';

import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Project';
import Footer from '../components/Footer';
import Title from '../components/Title';
import photos from '../components/Photos'

import HomeImg from "../assets/img/food.jpeg";

const FlexContainer = styled.div.attrs({
    className: `flex flex-column`
})``

const FlexBox = styled.div.attrs({
    className: `w-100 center mr2 h-100`,
})``

const HomeFlex = styled.div.attrs(props => ({
    className: `w-100 center mr2 h-100 cover-l`
}))`

`

const FlexBoxBgWhite = styled.div.attrs({
    className: `w-100 center mr2 h-100 bg-near-white mb3`
})``

const GalleryFlex = styled.div.attrs({
    className: `w-100 center mr2 h-100 ph5-ns mb5`
})``

export default function Container() {
    return (
        <FlexContainer>
                <HomeFlex 
                    style={{
                        backgroundImage: `url('${HomeImg}')`,
                        height: '1000px',
                        backgroundAttachment: 'fixed',
                        backgroundPosition: 'center center', 
                        backgroundRepeat: 'no-repeat'
                    }}>
                    <Home/>
                </HomeFlex>

                <FlexBoxBgWhite>
                    <About/>
                </FlexBoxBgWhite>

                <GalleryFlex>
                    <Title title='Photography'/>
                    <ResponsiveGallery images={photos}/>
                </GalleryFlex>

                <FlexBoxBgWhite>
                    <Title title='Live Projects'/>
                    <Projects/>
                </FlexBoxBgWhite>

                <FlexBox>
                    <Footer/>
                </FlexBox>
        </FlexContainer>
    )
}
import React from 'react';
import styled from 'styled-components';
import { Spring } from 'react-spring/renderprops'

import Footer from './Footer';

const Article = styled.article.attrs({
    className: `avenir`
})``

const Display = styled.div.attrs({
    className: `vh-100 dt w-100 tc bg-white dark-gray cover`
})``

const Text = styled.div.attrs({
    className: `dtc v-mid`
})``

const Surname = styled.h3.attrs({
    className: `fw3 f2 f2-ns gray`
})``

const Forename = styled.h1.attrs({
    className: `f-headline fw3 f1 f1-ns black tracked grow`
})``

const TitleDiv = styled.div.attrs({
    className: ``
})``

const TitlesParagraph = styled.p.attrs({
    className: `fw3 gray f5 f3-ns center bg-animate grow mb0 mt0`
})``

export default class Home extends React.Component {
    render() {
        return (
            <Article>
                <Display>
                    <Text>
                        <Surname>Yeoh, I'm</Surname>
                        <Spring
                            from={{ opacity: 0 }}
                            to={{ opacity: 1 }}>
                            {props => <div style={props}><Forename>Braddy</Forename></div>}
                        </Spring>
                        <TitleDiv>
                            <TitlesParagraph>
                                UCD Computer Science
                            </TitlesParagraph>
                            <TitlesParagraph>
                                Software Engineer
                            </TitlesParagraph>
                            <TitlesParagraph>
                                Foodie
                            </TitlesParagraph>
                            <TitlesParagraph>
                                Photographer
                            </TitlesParagraph>
                        </TitleDiv>
                       
                        <Footer/>
                    </Text>
                </Display>
            </Article>
        )
    }
}
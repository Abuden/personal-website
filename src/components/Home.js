import React from 'react';
import styled from 'styled-components';

import FadeIn from 'react-fade-in';
import Typical from 'react-typical';

import SocialMedia from './SocialMedia';

const FlexDiv = styled.div.attrs({
    className: `flex flex-column`
})``

const Title = styled.p.attrs({
    className: `white fw3 f-subheadline-ns lh-title f1`
})``

const TitleDiv = styled.div.attrs({
    className: `ml3 ml5-m ml6-ns mt5 tl`
})``

const SubtitleDiv = styled.div.attrs({
    className: `ml3 ml5-m ml6-ns tl`
})``

const Subtitle = styled.p.attrs({
    className: `white fw3 ml4-ns ml3 f2 lh-copy`
})``

const SocialMediaDiv = styled.div.attrs({
    className: `ml4 ml5-m ml6-ns`
})``

const TEXTS = [
    "Software Engineer", 1000,
    "Photographer", 1000,
    "Foodie", 1000,
    "UCD Computer Science", 1000
]

export default function Home() {
    return (
        <FlexDiv>
            <TitleDiv>
                <FadeIn delay="400" transitionDuration="1250">
                    <Title>Yeoh, I'm Braddy</Title>
                </FadeIn>
            </TitleDiv>
            <SubtitleDiv>
                <Subtitle>
                    <Typical 
                        steps={TEXTS}
                        loop={Infinity}
                        wrapper="p"
                    />
                </Subtitle>
            </SubtitleDiv>
            <SocialMediaDiv>
                <SocialMedia/>
            </SocialMediaDiv>
        </FlexDiv>
    )
}
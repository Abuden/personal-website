import React from 'react';
import styled from 'styled-components';

const Article = styled.article.attrs({
    className: `avenir`
})``

const Display = styled.div.attrs({
    className: `vh-100 dt w-100 tc bg-white dark-gray cover`
})``

const Text = styled.div.attrs({
    className: `dtc v-mid`
})``

const AvatarContainer = styled.header.attrs({
    className: `tc pv4 pv5-ns`
})``

const Avatar = styled.img.attrs({
    className: `br3 ba b--black-10 h4 w4`,
    src: `../assets/img/me.jpg`
})``

export default class Home extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {

        }
    }

    render() {
        return (
            <Article>
                <Display>
                    <Text>
                        <h3 class="fw3 f1">Hi, I'm</h3>
                        <h1 class="f1 f-headline-l fw3 dark-gray">Braddy Yeoh</h1>
                        <blockquote class="ph0 mh0 measure-wide f4 lh-copy center">
                            <p class="fw3 dark-gray">
                                Software Engineer | UCD Computer Science | Foodie | Photographer
                            </p>
                        </blockquote>
                    </Text>
                </Display>
            </Article>
        )
    }
}
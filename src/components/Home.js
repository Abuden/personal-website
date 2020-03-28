import React from 'react';
import styled from 'styled-components';
import { Spring } from 'react-spring/renderprops'
import Me from "../assets/img/Me.jpg"

import Footer from './Footer';

const Article = styled.article.attrs({
    className: ``
})``

const Title = styled.p.attrs({
    className: `f2 white ml2 fw3`
})``

const Test = styled.div.attrs({
    className: `pl3 tl mt5`
})``

const List = styled.ul.attrs({
    className: `pl4 white list`
})``

const Entry = styled.li.attrs({
    className: `fw1`
})``

export default class Home extends React.Component {
    render() {
        return (
            <Article>
                <Test>
                    <Title>Yeoh, I'm Braddy</Title>
                    <List>
                        <Entry>UCD Computer Science</Entry>
                        <Entry>Software Engineer</Entry>
                        <Entry>Photographer</Entry>
                        <Entry>Foodie</Entry>
                    </List>
                </Test>
            </Article>
        )
    }
}
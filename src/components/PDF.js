import React from 'react';
import styled from 'styled-components';
import pdf from '../assets/docs/Braddy Yeoh CV.pdf'

const Download = styled.a.attrs({
    className: `avenir link pointer tc center black f3 fw5`,
    textDecoration: `none`,
    href: pdf,
    target: "_blank"
})``

export default class PDF extends React.Component {
    render() {
        return (
            <Download>
                View my CV
            </Download>
        )
    }
}
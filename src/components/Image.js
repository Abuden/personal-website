import React from 'react';
import styled from 'styled-components';

import Me from '../assets/img/me.jpg';

const Img = styled.img.attrs({
    className: ``
})``

export default class Image extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <img src={Me}/>
        )
    }
}
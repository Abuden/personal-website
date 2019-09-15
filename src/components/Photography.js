import React from 'react';
import styled from 'styled-components';

const Gallery = styled.div.attrs({
    className: `flex flex-wrap`
})``

const Entry = styled.div.attrs({
    className: `outline w-25 pa3 mr2`
})``

const Img = styled.img.attrs({
    className: `mw-100`
})

export default class Photography extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photos: []
        }
    }

    render() {
        return (
            <Gallery>
                {
                    photos.map(photo => {
                        return (
                            <Entry>
                                <Img>
                                </Img>
                            </Entry>
                        )
                    })
                }
            </Gallery>
        )
    }
}
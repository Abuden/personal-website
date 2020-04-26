import React from 'react';
import styled from 'styled-components';

const TitleP = styled.p.attrs({
    className: `tc f1-ns lh-copy fw3 f2`
})``

export default function Title({ title }) {
    return (
        <TitleP>
            { title }
        </TitleP>
    )
}
import React from 'react';
import styled from 'styled-components';

export const Layout = ({ children }) => {
    return (
        <Wrapper>{ children }</Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
    min-height: calc(100vh - 100px - 188px);
    overflow-y: auto;
    margin-top: 106px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    width: 0; 
    height: 0; 
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 50px solid #98bce3;
    ${(left) => left ? left : 0}
`;

const Triangle = ({left}) => {
    return (
        <Container left={left} >
            
        </Container>  
    );
};

export default Triangle;
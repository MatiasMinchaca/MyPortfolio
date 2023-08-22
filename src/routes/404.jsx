import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 5px;
`;

const SectionOne = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

const NotFound = () => {
    return (
        <>
            <Container>
                <SectionOne>
                    
                </SectionOne>
            </Container>
        </>
    );
};

export default NotFound;
import styled from "styled-components"
// styled components는 css의 네이밍중복을 방지할 수 있음
// css in js (styled-jsx)
const Container = styled.div`
    display : flex;

    /* 아래가 반응형 사용할 수 있게끔하는 방법 */
    @media screen and (max-width : 768px) {
        display:block;
    }
    
`

const Box = styled.div`
    width : 50px;
    height : 50px;  
    background-color : ${(props)=>props.color || "ivory"};
    
    &:hover {
        transform : scale(2);
    }
`


function StyledComponent () {
    return(
        <>
            <Container>
                <Box color="black" />
                <Box color="grey"/>
                <Box color="navy"/>
                <Box color="blue"/>
                <Box color="purple"/>
                <Box color="pink"/>
                <Box></Box>
            </Container>
        

        </>
    )
}

export default StyledComponent;
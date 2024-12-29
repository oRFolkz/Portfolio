import styled from 'styled-components'

export const CardContain = styled.div`
    padding: 2rem 0 0 3.5em;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;

    @media ( width < 600px ) {
        padding: 2rem 0 0 1rem;
    }
`

export const CardSubContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 900px;
    height: 600px;
    border-radius: 1rem;
    overflow: hidden;
    margin: 0 1rem 1rem 0;
    cursor: pointer;

    position: relative;

    &:hover .hoverEffect{
        bottom: 0px;
    }

    @media ( width < 980px ) {
        width: 95%;
    }

    @media ( width < 800px ) {
        height: 400px;
    }

    @media ( width < 440px ) {
        height: 300px;
    }
`

export const ImgProject = styled.div`
    object-fit: cover;
    
    img {
        width: 100%;
        height: 100%;
    }

    @media ( width < 920px ) {
        img {
            width: 100%;
            height: 100%;
        }
    }
`

export const ProjectInfo = styled.div`
    position: absolute;
    content: '';
    bottom: -600px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0,0,0, 0.6);

    @media ( width < 800px ) {
        bottom: 0px !important;
    }
    
    transition: all .5s ease;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
        display: flex;
    }

    img {
        width: 30px;
        height: 30px;
        margin: 0 .5rem 0 0;
    }

    p {
        color: white;
        margin: 0 0 .5rem 0;
    }
`

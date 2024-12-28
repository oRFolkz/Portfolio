import styled from 'styled-components'

export const Background = styled.div`
    background-color: black;
    height: 50vh;
    width: 100%;

    p   {
        margin: 0;
        padding: .5rem 0 1rem 0;
        color: white;
        font-weight: 400;
        font-size: 2rem;
        text-align: center;
    }
`

export const CardContain = styled.div`
    background-color: white;
    margin: auto;
    height: 350px;
    width: 1300px;
    border-radius: 1rem 10rem 1rem 10rem;
    display: flex;
`

export const CardSubContainer = styled.div`
    margin: 0 .2rem;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 350px;

    &:first-child {
        border-radius: 0 0 0  10rem;
        margin-left: 0 !important;
    }

    &:last-child {
        border-radius: 0 10rem 0 0;
        margin-right: 0 !important;
    }

    p {
        color: black;
        padding: 0;
        margin: 0;
    }

    p:nth-child(1){
        font-size: 1.5rem;
        font-weight: bold; 
        margin: 1rem 0 0 0;
    }

    p:nth-child(2){
        font-weight: 400; 
        font-size: 1rem;    
    }
`

export const Icons = styled.div`
    text-aling: center;
    
    img {
        width: 30px;
        height: 30px;
    }
`

export const ImgProject = styled.div`
    object-fit: cover;
    
    img {
        width: 450px;
        height: 300px;
    }
`
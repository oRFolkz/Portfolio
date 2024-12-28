import styled from 'styled-components'

export const Background = styled.div`
    position: relative;
    background-image: radial-gradient(circle at 16% 83%, rgba(148, 148, 148,0.06) 0%, rgba(148, 148, 148,0.06) 50%,rgba(63, 63, 63,0.06) 50%, rgba(63, 63, 63,0.06) 100%),radial-gradient(circle at 68% 87%, rgba(66, 66, 66,0.06) 0%, rgba(66, 66, 66,0.06) 50%,rgba(105, 105, 105,0.06) 50%, rgba(105, 105, 105,0.06) 100%),radial-gradient(circle at 38% 50%, rgba(123, 123, 123,0.06) 0%, rgba(123, 123, 123,0.06) 50%,rgba(172, 172, 172,0.06) 50%, rgba(172, 172, 172,0.06) 100%),linear-gradient(90deg, hsl(18,0%,1%),hsl(18,0%,1%));
    color: rgb(0, 174, 255);
    width: 100%;
    height: 100vh;

    span {
        font-weight: bold;
        color: white;
    }

    @media ( width < 860px ) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &.hide {
        display: none;
    }
`

export const FirstContainer = styled.div`
    display: flex;

    @media ( width < 860px ) {
        display: block;
    }
`
export const SecondContainer = styled.div`
`

export const InfoCard = styled.div`
    padding: 4rem 0 0 4rem;

    @media ( width < 860px ) {
        max-width: 490px;
        padding: 4rem 0 0 0;
        display: flex;
        flex-direction: column;
        aling-items: center;
    }

    @media ( width < 499px ) {
        padding: 1rem 0 0 1rem;
    }
`

export const MainTextBlock = styled.div`
    // Welcome to my
    h2 {
        font-weight: 500;
        text-align: end;
        margin: 0 3.2rem 0 0;
        font-size: 2rem;

        @media ( width < 860px ) {
            font-weight: 500;
            text-align: start;
            margin: 0 0 0 3.2rem;
        }

        @media ( width < 600px ) {
            font-size: 2rem;
            margin: 0 0 0 1rem;
        }

        @media ( width < 399px ) {
            font-size: 1.2rem;
            margin: 0 0 0 1rem;
        }
    }

    // PORTFOLIO
    h1 {
        line-height: 3.5rem;
        margin: 0;
        font-size: 5.5rem;

        @media ( width < 600px ) {
            line-height: 2rem;
            font-size: 4rem;
        }

        @media ( width < 399px ) {
            font-size: 3rem;
        }
    }

`

export const MainImgBlock = styled.div`
    margin: 0 0 0 4rem;
    width: 100px;
    height: 100px;
        img {
            width: 250%;
            height: 250%;
        }

    @media ( width < 860px ) {
        display: none;
    }
`   

export const MainImgBlockTablet = styled.div`
    margin: 0;
    width: 100px;
    height: 100px;
    
    img {
        width: 250%;
        height: 220%;
    }

    @media ( width < 860px ) {
        align-item: end;
        display: flex;
    }

    @media ( width < 600px ) {
        img {
            padding-top: 1rem;
            width: 300%;
            height: 160%;
        }
    }

    @media ( width < 399px ) {
        img {
            padding-top: 1rem;
            width: 140%;
            height: 150%;
        }
    }
` 

export const SecondTextBlock = styled.div`
    margin: 2rem 0 0 0;

    p {
        font-size: 1.6rem;
        margin: 0;
        padding: 0;
        line-height: 2rem;
    }

    @media ( width < 860px ) {
        display: none;
    }
`

export const SecondTextBlockTablet = styled.div`
    margin: 2rem 0 0 0;

    p {
        font-size: 1.6rem;
        margin: 0;
        padding: 0;
        line-height: 2rem;
        width: 320px;

        @media ( width < 600px ) {
            font-size: 1.5rem;
            line-height: 1.8rem;
            width: 300px;
        }

        @media ( width < 480px ) {
            font-size: 1.2rem;
            line-height: 1.5rem;
            width: 200px;
        }

        @media ( width < 399px ) {
            font-size: 1rem;
            line-height: 1.4rem;
            width: 140px;
        }
    }
`

export const Icons = styled.div`
    width: auto;
    margin: 4rem 0 0 0;
    display: flex;
    align-items: center;
    font-size: 3rem;
    color: black;

    img {
        margin: 0 .5rem 0 0;
        width: 70px;
        height: 70px;
    }

    .ts {
        margin: 0 0 0 0; !important
        width: 75px;
    }

    .js {
        margin: 0 0 0 0; !important
        width: 75px;
    }

    @media ( width < 600px ) {
        flex-wrap: wrap;
        gap: 1rem 1rem;
    }

    @media ( width < 480px ) {
        width: 360px;
    }

    @media ( width < 399px ) {
        margin: 2.5rem 0 0 0;
        width: 300px;

        img {
            margin: 0 .5rem 0 0;
            width: 50px;
            height: 50px;
        }
    }
`

export const TabletView = styled.div`
    display: none;    

    @media ( width < 860px ) {
        display: flex;
    }
`
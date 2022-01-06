import styled from "styled-components";

export const Container = styled.div`
    max-width: 1240px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;

    @media screen and (min-width: 1920px) {
        max-width: 1640px;
    }
    @media screen and (max-width: 420px) {
        padding: 0 16px;
    }
`

export const ContainerFluid = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;

    @media screen and (max-width: 1232px) {
        padding: 0 16px;
    }
    @media screen and (min-width: 1920px) {
        max-width: 1600px;
    }
`
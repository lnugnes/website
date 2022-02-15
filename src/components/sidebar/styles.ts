import styled, { css } from "styled-components";

import { Props } from "./interface";

export const SideBarContainer = styled.nav<Props>`
    position: fixed;
    top: 0;
    z-index: 99;

    width: ${(props: any) => (props.status ? '240px' : '55px')};
    height: calc(100vh - 60px);
    margin-top: 60px;

    transition: width .5s;

    background-color: white;
    box-shadow: 0 1px 30px 1px rgb(0 0 0 / 11%);
`

export const SideBarItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    gap: 1.5rem;

    margin-top: 2rem;
`

export const SideBarItem = styled.div<any>`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    gap: 1rem;
    cursor: pointer;

    p {
        color: #646777;
        font-size: 14px;
    }

    &:hover {
        p, i {
            color: #C8A63B;
        }
    }

    ${({ status }: any) => (
        !status ? css`
           p {
               display: none;
           }
        ` : css`
            padding-left: 12px;
            width: 90%;
        `
    )}
`

export const FontIcon = styled.i<any>`
    ${({ fontSize, color }: any) => (
        css`
            ${fontSize && `font-size: ${fontSize};`}
            ${color && `color: ${color};`}
        `
    )}

    width: 17px;
    height: 17px;
`

export const SideBarDivisor = styled.hr`
    width: 100%;
    height: 2px;

    margin-top: .2rem;
    margin-bottom: .2rem;

    background-color: #646777;
`
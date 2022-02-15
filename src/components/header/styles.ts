import styled, { css } from 'styled-components';

export const HeaderComp = styled.header` 
    position: fixed;
    top: 0;
    z-index: 100;

    width: 100%;
    height: 60px;

    background-color: white;
    box-shadow: 0 2px 15px 0 rgb(0 0 0 / 5%);
`

export const HeaderContainer = styled.div`
    margin: auto;
    max-width: 90%;
    height: 100%;
`

export const DefaultButton = styled.button`
    border: none;
    outline: none;
    background-color: unset;
`

export const ItensGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    height: 60px;
`

export const UserImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 100%;
`

export const UserName = styled.p`
    color: #646777;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
`

export const FontIcon = styled.i<any>`
    /* opacity: 0.55; */
    ${({ fontSize, color }: any) => (
        css`
            ${fontSize && `font-size: ${fontSize};`}
            ${color && `color: ${color};`}
        `
    )}

    ${({ hasAlert }: any) => (
        hasAlert && css`
            &:after {
                content: '';
                width: 7px;
                height: 7px;
                background-color: #e0536f;
                position: absolute;
                transform: translate(0%, -70%);
                border-radius: 100px;
                animation: beforePulse 1.5s infinite;
            }
        `
    )}
`

export const NotifyCollapse = styled.div<any>`
    position: fixed;
    inset: 0px auto auto 0px;
    z-index: 100;
`
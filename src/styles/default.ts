import styled, { css } from "styled-components";

interface defaultFlexContainer {
    align?: string
    justify?: string
    gap?: string
}

export const DefaultFlexContainer = styled.div<defaultFlexContainer>`
    display: flex;

    ${({ align, justify, gap }: defaultFlexContainer) => (
        css`
            align-items: ${align ? align : 'center'};
            justify-content: ${justify ? justify : 'center'};
            ${gap && `gap: ${gap};`}
        `
    )}
`
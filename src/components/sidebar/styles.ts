import styled from "styled-components";

import { Props } from "./interface";

export const SideBarContainer = styled.div<Props>`
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
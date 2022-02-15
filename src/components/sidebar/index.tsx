import { SideBarContainer } from "./styles";

import { connect } from 'react-redux';
import { Props } from "./interface";

const Component = (props: Props) => {
    return(
        <SideBarContainer status={props.status}>

        </SideBarContainer>
    )
}

export const SideBar = connect((state: any) => ({ status: state.changeSideBar.status }))(Component);
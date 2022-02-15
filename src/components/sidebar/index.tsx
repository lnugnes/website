import { FontIcon, SideBarContainer, SideBarItem, SideBarItems } from "./styles";

import { connect } from 'react-redux';
import { Props } from "./interface";

const Component = ({ status }: Props) => {
    return (
        <SideBarContainer status={status}>
            <SideBarItems>
                <SideBarItem status={status}>
                    <FontIcon className='fa-solid fa-chart-line' fontSize='17px' color='#b1c3c8'></FontIcon>
                    <p>Dashboard</p>
                </SideBarItem>
                <SideBarItem status={status}>
                    <FontIcon className='fa-solid fa-chart-line' fontSize='17px' color='#b1c3c8'></FontIcon>
                    <p>Conectar bancos</p>
                </SideBarItem>
            </SideBarItems>
        </SideBarContainer>
    )
}

export const SideBar = connect((state: any) => ({ status: state.changeSideBar.status }))(Component); 
import { FontIcon, SideBarContainer, SideBarDivisor, SideBarItem, SideBarItems } from "./styles";

import { connect } from 'react-redux';
import { Props } from "./interface";

const Links = [
    { name: 'Dashboard', icon: 'fa-solid fa-chart-line', href: '' },
    { name: 'Conectar bancos', icon: 'fa-solid fa-link', href: '' },
    { skip: true },
    { name: 'Dicas financeiras', icon: 'fa-solid fa-coins', href: '' },
]

const Component = ({ status }: Props) => {
    return (
        <SideBarContainer status={status}>
            <SideBarItems>
                {
                    Links.map((v: any, k: number) => (
                        v.skip ? (
                            <SideBarDivisor/>
                        ) : (
                            <SideBarItem key={k} status={status}>
                                <FontIcon className={v.icon} fontSize='17px' color='#b1c3c8'></FontIcon>
                                <p>{v.name}</p>
                            </SideBarItem>
                        )
                    ))
                }
            </SideBarItems >
        </SideBarContainer >
    )
}

export const SideBar = connect((state: any) => ({ status: state.changeSideBar.status }))(Component); 
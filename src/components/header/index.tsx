import { useEffect, useRef, useState } from 'react';
import { DefaultFlexContainer } from '@styles/default';
import { Overlay, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap';
import { ShowNotifications } from './showNotifications';
import { DefaultButton, FontIcon, HeaderComp, HeaderContainer, ItensGroup, NotifyCollapse, UserImage, UserName } from './styles';

import { useDispatch } from 'react-redux';
import { sideBarToggle } from '@redux/actions/changeSideBar';

export const Header = () => {
    const dispatch = useDispatch();

    return (
        <HeaderComp>
            <HeaderContainer>
                <DefaultFlexContainer justify='space-between'>
                    <ItensGroup>
                        <DefaultButton onClick={() => dispatch(sideBarToggle())}>
                            <FontIcon className='fa-solid fa-bars' fontSize='20px' color='#b1c3c8'></FontIcon>
                        </DefaultButton>
                        <DefaultFlexContainer>
                            <img src="/assets/images/icon.png" alt="Logo do Meu Guru Financeiro" width='42' height='42' />
                            <img src="/assets/images/text.png" alt="Logo do texto Meu Guru Financeiro" height='50' />
                        </DefaultFlexContainer>
                    </ItensGroup>
                    <ItensGroup>
                        <DefaultFlexContainer gap='2rem'>
                            <DefaultFlexContainer gap='.5rem'>
                                <DefaultButton>
                                    <FontIcon className='fa-solid fa-magnifying-glass' fontSize='17px' color='#b1c3c8'></FontIcon>
                                </DefaultButton>
                                <div>
                                    <OverlayTrigger
                                        trigger="click"
                                        placement='bottom-end'
                                        overlay={
                                            <NotifyCollapse>
                                                <ShowNotifications />
                                            </NotifyCollapse>
                                        }
                                    >
                                        <DefaultButton>
                                            <FontIcon className='fa-solid fa-bell' fontSize='17px' color='#b1c3c8' hasAlert={true}></FontIcon>
                                        </DefaultButton>
                                    </OverlayTrigger>
                                </div>
                            </DefaultFlexContainer>
                            <DefaultFlexContainer gap='.7rem'>
                                <UserImage src="https://avatars.githubusercontent.com/u/38388768?v=4" alt="Imagem do usuário" />
                                <DefaultFlexContainer gap='1.3rem'>
                                    <UserName>André Gosling</UserName>
                                    <FontIcon className='fa-solid fa-angle-down' fontSize='12px' color='#b1c3c8'></FontIcon>
                                </DefaultFlexContainer>
                            </DefaultFlexContainer>
                        </DefaultFlexContainer>
                    </ItensGroup>

                </DefaultFlexContainer>
            </HeaderContainer>
        </HeaderComp >
    )
}
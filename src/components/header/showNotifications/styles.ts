import styled from "styled-components";

export const Container = styled.div`
    width: 330px;
    height: 316px;

    background-color: white;
    border-radius: 3px;
    box-shadow: 0 10px 25px 0 rgb(33 36 50 / 13%);
`

export const ContainerHeader = styled.div`
    padding: 1rem;
    padding-bottom: 0;

    p {
        font-size: 12px;
        color: #b1c3c8;

        &:first-child {
            font-size: 14px;
            color: #646777;
        }
    }
`

export const NotificationsContainer = styled.div`
    margin-top: 1rem;

    min-height: calc(57px * 4);
    max-height: calc(57px * 4);
    overflow: auto;

    &::-webkit-scrollbar-track {
	    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	    border-radius: 10px;
	    background-color: #F5F5F5;
    }

    &::-webkit-scrollbar {
    	width: 5px;
    	background-color: #F5F5F5;
    }

    &::-webkit-scrollbar-thumb {
    	border-radius: 10px;
    	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    	background-color: #b1c3c8;
    }

`

export const Notification = styled.div`
    border-bottom: 1px solid #eff1f5;

    &:first-child {
        border-top: 1px solid #eff1f5;
    }
`

export const NotificationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    max-width: 90%;
    margin: auto;

    padding: 10px 0 10px 0;

    img {
        border-radius: 100%;
    }

    p {
        color: #646777;
        font-size: 12px;
        line-height: 16px;

        strong {
            color: #C8A63B;
        }

        &:last-child {
            margin-top: -10px;
            font-size: 10px;
        }
    }
`

export const ContainerFooter = styled.div`
    width: 100%;
    height: 30px;
    
    a {
        text-transform: uppercase;

        display: flex;
        align-items: center;
        justify-content: center;
        
        height: 100%;

        font-size: 10px;
        font-weight: 500;
        color: #C8A63B;
    }
`
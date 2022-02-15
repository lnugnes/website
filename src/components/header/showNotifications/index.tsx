import { DefaultFlexContainer } from "@styles/default"
import { Container, ContainerFooter, ContainerHeader, Notification, NotificationContainer, NotificationsContainer } from "./styles"

export const ShowNotifications = (props: any) => {
    return (
        <Container>
            <ContainerHeader>
                <DefaultFlexContainer justify='space-between'>
                    <p>Notificações</p>
                    <p>Marcar como lido</p>
                </DefaultFlexContainer>
            </ContainerHeader>
            <NotificationsContainer>
                {
                    Array.from({ length: 10 }).map(() => (
                        <Notification>
                            <NotificationContainer>
                                <img src='https://cdn.discordapp.com/attachments/901991129099165757/942955012718493716/ava.png' alt='Ícone do usuário da notificação' />
                                <p><strong>Cristopher Changer</strong> has started a new project</p>
                                <p>9:02</p>
                            </NotificationContainer>
                        </Notification>
                    ))
                }
            </NotificationsContainer>
            <ContainerFooter>
                <a href='/futureRout'>Ver todas</a>
            </ContainerFooter>
        </Container>
    )
}
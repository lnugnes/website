export const CHANGE_SIDE_BAR = 'CHANGE_SIDE_BAR';
export const TOGGLE_SIDE_BAR = 'TOGGLE_SIDE_BAR';

export const sideBar = ({ status }: any) => (
    {
        type: CHANGE_SIDE_BAR,
        status: status,
    }
)

export const sideBarToggle = () => (
    {
        type: TOGGLE_SIDE_BAR,
    }
)
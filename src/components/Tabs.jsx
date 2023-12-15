export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
    // const ButtonsContainer = buttonsContainer; // This is a prop that can be passed in to change the container type and has to start with a capital letter

    return (
        <>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
        </>
    );
}
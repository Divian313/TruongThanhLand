import styled from "styled-components";
const Wrap = styled.div`
    /* width: 200px;
    height: 50px;
    background-color: red; */
`
const MenuButton = () => {
    return (
        <Wrap className="btn btn-primary d-xl-none d-block">
            menu
        </Wrap>
    )
}
export default MenuButton;
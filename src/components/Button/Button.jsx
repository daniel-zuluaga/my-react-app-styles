import styled from "styled-components";

const StyledButton = styled.button`
    background-color: ${props => props.color || "blue"};`

const Button = ({children, color}) => {
    return <StyledButton color={color}>
        {children}
    </StyledButton>
}

export { Button };
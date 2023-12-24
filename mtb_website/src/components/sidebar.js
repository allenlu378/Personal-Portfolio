import * as React from "react"
import styled, {keyframes} from "styled-components"
import FadeInDown from "@bit/formidablelabs.react-animations.fade-in-down";
const FadeInDownAnimation = keyframes`${FadeInDown}`;
const StyledSideElement = styled.div`
 
  position: fixed;
  bottom: 0;
  left: ${props => (props.orientation === "left" ? "40px" : "auto")};
  right: ${props => (props.orientation === "left" ? "auto" : "40px")};
  z-index: 10;
`

const Sidebar = ({ children, orientation }) => {
  return (
    <StyledSideElement orientation={orientation}>
      {children}
    </StyledSideElement>
  )
}

export default Sidebar


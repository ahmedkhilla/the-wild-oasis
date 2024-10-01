import styled from "styled-components";
import LightLogoImage from "../../public/logo-light.png";
import DarkLogoImage from "../../public/logo-dark.png";
import { useDarkMode } from "../contexts/DarkModeContext";
const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();
  const src = isDarkMode ? DarkLogoImage : LightLogoImage;
  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;

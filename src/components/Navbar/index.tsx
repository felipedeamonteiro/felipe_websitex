import React, { useState, useCallback } from "react";
import { useDeviceScreenSize } from "../../hooks/useDeviceScreenSize";
import BulbSwitch from "../BulbSwitch";
import {
  Nav,
  NavbarContainer,
  NavbarHome,
  MobileContent,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./styles";
import { FaBars } from "react-icons/fa";
import NeonButtonReal from "../Buttons/NeonButtonReal";

interface NavbarProps {
  toogle: () => void;
  handleDarkMode: () => void;
  darkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  toogle,
  handleDarkMode,
  darkMode,
}) => {
  const [viewNavBar, setViewNavBar] = useState<boolean>(false);

  const { isMobile, isTablet } = useDeviceScreenSize();

  const changeNavBarBackground = useCallback(() => {
    if (!isMobile && !isTablet && window.scrollY >= 180) {
      setViewNavBar(true);
    } else if (!isMobile && !isTablet && window.scrollY < 180) {
      setViewNavBar(false);
    }
  }, []);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeNavBarBackground);
  }

  return (
    <>
      <Nav viewNavBar={viewNavBar}>
        <NavbarContainer>
          <NavbarHome href="#section-home">HOME</NavbarHome>

          {!isMobile && !isTablet ? (
            <NavMenu>
              <BulbSwitch handleDarkMode={handleDarkMode} darkMode={darkMode} />
              <NavItem>
                {darkMode ? (
                  <NeonButtonReal
                    href="#section-experiencia"
                    buttonColorHex="#03E9F4"
                  >
                    Experiência
                  </NeonButtonReal>
                ) : (
                  <NavLinks href="#section-experiencia">EXPERIÊNCIA</NavLinks>
                )}
              </NavItem>
              <NavItem>
                {darkMode ? (
                  <NeonButtonReal
                    href="#section-projetos"
                    buttonColorHex="#C3A2FF"
                  >
                    Projetos
                  </NeonButtonReal>
                ) : (
                  <NavLinks href="#section-projetos">PROJETOS</NavLinks>
                )}
              </NavItem>
              <NavItem>
                {darkMode ? (
                  <NeonButtonReal
                    href="#section-sobreMim"
                    buttonColorHex="#FF839E"
                  >
                    Sobre Mim
                  </NeonButtonReal>
                ) : (
                  <NavLinks href="#section-sobreMim">SOBRE MIM</NavLinks>
                )}
              </NavItem>
              <NavItem>
                {darkMode ? (
                  <NeonButtonReal
                    href="#section-contato"
                    buttonColorHex="#0EF462"
                  >
                    Contato
                  </NeonButtonReal>
                ) : (
                  <NavLinks href="#section-contato">CONTATO</NavLinks>
                )}
              </NavItem>
            </NavMenu>
          ) : (
            <MobileContent>
              <BulbSwitch handleDarkMode={handleDarkMode} darkMode={darkMode} />
              <MobileIcon onClick={toogle}>
                <FaBars />
              </MobileIcon>
            </MobileContent>
          )}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

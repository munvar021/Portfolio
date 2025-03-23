// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import theme from "../../styles/theme";

// export const HeaderContainer = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: ${(props) => (props.scrolled ? "0.6rem 2rem" : "1rem 2rem")};
//   background-color: ${(props) =>
//     props.scrolled ? "rgba(30, 42, 56, 0.85)" : "rgba(255, 255, 255, 0.1)"};
//   backdrop-filter: blur(8px);
//   -webkit-backdrop-filter: blur(8px);
//   position: sticky;
//   top: 0;
//   z-index: 1000;
//   transition: all 0.3s ease-in-out;
//   box-shadow: ${(props) =>
//     props.scrolled
//       ? "0 4px 20px rgba(0, 0, 0, 0.15)"
//       : "0 2px 10px rgba(0, 0, 0, 0.05)"};
//   color: ${(props) => (props.scrolled ? "#fff" : theme.colors.textPrimary)};
//   border: 1px solid rgba(255, 255, 255, 0.18);
//   border-radius: 0 0 10px 10px;
//   margin: 0 10px;
//   width: calc(100% - 20px);

//   @media (max-width: 768px) {
//     padding: ${(props) => (props.scrolled ? "0.5rem 1rem" : "0.8rem 1rem")};
//     margin: 0 5px;
//     width: calc(100% - 10px);
//   }
// `;

// export const Logo = styled(Link)`
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   font-family: ${theme.fonts.heading};
//   font-weight: 700;
//   font-size: 1.5rem;
//   color: inherit;
//   transition: transform 0.3s ease;

//   img {
//     height: 2rem;
//     margin-right: 0.5rem;
//   }

//   &:hover {
//     transform: scale(1.05);
//   }
// `;

// export const Nav = styled.nav`
//   display: flex;
//   gap: 2rem;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     gap: 1rem;
//     margin-bottom: 1.5rem;
//   }
// `;

// export const NavItem = styled(Link)`
//   text-decoration: none;
//   font-family: ${theme.fonts.body};
//   font-weight: 500;
//   color: inherit;
//   padding: 0.5rem 0;
//   position: relative;
//   transition: all 0.3s ease;

//   &:after {
//     content: "";
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     width: ${(props) => (props.active === "true" ? "100%" : "0")};
//     height: 2px;
//     background-color: ${theme.colors.highlight};
//     transition: width 0.3s ease;
//   }

//   &:hover {
//     color: ${theme.colors.highlight};
//     transform: translateY(-2px);

//     &:after {
//       width: 100%;
//     }
//   }

//   ${(props) =>
//     props.active === "true" &&
//     `
//     color: ${theme.colors.highlight};
//     font-weight: 600;
//   `}

//   @media (max-width: 768px) {
//     font-size: 1.2rem;
//     padding: 0.8rem 0;

//     &:hover {
//       transform: translateX(5px);
//     }
//   }
// `;

// export const SearchBox = styled.div`
//   position: relative;
//   display: flex;
//   align-items: center;

//   input {
//     padding: 0.5rem 1rem;
//     padding-right: 2.5rem;
//     border-radius: 20px;
//     border: 1px solid rgba(255, 255, 255, 0.2);
//     font-family: ${theme.fonts.body};
//     background-color: rgba(255, 255, 255, 0.1);
//     backdrop-filter: blur(4px);
//     -webkit-backdrop-filter: blur(4px);
//     color: inherit;
//     width: 150px;
//     transition: all 0.3s ease;

//     &:focus {
//       outline: none;
//       width: 200px;
//       border-color: ${theme.colors.highlight};
//       box-shadow: 0 0 10px rgba(111, 207, 151, 0.3);
//     }
//   }

//   svg {
//     position: absolute;
//     right: 10px;
//     cursor: pointer;
//     transition: transform 0.3s ease;

//     &:hover {
//       transform: scale(1.1);
//       color: ${theme.colors.highlight};
//     }
//   }

//   @media (max-width: 768px) {
//     width: 100%;
//     margin: 1rem 0;

//     input {
//       width: 100%;
//       padding: 0.8rem 1rem;
//       padding-right: 2.5rem;
//       font-size: 1rem;

//       &:focus {
//         width: 100%;
//       }
//     }
//   }
// `;

// export const UserActions = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1.5rem;

//   a {
//     color: inherit;
//     position: relative;
//     transition: all 0.3s ease;
//     display: flex;
//     align-items: center;
//     gap: 0.5rem;

//     svg {
//       font-size: 1.25rem;
//     }

//     span {
//       display: ${(props) => (props.mobile ? "inline" : "flex")};
//       align-items: center;
//       justify-content: center;
//       position: absolute;
//       top: -8px;
//       right: -8px;
//       background-color: ${theme.colors.highlight};
//       color: ${theme.colors.primary};
//       border-radius: 50%;
//       width: 18px;
//       height: 18px;
//       font-size: 0.75rem;
//       font-weight: bold;
//     }

//     &:hover {
//       color: ${theme.colors.highlight};
//       transform: scale(1.1);
//     }
//   }

//   @media (max-width: 768px) {
//     width: 100%;
//     justify-content: space-around;

//     a {
//       flex-direction: column;
//       align-items: center;

//       span {
//         position: static;
//         background-color: transparent;
//         width: auto;
//         height: auto;
//         color: inherit;
//         font-size: 0.9rem;
//         margin-top: 0.25rem;
//       }
//     }
//   }
// `;

// export const MobileMenuButton = styled.button`
//   background: rgba(47, 128, 237, 0.1);
//   border: none;
//   color: inherit;
//   font-size: 1.5rem;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   backdrop-filter: blur(4px);
//   -webkit-backdrop-filter: blur(4px);

//   &:hover {
//     transform: scale(1.1);
//     color: ${theme.colors.highlight};
//     background: rgba(111, 207, 151, 0.15);
//   }

//   &:active {
//     transform: scale(0.95);
//   }
// `;

// export const MobileMenu = styled.div`
//   position: absolute;
//   top: 100%;
//   left: 10px;
//   right: 10px;
//   background-color: rgba(30, 42, 56, 0.9);
//   backdrop-filter: blur(10px);
//   -webkit-backdrop-filter: blur(10px);
//   padding: 1.5rem;
//   display: flex;
//   flex-direction: column;
//   transform: ${(props) => (props.open ? "translateY(0)" : "translateY(-100%)")};
//   opacity: ${(props) => (props.open ? 1 : 0)};
//   visibility: ${(props) => (props.open ? "visible" : "hidden")};
//   transition: all 0.3s ease-in-out;
//   box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
//   color: #fff;
//   z-index: 999;
//   border-radius: 10px;
//   border: 1px solid rgba(255, 255, 255, 0.18);
// `;

// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import theme from "../../styles/theme";

// export const HeaderContainer = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: ${(props) => (props.scrolled ? "0.6rem 2rem" : "1rem 2rem")};
//   background-color: ${(props) =>
//     props.scrolled ? "rgba(30, 42, 56, 0.85)" : "rgba(255, 255, 255, 0.1)"};
//   backdrop-filter: blur(8px);
//   -webkit-backdrop-filter: blur(8px);
//   position: sticky;
//   top: 0;
//   z-index: 1000;
//   transition: all 0.3s ease-in-out;
//   box-shadow: ${(props) =>
//     props.scrolled
//       ? "0 4px 20px rgba(0, 0, 0, 0.15)"
//       : "0 2px 10px rgba(0, 0, 0, 0.05)"};
//   color: ${(props) => (props.scrolled ? "#fff" : theme.colors.textPrimary)};
//   border: 1px solid rgba(255, 255, 255, 0.18);
//   border-radius: 0 0 10px 10px;
//   margin: 0 10px;
//   width: calc(100% - 20px);

//   @media (max-width: 768px) {
//     padding: ${(props) => (props.scrolled ? "0.5rem 1rem" : "0.8rem 1rem")};
//     margin: 0 5px;
//     width: calc(100% - 10px);
//   }
// `;

// export const Logo = styled(Link)`
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   font-family: ${theme.fonts.heading};
//   font-weight: 700;
//   font-size: 1.5rem;
//   color: inherit;
//   transition: transform 0.3s ease;

//   img {
//     height: 2rem;
//     margin-right: 0.5rem;
//     border-radius: 5px;
//   }

//   span {
//     @media (max-width: 480px) {
//       font-size: 1.2rem;
//     }
//   }

//   &:hover {
//     transform: scale(1.05);
//   }
// `;

// export const Nav = styled.nav`
//   display: flex;
//   gap: 2rem;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//     gap: 0.5rem;
//     margin-bottom: 1rem;
//     width: 100%;
//   }
// `;

// export const NavItem = styled(Link)`
//   text-decoration: none;
//   font-family: ${theme.fonts.body};
//   font-weight: 500;
//   color: inherit;
//   padding: 0.5rem 0;
//   position: relative;
//   transition: all 0.3s ease;

//   &:after {
//     content: "";
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     width: ${(props) => (props.active === "true" ? "100%" : "0")};
//     height: 2px;
//     background-color: ${theme.colors.highlight};
//     transition: width 0.3s ease;
//   }

//   &:hover {
//     color: ${(props) =>
//       props.active === "true" ? theme.colors.highlight : theme.colors.accent};
//     transform: translateY(-2px);

//     &:after {
//       width: ${(props) => (props.active === "true" ? "100%" : "50%")};
//     }
//   }

//   ${(props) =>
//     props.active === "true" &&
//     `
//     color: ${theme.colors.highlight};
//     font-weight: 600;
//   `}

//   @media (max-width: 768px) {
//     font-size: 1.2rem;
//     padding: 0.8rem 0;
//     width: 100%;
//     text-align: center;
//     border-bottom: ${(props) =>
//       props.active === "true" ? "none" : "1px solid rgba(255, 255, 255, 0.1)"};

//     &:last-child {
//       border-bottom: none;
//     }

//     &:hover {
//       transform: ${(props) =>
//         props.active === "true" ? "translateY(-2px)" : "translateX(0)"};
//       background-color: ${(props) =>
//         props.active === "true" ? "transparent" : "rgba(47, 128, 237, 0.1)"};
//       border-radius: 8px;
//     }

//     &:after {
//       bottom: ${(props) => (props.active === "true" ? "0" : "auto")};
//       left: ${(props) => (props.active === "true" ? "0" : "50%")};
//       transform: ${(props) =>
//         props.active === "true" ? "none" : "translateX(-50%)"};
//       width: ${(props) => (props.active === "true" ? "100%" : "0")};
//     }
//   }
// `;

// export const MobileMenuButton = styled.button`
//   background: rgba(47, 128, 237, 0.1);
//   border: none;
//   color: inherit;
//   font-size: 1.5rem;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   backdrop-filter: blur(4px);
//   -webkit-backdrop-filter: blur(4px);
//   z-index: 1001;

//   &:hover {
//     transform: scale(1.1);
//     color: ${theme.colors.highlight};
//     background: rgba(111, 207, 151, 0.15);
//   }

//   &:active {
//     transform: scale(0.95);
//   }
// `;

// export const MobileMenu = styled.div`
//   position: absolute;
//   top: 100%;
//   left: 10px;
//   right: 10px;
//   background-color: rgba(30, 42, 56, 0.95);
//   backdrop-filter: blur(10px);
//   -webkit-backdrop-filter: blur(10px);
//   padding: 1rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   transform: ${(props) => (props.open ? "translateY(0)" : "translateY(-10px)")};
//   opacity: ${(props) => (props.open ? 1 : 0)};
//   visibility: ${(props) => (props.open ? "visible" : "hidden")};
//   transition: all 0.3s ease-in-out;
//   box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
//   color: #fff;
//   z-index: 999;
//   border-radius: 10px;
//   border: 1px solid rgba(255, 255, 255, 0.18);
//   max-height: ${(props) => (props.open ? "80vh" : "0")};
//   overflow: hidden;

//   @media (max-width: 480px) {
//     left: 5px;
//     right: 5px;
//   }
// `;

import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../styles/theme";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => (props.scrolled ? "0.6rem 2rem" : "1rem 2rem")};
  background-color: ${(props) =>
    props.scrolled ? "rgba(30, 42, 56, 0.85)" : "rgba(255, 255, 255, 0.1)"};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  box-shadow: ${(props) =>
    props.scrolled
      ? "0 4px 20px rgba(0, 0, 0, 0.15)"
      : "0 2px 10px rgba(0, 0, 0, 0.05)"};
  color: ${(props) => (props.scrolled ? "#fff" : theme.colors.textPrimary)};
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 0 0 10px 10px;
  margin: 0 10px;
  width: calc(100% - 20px);

  @media (max-width: 768px) {
    padding: ${(props) => (props.scrolled ? "0.5rem 1rem" : "0.8rem 1rem")};
    margin: 0 5px;
    width: calc(100% - 10px);
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: ${theme.fonts.heading};
  font-weight: 700;
  font-size: 1.5rem;
  color: inherit;
  transition: transform 0.3s ease;

  img {
    height: 2rem;
    margin-right: 0.5rem;
    border-radius: 5px;
  }

  span {
    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    width: 100%;
  }
`;

export const NavItem = styled(Link)`
  text-decoration: none;
  font-family: ${theme.fonts.body};
  font-weight: 500;
  color: inherit;
  padding: 0.5rem 0;
  position: relative;
  transition: all 0.3s ease;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${(props) => (props.active === "true" ? "100%" : "0")};
    height: 2px;
    background-color: ${theme.colors.highlight};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${(props) =>
      props.active === "true" ? theme.colors.highlight : theme.colors.accent};
    transform: translateY(-2px);

    &:after {
      width: ${(props) => (props.active === "true" ? "100%" : "50%")};
    }
  }

  ${(props) =>
    props.active === "true" &&
    `
    color: ${theme.colors.highlight};
    font-weight: 600;
  `}

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.8rem 0;
    width: 100%;
    text-align: center;
    border-bottom: ${(props) =>
      props.active === "true" ? "none" : "1px solid rgba(255, 255, 255, 0.1)"};

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      transform: ${(props) =>
        props.active === "true" ? "translateY(-2px)" : "translateX(0)"};
      background-color: ${(props) =>
        props.active === "true" ? "transparent" : "rgba(47, 128, 237, 0.1)"};
      border-radius: 8px;
    }

    &:after {
      bottom: ${(props) => (props.active === "true" ? "0" : "auto")};
      left: ${(props) => (props.active === "true" ? "0" : "50%")};
      transform: ${(props) =>
        props.active === "true" ? "none" : "translateX(-50%)"};
      width: ${(props) => (props.active === "true" ? "100%" : "0")};
    }
  }
`;

export const MobileMenuButton = styled.button`
  background: rgba(47, 128, 237, 0.1);
  border: none;
  color: inherit;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 1001;

  &:hover {
    transform: scale(1.1);
    color: ${theme.colors.highlight};
    background: rgba(111, 207, 151, 0.15);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 10px;
  right: 10px;
  background-color: rgba(30, 42, 56, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: ${(props) => (props.open ? "translateY(0)" : "translateY(-10px)")};
  opacity: ${(props) => (props.open ? 1 : 0)};
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  transition: all 0.3s ease-in-out;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  color: #fff;
  z-index: 999;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  max-height: ${(props) => (props.open ? "80vh" : "0")};
  overflow: hidden;

  @media (max-width: 480px) {
    left: 5px;
    right: 5px;
  }
`;

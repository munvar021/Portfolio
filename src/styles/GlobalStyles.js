import { createGlobalStyle } from "styled-components";
import { liquidGlassEffect } from "./mixins";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  * {
    scrollbar-width: none; 
    -ms-overflow-style: none; 
  }

  *::-webkit-scrollbar {
    display: none; 
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.textPrimary};
    background-color: ${({ theme }) => theme.colors.background};
    line-height: 1.6;
    overflow-x: hidden;
    overflow-y: auto;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 600;
    line-height: 1.3;
  }

  h1 {
    font-size: 2.5rem;
    background: linear-gradient(135deg, ${({ theme }) =>
      theme.colors.primary}, ${({ theme }) => theme.colors.accent});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 2rem;
    position: relative;
    
    &::after {
      content: '';
      display: block;
      width: 50px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.highlight};
      margin-top: 0.3rem;
      border-radius: 3px;
    }
    
    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.accent};
    
    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }

  p {
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.accent};
    transition: all 0.3s ease;
    position: relative;
    
    &:hover {
      color: ${({ theme }) => theme.colors.highlight};
    }
    
    &:focus {
      outline: none;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
  }

  button {
    cursor: pointer;
    font-family: ${({ theme }) => theme.fonts.body};
    background: ${({ theme }) => theme.colors.accent};
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 30px;
    font-weight: 500;
    transition: all 0.3s ease;
    
    &:hover {
      background: ${({ theme }) => theme.colors.highlight};
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(47, 128, 237, 0.3);
    }
    
    &:active {
      transform: translateY(0);
    }
    
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(47, 128, 237, 0.3);
    }
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  input, textarea, select {
    font-family: ${({ theme }) => theme.fonts.body};
    padding: 0.75rem 1rem;
    border: 1px solid rgba(58, 63, 68, 0.2);
    border-radius: 8px;
    transition: all 0.3s ease;
    background-color: rgba(255, 255, 255, 0.9);
    width: 100%;
    
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.accent};
      box-shadow: 0 0 0 3px rgba(47, 128, 237, 0.2);
    }
  }
  
  ul, ol {
    list-style-position: inside;
  }
  
  ::selection {
    background-color: ${({ theme }) => theme.colors.highlight};
    color: ${({ theme }) => theme.colors.primary};
  }
  
  .card, .glass {
    ${liquidGlassEffect}
    padding: 1.5rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    }
  }
  
  .btn-primary {
    background-color: ${({ theme }) => theme.colors.accent};
    color: white;
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.highlight};
    }
  }
  
  .btn-secondary {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.accent};
    border: 1px solid ${({ theme }) => theme.colors.accent};
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.accent};
      color: white;
    }
  }
  
  .hide-on-mobile {
    @media (max-width: 768px) {
      display: none;
    }
  }
  
  .show-on-mobile {
    display: none;
    
    @media (max-width: 768px) {
      display: block;
    }
  }
  
  .flex {
    display: flex;
  }
  
  .flex-col {
    flex-direction: column;
  }
  
  .items-center {
    align-items: center;
  }
  
  .justify-between {
    justify-content: space-between;
  }
  
  .gap-2 {
    gap: 0.5rem;
  }
  
  .gap-4 {
    gap: 1rem;
  }
  
  .grid {
    display: grid;
  }
  
  .grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
  
  .grid-cols-3 {
    grid-template-columns: repeat(3, 1fr);
    
    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }
`;

export default GlobalStyles;

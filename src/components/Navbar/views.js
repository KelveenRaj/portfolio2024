import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  background-color: #333;
  color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding-left: 1rem; /* Adjust padding values as needed */
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
  padding-right: 1rem; /* Adjust padding values as needed */

  @media (max-width: 768px) {
    flex-direction: column;
    display: ${(props) => (props.open ? "flex" : "none")};
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #333;
    padding: 1rem;

    a {
      text-decoration: none;
      color: #fff;
      padding: 0.5rem;
    }
  }
`;

const Hamburger = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    padding-right: 1rem; /* Adjust padding values as needed */
  }
`;

export { Nav, Logo, Links, Hamburger };

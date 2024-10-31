import styled from "styled-components";
import { dafuq5 } from "../assets";


const Footer = () => {


      return (
            <StyledFooter>
                  <div className="container light-text">
                        <h3 className="text-center">
                              Copyright 2024 DAFUQ. All Rights Reserved.
                        </h3>
                        <div className="my-3 text-center">
                              <img
                                    src={dafuq5}
                                    alt="DAFUQ"
                                    width="100px"
                              />
                        </div>
                  </div>

            </StyledFooter>
      );
};

export default Footer;


const StyledFooter = styled.footer`
      background-color: var(--dark-color);
      padding: 5rem 0 ;  

.footer-copyright {
      background: rgba(94, 55, 3, 0.064);
}
`;
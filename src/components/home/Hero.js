import styled from "styled-components";
import { dafuq4 } from "../../assets";
import { heroBg } from "../../assets";
import Navbar from "../Navbar";


const Hero = () => {


      return (
            <StyledHero>
                  <Navbar />
                  <div className="padded-container">
                        <div className="container">
                              <div className="row align-items-center justify-content-between">

                                    <div className="col-lg-6 col-md-4 align-self-center text-center mt-5"
                                          data-aos="zoom-in"
                                          data-aos-duration="2000"
                                    >
                                          <div className="round-btn mt-3">
                                                $DAFUQ
                                          </div>
                                          <h1 className="light-text fw-bold my-4">
                                                DAFUQ
                                          </h1>
                                          <p className="imagine light-text col-md-8 text-center mx-auto">
                                                No description needed, DAFUQ
                                          </p>


                                    </div>

                                    <div className="col-md-8 col-lg-5 align-self-center mt-5 mt-md-0"
                                          data-aos="zoom-in"
                                          data-aos-duration="2000"
                                    >
                                          <img src={dafuq4} alt="Frog Laptop" width="100%" />
                                    </div>
                              </div>


                        </div>
                  </div>

            </StyledHero>
      );
};

export default Hero;

const StyledHero = styled.section`

      .padded-container{
            padding: 0 0 4rem ;
      }

      h1 {
            font-size: 50px;
      }
      p.imagine{
            font-size: 18px;
      }

 .video-container {
            padding: 20px;
            border-radius: 10px;
            max-width: 100%;
            text-align: center;
      }

      .video-container video {
            width: 100%;
            max-width: 100%;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
`;
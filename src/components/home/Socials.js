import styled from "styled-components";
import { socials } from "../../utils/data";


const Socials = () => {


      return (
            <>
                  <div id="socials"></div>
                  <StyledSocials>
                        <div className="container">
                              <div className="socials">
                                    <div className="col-md-12"
                                          data-aos="fade-left"
                                          data-aos-duration="1000"
                                    >
                                          <h1 className="grey-bold-text text-center">
                                                OUR   <span className="pry-bold-text"> SOCIALS </span>
                                          </h1>
                                    </div>
                                    <div className="row gap-4 justify-content-center mt-5"
                                          data-aos="fade-right"
                                          data-aos-duration="1000"
                                    >

                                          {
                                                socials?.map(({ img, url }, i) =>
                                                      <div className="col-2 text-center" key={i}>
                                                            <a href={url} target="_blank">
                                                                  <img
                                                                        src={img}
                                                                        alt="Socials"
                                                                        width="70px"
                                                                        height="100%"
                                                                        className="br-lg"
                                                                  />
                                                            </a>
                                                      </div>
                                                )
                                          }
                                    </div>
                              </div>

                        </div>

                  </StyledSocials>
            </>
      );
};

export default Socials;

const StyledSocials = styled.section`
      padding: 5rem 0;

.socials {
      h1 {
            font-size: 48px;
      }
      p {
            font-size: 20px;
      }
}

      .card-bg {
            position: relative;
            padding: 29px;
            border-radius: 50px;
            z-index:30 !important;
            background: var(--light-color);
            
            .rounded-btn{
                  width:fit-content;
                  color: var(--grey-color);
                  padding: .5rem 0rem ;
                  border-radius: 100px;
            }
            
            :hover{
                  box-shadow: 0px 50px 80px -30px #976D0033;
                  
                  .rounded-btn{
                        color: var(--light-color);
                        background: var(--pry-color);
                        padding: .5rem 1rem ;
                  }
            }
      }
      .row {
            position: relative;
      }
      `;
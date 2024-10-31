import styled from "styled-components";


const Contract = () => {
      return (
            <>
                  <div id="contract"></div>
                  <StyledTestimonial
                        data-aos="zoom-in"
                        data-aos-duration="500"
                  >

                        <div className="container">
                              <div className="row align-items-center  ">
                                    <div className="col-lg-12 mb-5 title"
                                          data-aos="fade-left"
                                          data-aos-duration="1000"
                                          data-aos-delay="500"
                                    >
                                          <h1 className="display-3 text-center">
                                                CONTRACT ADDRESS:
                                          </h1>
                                          <p className="mt-5 text-center px-3 text-break">
                                                4qRf1yLjAxQdxybjy56Tgcki7iBBJ26dsN7MsypUpump
                                          </p>
                                    </div>

                              </div>

                        </div>

                  </StyledTestimonial>
            </>
      );
};

export default Contract;

const StyledTestimonial = styled.section`

background: var(--light-color);
color: var(--dark-color);
      padding: 5rem 0;

   
      .title {

            p {
                  font-size: 25px;
            }
      }

      .card-bg{
            background: #FFFFFF;
            border-radius:10px;
            padding: 3rem .8rem 1rem;
            position:relative;
            z-index:3 !important;
            img{
                  position:absolute;
                  top:-1.6rem;
            }
      }

            

            `;
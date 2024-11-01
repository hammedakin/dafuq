import React from 'react';
import styled from 'styled-components';
import { dafuq1, dafuq2, dafuq4, frog2, frog4, subscribe } from '../../assets';


const Subcribe = () => {
      return (
            <StyledSubscribe>
                  <div className="container">
                        <div className="subscribe-card"
                              data-aos="zoom-in"
                              data-aos-duration="1000"

                        >
                              <div className="row mx-auto text-center"
                                    data-aos="zoom-in"
                                    data-aos-duration="1000"
                                    data-aos-delay="1000"
                              >
                                    <div className="col-md-6">
                                          <img src={dafuq1} alt="dafuq" width="100%" />
                                    </div>
                                    <div className="col-md-6">
                                          <img src={dafuq2} alt="dafuq" width="100%" />
                                    </div>
                              </div>
                        </div>
                  </div>

            </StyledSubscribe>
      );
};

export default Subcribe;

const StyledSubscribe = styled.section`
      margin: 4rem 0;

      .subscribe-card{
            background-color: var(--sec-color);
            background-size: cover;
            background-position: center;
            border-radius: 50px;
            padding: 4rem 1rem;


            img {
                  height:100%;
            }
      }


`;
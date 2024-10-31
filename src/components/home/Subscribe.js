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


             .input-group {
                  display: flex;
                  align-items:center;
                  justify-content: space-between;
                  background-color: var(--light-color);
                  border-radius:100px !important;
                  padding-right:4px;
                  margin-top:3rem;

                  input {
                        width: 100%;
                        padding: 12px 20px;
                        margin: 0;
                        display: inline-block;
                        border: none;
                        box-sizing: border-box;
                        font-size: 13px;
                        line-height: 24px;
                        color: var(--dark-color);
                        box-shadow: none;
                        margin-bottom: 0 !important;
                        background-color: none;
                        border-radius:100px;

                        ::placeholder{
                              color: var(--grey-bold-color);
                        }
                  }
                  button {
                        line-height: 1.5 !important;
                        border-radius:100px !important;
                        box-shadow:none !important;

            }
            }
      }


`;
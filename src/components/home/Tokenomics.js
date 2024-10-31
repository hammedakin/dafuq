import styled from "styled-components";
import { tokenomics } from "../../utils/data";


const Tokenomics = () => {

      return (
            <>
                  <div id="tokenomics"></div>
                  <StyledTokenomics

                  >
                        <div className="container">
                              <div className="col-md-6 mx-auto text-center"
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                              >
                                    <p className="fw-bold pry-bold-text">
                                          $DAFUQ
                                    </p>
                                    <h1 className="grey-bold-text">
                                          TOKENOMICS
                                    </h1>
                              </div>

                              <div className="row mt-5 justify-content-between">
                                    {tokenomics?.map(({ token, name }, i) =>
                                          <div className="col-md-3 col-6 px-2 px-md-4 mb-4 text-center" key={i}
                                                data-aos="fade-right"
                                                data-aos-duration="500"
                                          >
                                                <h4 className="">
                                                      {name}{token}
                                                </h4>
                                          </div>
                                    )}
                              </div>
                        </div>
                  </StyledTokenomics>
            </>
      );
};

export default Tokenomics;

const StyledTokenomics = styled.section`
padding: 5rem 0;
margin: 2rem 0;


h1{
      font-size: 50px;
}
.student {      
            width:100%;
            height:500px;
            margin:auto;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            border-radius: 50px;
            display: flex;
            align-items:end;

}


      
`;
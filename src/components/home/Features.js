import styled from "styled-components";

const Features = () => {
      return (
            <>
                  <div id="chart"></div>
                  <StyledTestimonial
                        data-aos="zoom-in"
                        data-aos-duration="500"
                  >

                        <div className="container">

                              <div id="dexscreener-embed"><iframe src="https://dexscreener.com/solana/7DYn4LmwVkC6SXiZ6fqfExf3JkhK4ecR9Vdf9bVxTmtP?embed=1&theme=dark"></iframe></div>

                        </div>

                  </StyledTestimonial>
            </>
      );
};

export default Features;

const StyledTestimonial = styled.section`


      padding: 4rem 0;
      position: relative;

      #dexscreener-embed {
            position:relative;
            width:100%;
            padding-bottom:125%;
      }
      
      @media(min-width:1400px){
            #dexscreener-embed{
                  padding-bottom:65%;
            }
      }
      #dexscreener-embed iframe{
            position:absolute;
            width:100%;
            height:100%;
            top:0;
            left:0;
            border:0;
      }
   
    
            `;
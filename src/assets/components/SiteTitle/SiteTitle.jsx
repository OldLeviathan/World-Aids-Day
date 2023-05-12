import styled from "styled-components";

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  color: #f3f0a5;
  margin-top: 50px;
  margin-bottom: 80px;
`

const StyledSiteTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 40px;
`

const StyledSubtitles = styled.h2`
  font-size: 20px;
`
const SiteTitle = () => {
    return (
        <StyledTitle>
            <StyledSiteTitle>
                instagram post stories template
            </StyledSiteTitle>
            <StyledSubtitles>
                World Aids Day
            </StyledSubtitles>
        </StyledTitle>
    );
};

export default SiteTitle;
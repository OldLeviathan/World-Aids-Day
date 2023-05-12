import styled from "styled-components";

const StyledPostName = styled.p`
  color: rgb(212, 76, 76);
  font-weight: bold;
  font-size: ${props => props.size || "10px"};
  margin: ${props => props.margin || "0"};
`
const PostName = ({...props}) => {
    return (
        <StyledPostName {...props}>
            WorldAidsDay.
        </StyledPostName>
    );
};

export default PostName;
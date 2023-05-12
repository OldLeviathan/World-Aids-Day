import styled from "styled-components";

const StyledPostSubtitle = styled.h3`
  color: rgb(212, 76, 76);
  font-size: ${props => props.size || "10px"};
  margin: ${props => props.margin || "0"};
`

const PostSubtitle = (props) => {
    return (
        <StyledPostSubtitle {...props}>
            {props.text}
        </StyledPostSubtitle>
    );
};

export default PostSubtitle;
import styled from "styled-components";


const StyledPostTitle = styled.h1`
  color: deepskyblue;
  text-transform: uppercase;
  font-size: ${props => props.size || "10px"};
  margin: ${props => props.margin || "0"};
`

const PostTitle = (props) => {

    return (
        <StyledPostTitle {...props}>
            {props.text}
        </StyledPostTitle>
    );
};

export default PostTitle;
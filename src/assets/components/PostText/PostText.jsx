import styled from "styled-components";

const StyledPostText = styled.p`
  color: black;
  font-size: ${props => props.size || "10px"};
  margin: ${props => props.margin || "0"};
`

const PostText = ({...props}) => {
    return (
        <StyledPostText {...props}>
            {props.text}
        </StyledPostText>
    );
};

export default PostText;
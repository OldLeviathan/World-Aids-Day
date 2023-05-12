import styled from "styled-components";

const StyledPostLink = styled.a`
  color: black;
  text-decoration: none;
  cursor: pointer;
  font-size: ${props => props.size || "10px"};
  margin: ${props => props.margin || "0"};
  font-weight: bold;
`

const PostLink = ({...props}) => {
    return (
        <StyledPostLink {...props}>
            {props.text}
        </StyledPostLink>
    );
};

export default PostLink;
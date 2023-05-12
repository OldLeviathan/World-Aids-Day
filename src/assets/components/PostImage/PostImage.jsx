import styled from "styled-components";

const StyledPostImage = styled.div`
  background-image: url("${props => props.image}");
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  order: 1;
`

const PostImage = ({children, ...props}) => {
    return (
        <StyledPostImage image={props.image}>
            {children}
        </StyledPostImage>
    );
};

export default PostImage;
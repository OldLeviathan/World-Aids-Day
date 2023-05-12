import styled from "styled-components";

const StyledPostArea = styled.div`
  display: flex;
  flex-wrap: ${props => props.wrap};
`

const PostArea = ({children, ...props}) => {
    return (
        <StyledPostArea wrap={props.wrap}>
            {children}
        </StyledPostArea>
    );
};

export default PostArea;
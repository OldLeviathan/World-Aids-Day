import styled from 'styled-components'
import PostTitle from "../PostTitle/PostTitle.jsx";
import PostSubtitle from "../PostSubtitle/PostSubtitle.jsx";
import PostName from "../PostName/PostName.jsx";
import PostImage from "../PostImage/PostImage.jsx";
import PostText from "../PostText/PostText.jsx";
import PostLink from "../PostLink/PostLink.jsx";

const StyledAidPost = styled.div`
  padding: 0;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: white;
  width: 900px;
  height: 900px;
  align-items: flex-start;
  text-align: left;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.76);
`
const MainPost = ({...props}) => {

    return (
        <StyledAidPost
            align={props.align}
            justify={props.justify}
        >
            <PostImage image={props.image}>
                <PostName size='20px' margin='20px'/>
                <PostTitle text={props.title} size='70px' margin='480px 20px 20px 20px'/>
                <PostSubtitle text={props.subtitle} size='20px' margin='0 20px 20px 20px'/>
                <PostText text={props.text} size='10px' margin='0 20px 20px 20px'/>
                <PostLink text={props.link} size='20px' margin='0 20px 20px 20px'/>
            </PostImage>
        </StyledAidPost>
    );
};

export default MainPost;
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
  margin-bottom: 40px;
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  justify-content: space-between;
  background-color: white;
  width: 250px;
  height: 430px;
  justify-content: ${props => props.justify};
  text-align: ${props => props.align};
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.76);
`
const AidPost = ({...props}) => {

    return (
       <StyledAidPost
           {...props}
       >
           <div>
               <PostName size='10px' margin='20px'/>
               <PostTitle text={props.title} size='25px' margin='20px 20px 0px 20px'/>
               <PostSubtitle text={props.subtitle} size='10px' margin='0 20px 20px 20px'/>
               <PostText text={props.text} size='10px'  margin='0 20px 20px 20px'/>
               <PostLink text={props.link} size='10px'  margin='0 20px 20px 20px'/>
           </div>
           <PostImage image={props.image}/>
       </StyledAidPost>
    );
};

export default AidPost;
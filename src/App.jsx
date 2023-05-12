import AidPost from "./assets/components/AidPost/AidPost.jsx";
import styled from "styled-components";
import SiteTitle from "./assets/components/SiteTitle/SiteTitle.jsx";
import MainPost from "./assets/components/MainPost/MainPost.jsx";
import PostArea from "./assets/components/PostArea/PostArea.jsx";

const AppWrapper = styled.div`
  padding: 20px 20px 60px 50px;
`
const App = () => {
    return (
        <AppWrapper>
            <SiteTitle/>
            <PostArea wrap='no-wrap'>
                <MainPost
                    title='world aids day'
                    subtitle='01 December | #ZeroAidsCampaign'
                    image='/image_2.jpg'
                    text='Lorem ipsum do lor sit amet, conasectetur adi piscing elit, sed do eius mod tem po incidid Ut unt ut labore et dolore magna aliqua. '
                    align='right'
                    link='www.website.com'
                />
                <PostArea wrap='wrap'>
                    <AidPost
                        title='keep healthy aids prevension.'
                        subtitle='01 December | #ZeroAidsCampaign'
                        image='/image_1.jpg'
                        text='Lorem ipsum do lor sit amet, conasectetur adi piscing elit, sed do eius mod tem po incidid Ut unt ut labore et dolore magna aliqua. '
                        align='center'
                        link='www.website.com'
                        direction='column-reverse'
                    />
                    <AidPost
                        title='world aids day.'
                        subtitle='01 December | #ZeroAidsCampaign'
                        image='/image_3.jpg'
                        text='Lorem ipsum do lor sit amet, conasectetur adi piscing elit, sed do eius mod tem po incidid Ut unt ut labore et dolore magna aliqua. '
                        align='right'
                        link='www.website.com'
                    />
                    <AidPost
                        title='stop aids keep healthy.'
                        subtitle='01 December | #ZeroAidsCampaign'
                        image='/image_5.jpg'
                        text='Lorem ipsum do lor sit amet, conasectetur adi piscing elit, sed do eius mod tem po incidid Ut unt ut labore et dolore magna aliqua. '
                        align='left'
                        link='www.website.com'
                        direction='column-reverse'
                    />
                    <AidPost
                        title='stop aids keep healthy.'
                        subtitle='01 December | #ZeroAidsCampaign'
                        image='/image_4.jpg'
                        text='Lorem ipsum do lor sit amet, conasectetur adi piscing elit, sed do eius mod tem po incidid Ut unt ut labore et dolore magna aliqua. '
                        align='center'
                        link='www.website.com'
                    />
                    <AidPost
                        title='zero aids campaign.'
                        subtitle='01 December | #ZeroAidsCampaign'
                        image='/image_3.jpg'
                        text='Lorem ipsum do lor sit amet, conasectetur adi piscing elit, sed do eius mod tem po incidid Ut unt ut labore et dolore magna aliqua. '
                        align='right'
                        link='www.website.com'
                    />
                    <AidPost
                        title='world aids day'
                        subtitle='01 December | #ZeroAidsCampaign'
                        image='/image_4.jpg'
                        text='Lorem ipsum do lor sit amet, conasectetur adi piscing elit, sed do eius mod tem po incidid Ut unt ut labore et dolore magna aliqua. '
                        align='left'
                        link='www.website.com'
                    />
                    <AidPost
                        title='keep healthy aids prevension.'
                        subtitle='01 December | #ZeroAidsCampaign'
                        image='/image_2.jpg'
                        text='Lorem ipsum do lor sit amet, conasectetur adi piscing elit, sed do eius mod tem po incidid Ut unt ut labore et dolore magna aliqua. '
                        align='left'
                        link='www.website.com'
                        direction='column-reverse'
                    />
                    <AidPost
                        title='zero aids campaign.'
                        subtitle='01 December | #ZeroAidsCampaign'
                        image='/image_5.jpg'
                        text='Lorem ipsum do lor sit amet, conasectetur adi piscing elit, sed do eius mod tem po incidid Ut unt ut labore et dolore magna aliqua. '
                        align='center'
                        link='www.website.com'
                        direction='column-reverse'
                    />
                </PostArea>
            </PostArea>
        </AppWrapper>
    );
};

export default App;
import LoginForm from 'components/LoginForm/LoginForm';
// import { Titel } from "./LoginPage.styled"
import { Page, Title, Container, Blur, Wrapper } from './LoginPage.styled';
import ImageDesktop from '../../assets/images/Main-IMG/Framemain-Img-Lg_x1.png';
import ImageTablet from '../../assets/images/Main-IMG/Framemain-img-Md_x1.png';
import { useIsDesktop, useIsMobile, useIsTablet } from 'hooks/useIsMobile';

const LoginPage = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();

  return (
    <>
      <Container>
        <Page>
          {isMobile ? null : (
            <Wrapper>
              {isTablet && (
                <img src={ImageTablet} alt="" width="260" height="250" />
              )}
              {isDesktop && (
                <img src={ImageDesktop} alt="" width="435" height="420" />
              )}

              <Title>Finance App</Title>
            </Wrapper>
          )}
          <LoginForm />
          <Blur></Blur>
        </Page>
      </Container>
    </>
  );
};

export default LoginPage;

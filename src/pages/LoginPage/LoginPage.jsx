import LoginForm from 'components/LoginForm/LoginForm';
// import { Titel } from "./LoginPage.styled"
import { Page, Title, Container, Blur } from './LoginPage.styled';

const LoginPage = () => {
  return (
    <>
      <Container>
        <Page>
          <Title>Finance App</Title>
          <Blur>
            <LoginForm />
          </Blur>
        </Page>
      </Container>
    </>
  );
};

export default LoginPage;

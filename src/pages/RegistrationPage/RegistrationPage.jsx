import RegistrationForm from 'components/RegistrationForm.jsx/RegistrationForm';
import {
  Page,
  Title,
  Container,
  Blur,
  Wrapper,
} from './RegistrationPage.styled';

import ImageDesktop from '../../assets/images/Main-IMG/GirlMain-img-Lg_x1.png';
import ImageTablet from '../../assets/images/Main-IMG/GirlMain-img-Md_x1.png';
import { useIsDesktop, useIsMobile, useIsTablet } from 'hooks/useIsMobile';

const RegistrationPage = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();

  return (
    <Container>
      <Page>
        {isMobile ? null : (
          <Wrapper>
            {isTablet && (
              <img src={ImageTablet} alt="" width="274" height="250" />
            )}
            {isDesktop && (
              <img src={ImageDesktop} alt="" width="452" height="413" />
            )}

            <Title>Finance App</Title>
          </Wrapper>
        )}
        <RegistrationForm />
        <Blur></Blur>
      </Page>
    </Container>
  );
};

export default RegistrationPage;

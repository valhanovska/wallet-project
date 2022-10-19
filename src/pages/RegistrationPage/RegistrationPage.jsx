
import RegistrationForm from "components/RegistrationForm.jsx/RegistrationForm";
import { Page, Title } from "./RegistrationPage.styled";


const RegistrationPage = () => {
  return (
    <Page>
      <div>
        <Title>Finance App</Title>
        </div>
        <RegistrationForm />
    </Page>
  )
};

export default RegistrationPage
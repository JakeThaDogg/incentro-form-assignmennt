import styled from "styled-components";
import Form from "./components/Form";
import incentroLogo from "./incentro.svg";

const Container = styled.div`
  background-color: #e0e0ec;
  min-height: 100vh;
  padding: 48px;
`;

const Logo = styled.img`
  padding: 8px;
  width: 212px;
`;

function App() {
  return (
    <Container>
      <Logo src={incentroLogo} />
      <Form />
    </Container>
  );
}

export default App;

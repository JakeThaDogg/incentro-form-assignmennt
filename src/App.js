import styled from "styled-components";
import Form from "./components/Form";

const Container = styled.div`
  background-color: #6d6ea3;
  min-height: 100vh;
  padding: 128px;
`;

function App() {
  return (
    <Container>
      <Form />
    </Container>
  );
}

export default App;

import { Container } from '@mui/material'
import FormInput from "./components/Form";
import ListItems from "./components/ListItems";

const App = () => {
  return (
    <div className="App">
        <Container maxWidth="sm">
            <h1>ToDo List</h1>
            <FormInput />
            <ListItems />
        </Container>
    </div>
  );
}

export default App;

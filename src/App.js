import { Container } from '@mui/material'
import FormInput from "./components/Form";
import ListItems from "./components/ListItems";
import {Provider} from "react-redux";
import {store} from "./Core/store/index"

const App = () => {
  return (
      <Provider store={store}>
        <div className="App">
            <Container maxWidth="sm">
                <h1>ToDo List</h1>
                <FormInput />
                <ListItems />
            </Container>
        </div>
      </Provider>
  );
}

export default App;

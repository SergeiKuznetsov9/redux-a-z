import { Provider } from "react-redux";
import { TodoList } from "./components/Todolist";
import { store } from "./redux/store.js";

export const App = () => (
  <Provider store={store}>
    <div className="App">
      <h1>Список задач</h1>
      {/* <TodoForm /> */}
      {/* <StatusBar /> */}
      <TodoList />
      {/* <Login /> */}
    </div>
  </Provider>
);

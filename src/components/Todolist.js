import { connect } from "react-redux";
import { TodoItem } from "./TodoItem.js";

//  У TodoList на самом деле никаких пропсов нету. Однако благодаря коду ниже TodoList будет подменен 
// другой функцией, у которой эти пропсы есть
const TodoList = (props) => {
  const { items } = props;
  console.log(items);
  return (
    <div className="todo-list">
      LIST
      {/* {items.length > 0 ? (
        items.map((item) => <TodoItem key={item.id} id={item.id} />)
      ) : (
        <p>Список задач пустой</p>
      )} */}
    </div>
  );
};

// Эта функция в качестве аргумента принимает глобальный стейт и работает как селектор,
// прокидывая возвращаемое значение в пропсы подключаемой функции 
const mapStateToProps = (state) => ({
  items: state.todo,
});

// а здесь комопнент подключается к редаксу. Старый экземпляр не используется, 
// возвращается новый экземпляр, подключенный к стору именно он экспортируется и используется в дальнейшем
const TodoListConnected = connect(mapStateToProps)(TodoList);
export { TodoListConnected as TodoList };

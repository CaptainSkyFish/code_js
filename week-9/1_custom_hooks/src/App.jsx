import { useEffect, useState } from "react";
import "./App.css";
// import useTodos from "./hooks/TodosHook";
// import axios from "axios";
// import useAutoRefreshFetchTodos from "./hooks/AutoRefresh";
// import useIsOnline from "./hooks/CheckOnline";
// import useMousePosition from "./hooks/MouseMove";
// import useDimensions from "./hooks/ReturnDimension";
// import useInterval from "./hooks/Interval";
import useDebounce from "./hooks/Debounce";
import { useUserList } from "./hooks/UserList";

function App() {
  // const { todos, loading } = useTodos();
  // const isOnline = useIsOnline();
  // const { todos, loading } = useAutoRefreshFetchTodos(5);
  // const { ViewWidth, ViewHeight } = useDimensions();
  // const mouse = useMousePosition();
  // const [count, setCount] = useState(0);
  const [searchText, setSearchText] = useState("");
  const debouncedValue = useDebounce(searchText, 500);
  // useInterval(() => {
  //   setCount((c) => c + 1);
  // }, 1000);

  return (
    <div style={{ width: "100%" }}>
      <input
        style={{ padding: "6px", margin: "4px", borderRadius: "6px" }}
        type="text"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        placeholder="Search"
      ></input>
      <SearchList searchFor={debouncedValue} />
      {/* <div>{`Viewport Width: ${ViewWidth} and Height: ${ViewHeight}`}</div>
      <div>{`Mouse Points : ${mouse.x}, ${mouse.y}`}</div>
      <div>{`Count is ${count}`}</div>
      <div>
        {isOnline ? (
          <div>you are connected</div>
        ) : (
          <div>user offline. please check your internet connection</div>
        )}
      </div>
      <div>
        {loading
          ? "Laoding...."
          : todos.map((todo) => <TodoList key={todo.id} todo={todo} />)}
      </div> */}
    </div>
  );
}

function SearchList({ searchFor }) {
  const searchFrom = useUserList();
  const filteredItems = searchFrom.filter((user) =>
    user.toLowerCase().includes(searchFor.toLowerCase())
  );

  return (
    <div
      style={{
        border: "2px solid whitesmoke",
        padding: "8px",
        borderRadius: "8px",
        margin: "4px",
        width: "100%",
      }}
    >
      {filteredItems.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {filteredItems.map((item, index) => (
            <li
              style={{
                borderRadius: "10px",
                padding: "10px",
                border: "1px solid #ccc",
                display: "flex",
                flexGrow: "1",
                flexShrink: "0",
                flexBasis: "50%",
                flexWrap: "wrap",
                margin: "5px",
              }}
              key={index}
            >
              {item}
            </li>
          ))}
        </div>
      ) : (
        <p>No matches found</p>
      )}
    </div>
  );
}

// function TodoList({ todo }) {
//   return (
//     <div>
//       <span>{todo.title}</span> <br />
//       <span>{todo.description}</span> <br />
//       <span>{todo.completed}</span> <br />
//     </div>
//   );
// }

// function MyComponent() {
//   useEffect(() => {
//     console.log("mounted");
//     return () => {
//       console.error("unmounted");
//     };
//   }, []);

//   return <div>Text inside MyComponent.</div>;
// }

export default App;

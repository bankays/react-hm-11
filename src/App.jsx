import "./App.css";
import useFetch from "./useFetch";

function App() {
  const { error, data } = useFetch("/categories");
  console.log(data);
  return <></>;
}

export default App;

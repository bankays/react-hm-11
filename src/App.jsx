import "./App.css";
import useFetch from "./useFetch";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { data } = useFetch("/products");
  console.log(data);

  return (
    <>
      {data?.map(({ title, id }) => (
        <div key={id}>
          <p>{title}</p>
        </div>
      ))}

      <ToastContainer />
    </>
  );
}

export default App;

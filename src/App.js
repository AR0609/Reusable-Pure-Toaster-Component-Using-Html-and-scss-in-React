import "./App.css";
import Toast1 from "./components/Toast/example/toast1";
import Toast2 from "./components/Toast/example/toast2";
import Toast3 from "./components/Toast/example/toast4";
import Toast4 from "./components/Toast/example/toast3";

function App() {
  return (
    <>
      <div
        style={{
          marginTop: "60px",
          marginBottom: "60px",
          display: "flex",
          justifyContent: "center",
          fontSize: "24px",
          fontWeight: "700",
        }}
      >
        Pure Reusable Toaster Component Using Html and Css in React
      </div>

      <div
        className="App"
        style={{
          marginTop: "60px",
          marginBottom: "60px",
          marginLeft: "40px",
        }}
      >
        <Toast1 />
        <Toast2 />
        <Toast3 />
        <Toast4 />
      </div>
    </>
  );
}

export default App;

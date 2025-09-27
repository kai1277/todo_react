import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// コンポーネントの頭文字は大文字で始まり
const App = () => {
  return (
    <div>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </div>
  );
};

// <App /> のところで、App関数の中身が表示される
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

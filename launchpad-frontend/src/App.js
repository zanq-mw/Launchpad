import "./App.css";
import React, { useState, useEffect } from "react";

export function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/test")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  });

  return (
    <div className="App">
      <p>{data.mssg}</p>
    </div>
  );
}

import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/api/get-data", { method: "POST" }).then(async (res) => {
      const data = await res.json();
      if (data?.text) {
        setData(data.text);
      } else {
        setData("No Data Received.");
      }
    });
  });
  return <div>Data Received: {data}</div>;
};

export default App;
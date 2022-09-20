import { URL } from "../../utils/urls";

const requestMethod = async (path: string, method: string, data: any) => {
  const getMethod = {
    method: "GET",
  };

  const postMethod = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  };

  const result = await fetch(
    URL.concat(path),
    method === "POST" ? postMethod : getMethod
  );

  const response = await result.json();
  return response;
};

export default requestMethod;

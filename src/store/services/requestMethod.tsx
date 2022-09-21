import { URL } from "../../utils/urls";

const requestMethod = async (path: string, method: string, data: any) => {
  const auth = localStorage.getItem("auth_token");
  const getMethod = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  };

  const postMethod = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth}`,
    },
    body: JSON.stringify(data),
  };

  const putMethod = {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth}`,
    },
    body:JSON.stringify(data),
  };

  const result = await fetch(
    URL.concat(path),
    method === "POST" ? postMethod : method === "GET"?getMethod:putMethod
  );

  const response = await result.json();
  return response;
};

export default requestMethod;

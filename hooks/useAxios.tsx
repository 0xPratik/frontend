import { useState, useEffect } from "react";
import axios from "axios";

export enum Methods {
  POST = "post",
  PUT = "put",
  GET = "get",
  DELETE = "delete",
}

type UseAxios = {
  url: string;
  method: Methods;
  body: any;
  headers: any;
};

export const useAxios = ({
  url,
  method,
  body = null,
  headers = null,
}: UseAxios) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState<string>("");
  const [loading, setloading] = useState<boolean>(true);

  console.log("THE URL IS", url);

  const fetchData = () => {
    axios[method](`/api/${url}`, JSON.parse(headers), JSON.parse(body))
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [method, url, body, headers]);

  return { response, error, loading };
};

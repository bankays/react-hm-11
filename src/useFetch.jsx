import React, { useEffect, useState } from "react";
import axios from "axios";
import { instance } from "./api";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    instance
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [url]);
  return {
    data,
    error,
  };
};

export default useFetch;

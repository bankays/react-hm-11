import React, { useEffect, useState } from "react";
import axios from "axios";
import { instance } from "./api";
import { toast } from "react-toastify";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    instance
      .get(url)
      .then((response) => {
        setData(response.data);
        toast.success("it work!");
      })
      .catch((err) => {
        setError(err);
      });
  }, []);
  return {
    data,
    error,
  };
};

export default useFetch;

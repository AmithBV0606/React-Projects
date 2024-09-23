import { useState, useEffect } from "react";
import axios from 'axios';

const useRTQ = (urlPath) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController()
    ;(async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(urlPath + search, {signal:controller.signal});
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request Cancelled", error.message.message);
          return
        }
        setError(true);
        setLoading(false);
      }
    })();

    // Clean up code
    return () => {
      controller.abort()
    }
  }, [search]);

  return [products, error, loading, search, setSearch]
};

export default useRTQ
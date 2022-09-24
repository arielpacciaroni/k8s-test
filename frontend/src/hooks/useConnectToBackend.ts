import { useEffect, useState } from "react";
import axios from "axios";

interface ConnectToBackendOutput {
  success: boolean;
  loading: boolean;
  error: Error | undefined;
}

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL
})

export default function useConnectToBackend(): ConnectToBackendOutput {
  const [loading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<Error | undefined>();

  useEffect(() => {
    if(loading) {
      client.get("/").then(() => {
        setSuccess(true);
      }).catch(() => {
        setSuccess(false);
        setError(new Error("Couldn't connect to Backend"));
      }).finally(() => {
        setIsLoading(false);
      })
    }
  }, [loading]);

  return {
    success,
    error,
    loading
  }
}
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { AxiosRequestConfig, CanceledError } from 'axios';

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestconfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [erros, setErrors] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setIsLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestconfig,
        })
        .then((res) => {
          setData(res.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setErrors(err.message);
          setIsLoading(false);
        });
      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, erros, isLoading };
};

export default useData;

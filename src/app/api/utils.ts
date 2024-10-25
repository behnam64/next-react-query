import { AxiosError, AxiosResponse } from 'axios';
import { getReasonPhrase, ReasonPhrases, StatusCodes } from 'http-status-codes';

export function parseResponse<Data = any>(response: AxiosResponse<Data>) {
  const { data, status } = response;
  return {
    data,
    status,
    statusText: getReasonPhrase(status as StatusCodes) as ReasonPhrases,
  };
}

export function parseError<Error = any>(error: AxiosError<Error>) {
  if (error.response) {
    const { data, status } = error.response;
    return {
      data,
      status,
      statusText: getReasonPhrase(status as StatusCodes) as ReasonPhrases,
    };
  } else {
    return {
      statusText: 'Network error',
    };
  }
}

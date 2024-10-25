import { ReasonPhrases, StatusCodes } from 'http-status-codes';

export interface ResType<Data = any> {
  data: Data;
  status: StatusCodes;
  statusText: ReasonPhrases;
}

export interface ErrType<Error = any> {
  data?: Error;
  status?: StatusCodes;
  statusText: ReasonPhrases | 'Network error';
}

export interface ApiConfigInterface {
  baseUrl: string | string[];
  token?: {
    tokenCookieName: string;
    refreshCookieName: string;
  };
}

export const apiConfig: ApiConfigInterface = {
  // baseurl for api requests
  baseUrl: 'https://jsonplaceholder.typicode.com',

  token: {
    // this is the tokenCookie name if this isn't empty axios will sent the cookie as authorization header
    tokenCookieName: 'token',

    // this is the refreshCookie name if this isn't empty axios will sent the cookie as authorization header
    refreshCookieName: 'refresh',
  },
};

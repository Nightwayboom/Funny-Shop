import axios, { type AxiosError } from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
let accessToken : string = '';
function SetAccessToken(token:string) : void {
  accessToken = token;
}
/// В каждый запрос добавляет заголовок Authorization
axiosInstance.interceptors.response.use(
  (res) => res,
  async (err: AxiosError & { config: { sent?: boolean; url?: string } }) => {
    const prevRequest = err.config; 
    if (prevRequest.url?.endsWith('/tokens/refresh')) {
      return Promise.reject(err);
    }
    if (err.response?.status === 403 && !prevRequest.sent) {
      prevRequest.sent = true;
      const {
        data: { accessToken },
      } = await axiosInstance<ResponseType>('/tokens/refresh');
      prevRequest.headers.Authorization = `Bearer ${accessToken}`;
      return axiosInstance(prevRequest);
    }
    return Promise.reject(err);
  },
);
export { SetAccessToken };
export default axiosInstance;
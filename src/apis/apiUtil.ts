import axios from "axios";

const api = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api",
});

api.interceptors.request.use((config: any) => {
  const userLocal = localStorage.getItem("user");
  const currentUSer = userLocal ? JSON.parse(userLocal) : null;
  config.headers = {
    ...config.headers,
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTIzIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoiMzEudHJhbmh1dXBodWMuOTFAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIlF1YW5UcmkiLCIzMS50cmFuaHV1cGh1Yy45MUBnbWFpbC5jb20iLCJHUDAxIl0sIm5iZiI6MTc1OTIxNDE0NCwiZXhwIjoxNzU5MjE3NzQ0fQ.22J9ioXZDentEu66m4tbTLnZKkSww2iqiyMxDi5d32s`,
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBKYXZhIDA4IiwiSGV0SGFuU3RyaW5nIjoiMDMvMTAvMjAyNSIsIkhldEhhblRpbWUiOiIxNzU5NDQ5NjAwMDAwIiwibmJmIjoxNzI3NTY4MDAwLCJleHAiOjE3NTk2MjI0MDB9.t88DovcZaR6NTahJxIxAnHVcOKspKdRXEdyzsJHCgDA",
  };
  return config;
});

export default api;

import apiInstance from "./axiosInstance";

export const axiosBaseQuery =
({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await apiInstance({
        url: baseUrl + url,
        method,
        data,
        params,
      });
      console.log(result.data,"data" );
      console.log(data,"data");
      
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

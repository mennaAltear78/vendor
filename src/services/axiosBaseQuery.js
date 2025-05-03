import apiInstance from './axiosInstance';

export const axiosBaseQuery = ({ baseUrl } = { baseUrl: 'https://sphinx-go.vercel.app/api/v1' }) => async ({ url, method, data, params }) => {
  try {
    const result = await apiInstance({
      url: baseUrl + url,
      method,
      data,
      params,
    });
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

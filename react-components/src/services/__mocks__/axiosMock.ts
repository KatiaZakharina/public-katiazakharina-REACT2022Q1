import axios from 'axios';

export const mockAxiosGet = (responseData: unknown) => {
  jest.mock('axios');
  const axiosMock = axios;

  axiosMock.create = jest.fn();
  axiosMock.get = jest.fn();

  (axiosMock.create as jest.Mock).mockReturnValue(axiosMock);
  (axiosMock.get as jest.Mock).mockResolvedValue(responseData);

  return axiosMock;
};

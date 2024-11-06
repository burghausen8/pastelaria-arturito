import { HttpClient } from './httpClient';

global.fetch = jest.fn();

const httpGetErrorResponseMock = {
  ok: false,
  status: 404,
  statusText: 'Not Found',
}

const httpPostMockErrorResponse = {
  ok: false,
  status: 500,
  statusText: 'Internal Server Error',
}

const httpPatchMockErrorResponse = {
  ok: false,
  status: 400,
  statusText: 'Bad Request',
}

 const httpGetErrorMock = new Error('[GET] Error: 404 Not Found');
 const httpPostMockError = new Error('[POST] Error: 500 Internal Server Error');
 const httpPatchMockError = new Error('[PATCH] Error: 400 Bad Request');


describe('HttpClient ->', () => {
  let httpClient: HttpClient;
  const baseUrlMock = 'https://pastelaria-do-arturito/data';

  beforeEach(() => {
    httpClient = new HttpClient();
    (fetch as jest.Mock).mockClear();
    jest.clearAllMocks(); 
    jest.resetModules();
  });

  it('should perform a GET request successfully', async () => {
    // Arrange
    const mockResponse = { data: 'test' };
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    // Act
    const result = await httpClient.get(baseUrlMock);
    // Assert
    expect(result).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(baseUrlMock);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('should handle GET request errors', async () => {
    // Arrange
    (fetch as jest.Mock).mockResolvedValue(httpGetErrorResponseMock);
    // Act & Assert
    await expect(httpClient.get(baseUrlMock)).//
      rejects.toThrow('[GET] Error: 404 Not Found');
  });

  it('should perform a POST request successfully', async () => {
    // Arrange
    const mockResponse = { data: 'test' };
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    // Act
    const result = await httpClient.post(baseUrlMock, { key: 'value' });

    // Assert
    expect(result).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(baseUrlMock, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key: 'value' }),
    });
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('should handle POST request errors', async () => {
    // Arrange
    (fetch as jest.Mock).mockResolvedValue(
      httpPostMockErrorResponse,
    );
    // Act & Assert
    await expect(httpClient.post(baseUrlMock, { key: 'value' })).//
      rejects.toThrow(httpPostMockError.message);
  });

  it('should perform a DELETE request successfully', async () => {
    // Arrange
    const mockResponse = { data: 'test' };
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });
    // Act
    const result = await httpClient.delete(baseUrlMock);
    // Assert
    expect(result).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(baseUrlMock, { method: 'DELETE' });
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('should handle DELETE request errors', async () => {
    // Arrange
    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 403,
      statusText: 'Forbidden',
    });
    // Act & Assert
    await expect(httpClient.delete(baseUrlMock)).rejects.toThrow('[DELETE] Error: 403 Forbidden');
  });

  it('should perform a PATCH request successfully', async () => {
    // Arrange
    const mockResponse = { data: 'test' };
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });
    // Act
    const result = await httpClient.patch(baseUrlMock, { key: 'value' });
    // Assert
    expect(result).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(baseUrlMock, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key: 'value' }),
    });
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('should handle PATCH request errors', async () => {
    // Arrange
    (fetch as jest.Mock).mockResolvedValue(httpPatchMockErrorResponse);
    // Act & Assert
    await expect(httpClient.patch(baseUrlMock, { key: 'value' })).rejects.toThrow(httpPatchMockError.message);
  });
});
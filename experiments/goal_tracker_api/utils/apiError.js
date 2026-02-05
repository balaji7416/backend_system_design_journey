class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.message = message;
    this.status = status || 500;
    this.success = false;
  }
}

export default ApiError;

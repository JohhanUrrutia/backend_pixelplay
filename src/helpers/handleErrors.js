export const handleErrors = (code) => {
  switch (code) {
    // HTTP 400 Client Error Status Codes
    case "password-email-not-match":
      return {
        status: 400,
        message: "Credenciales no válidas",
      };
    case "username-already-taken":
      return {
        status: 400,
        message: "Usuario ya existe",
      };
    case "product-already-rated":
      return {
        status: 400,
        message: "Producto ya fue calificado",
      };
    case "missing-credentials":
      return {
        status: 400,
        message: "Credenciales faltantes",
      };
    case "missing-fields":
      return {
        status: 400,
        message: "Todos los campos son obligatorios",
      };
    case "user-not-found":
      return {
        status: 400,
        message: "El usuario no existe, por favor registrese",
      };
    case 400:
      return {
        status: 400,
        message: "Bad Request",
      };
    case "jwt expired":
      return {
        status: 401,
        message: "jwt expired",
      };
    case 401:
      return {
        status: 401,
        message: "Unauthorized",
      };
    case 403:
      return {
        status: 403,
        message: "Forbidden",
      };
    case 404:
      return {
        status: 404,
        message: "Not Found",
      };
    case 405:
      return {
        status: 405,
        message: "Method Not Allowed",
      };
    case 406:
      return {
        status: 406,
        message: "Not Acceptable",
      };
    case 408:
      return {
        status: 408,
        message: "Request Timeout",
      };
    case 409:
      return {
        status: 409,
        message: "Conflict",
      };
    case 410:
      return {
        status: 410,
        message: "Gone",
      };
    case 413:
      return {
        status: 413,
        message: "Payload Too Large",
      };
    case 414:
      return {
        status: 414,
        message: "URI Too Long",
      };
    case 415:
      return {
        status: 415,
        message: "Unsupported Media Type",
      };
    case 417:
      return {
        status: 417,
        message: "Expectation Failed",
      };
    case 418:
      return {
        status: 418,
        message: "I'm a teapot",
      };

    // HTTP 500 Server Error Status Codes
    case 500:
      return {
        status: 500,
        message: "Internal Server Error",
      };
    case 501:
      return {
        status: 501,
        message: "Not Implemented",
      };
    case 502:
      return {
        status: 502,
        message: "Bad Gateway",
      };
    case 503:
      return {
        status: 503,
        message: "Service Unavailable",
      };
    case 504:
      return {
        status: 504,
        message: "Gateway Timeout",
      };
    case 505:
      return {
        status: 505,
        message: "HTTP Version Not Supported",
      };

    default:
      return {
        status: 500,
        message: "Error de servidor",
      };
  }
};

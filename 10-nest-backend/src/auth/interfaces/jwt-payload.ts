export interface JwtPayload {
  id: string; // ID del usuario
  iat?: number; // Fecha de creación del token
  exp?: number; // Fecha de expiración del token
}

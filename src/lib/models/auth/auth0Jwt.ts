import { JwtPayload } from "jwt-decode";

export interface Auth0Jwt extends JwtPayload {
  permissions?: string[];
  scope: string;
}

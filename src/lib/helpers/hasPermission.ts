import { jwtDecode } from "jwt-decode";

import { Auth0Jwt } from "../models/auth";

export const hasPermission = (accessToken: string, permissions: string[]) => {
  if (!accessToken) {
    return false;
  }

  const tokenPermissions = jwtDecode<Auth0Jwt>(accessToken).permissions;

  return permissions.some(permission => tokenPermissions.includes(permission));
};

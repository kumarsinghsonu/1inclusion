import { MsalAuthProvider, LoginType } from "react-aad-msal";


// const tenant = "1inclusionb2c.onmicrosoft.com";
// const signInPolicy = "B2C_1_1inclusion_signin_signup";
// const applicationID = "fb1fb573-bd18-4be6-9617-def4edd90988";
// const reactRedirectUri = "https://1inclusion-staging.azurewebsites.net/";
// const tenantSubdomain = tenant.split(".")[0];
// const instance = `https://1inclusionb2c.b2clogin.com/tfp/`;
// const signInAuthority = `${instance}${tenant}/${signInPolicy}`;

const tenant = "1inclusiondev.onmicrosoft.com";
const signInPolicy = "B2C_1_1inclusion_signup_signin";
const applicationID = "7d26986e-9267-48dd-9938-b8f6d35de366";
const reactRedirectUri = "https://1inclusion-staging.azurewebsites.net/";
const tenantSubdomain = tenant.split(".")[0];
const instance = `https://1inclusiondev.b2clogin.com/tfp/`;
const signInAuthority = `${instance}${tenant}/${signInPolicy}`;
// Msal Configurations
const signInConfig = {
  auth: {
    authority: signInAuthority,
    clientId: applicationID,
    redirectUri: reactRedirectUri,
    validateAuthority: false
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: true
  }
};
// Authentication Parameters
const authenticationParameters = {
  scopes: [
   "https://graph.microsoft.com/Directory.Read.All",
   " https://reactTest.onmicrosoft.com/api-1/user_impersonation"
  ]
};
// Options
const options = {
  loginType: LoginType.Redirect,
  tokenRefreshUri: window.location.origin + "/auth.html"
};
export const signInAuthProvider = new MsalAuthProvider(
  signInConfig,
  authenticationParameters,
  options,

);

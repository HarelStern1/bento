import type { Environment } from "./environment.types";

const environment: Environment = {
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN as string,
    redirectUri: process.env.GOOGLE_REDIRECT_URI as string,
  },
};

export default environment;

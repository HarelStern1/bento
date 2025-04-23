import { google } from "googleapis";
import environment from "@bento/libs/environment";

const { clientId, clientSecret, refreshToken, redirectUri } = environment.google;

const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);
oAuth2Client.setCredentials({ refresh_token: refreshToken });

const calendar = google.calendar({
  version: "v3",
  auth: oAuth2Client,
});

export default calendar;

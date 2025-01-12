## Overview

Application made to showcase an integration with Storyblok along with Auth0

## Getting Started

To launch application that will work with Storyblok preview you need to use

```bash
npm run:dev
```

## Environmental variables

Put those variables in `.env.local` file

| Key                            | Value                                                                                                                                                                               |
|--------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AUTH0_SECRET                   | A long secret value used to encrypt the session cookie. You can generate a suitable string using openssl rand -hex 32 on the command line.                                          |
| AUTH0_BASE_URL                 | The base URL of your application.                                                                                                                                                   |
| AUTH0_ISSUER_BASE_URL          | The URL of your Auth0 tenant domain. If you are using a Custom Domain with Auth0, set this to the value of your Custom Domain instead of the value reflected in the "Settings" tab. |
| AUTH0_CLIENT_ID                | Your Auth0 application's Client ID.                                                                                                                                                 |
| AUTH0_CLIENT_SECRET            | Your Auth0 application's Client Secret.                                                                                                                                             |
| AUTH0_AUDIENCE                 | Auth0 API audience                                                                                                                                                                  |
| STORYBLOK_CONTENT_ACCESS_TOKEN | Storyblok access token that can be used to access content                                                                                                                           |
| STORYBLOK_PREVIEW_ACCESS_TOKEN | Storyblok preview token that can be used to access draft version of content                                                                                                         |

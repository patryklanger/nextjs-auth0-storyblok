## Overview

Application made to showcase an integration with Storyblok along with Auth0

## Getting Started

To launch application that will work with Storyblok preview you need to use

```bash
npm run dev:https
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

## Storyblok

To update storyblok block's types you need to

1. First install storyblok CLI
```bash
npm i storyblok -g
``` 
2. Authenticate yourself using your personal token using
```bash
storyblok login --token <PERSONAL_ACCESS_TOKEN> --region eu 
```
3. Run 
```bash
npm run fetch-storyblok-components -- <SPACE_ID>
npm run generate-storyblok-types
```

To run the application with a Storyblok preview locally, an SSL connection is required.
```bash
npm run dev:https
```

App utilizes a `/preview` route that is used to preview storyblok content via iframe, it validates a token provided by storyblok via query params.                                                                                                     |

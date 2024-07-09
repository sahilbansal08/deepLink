# patient-study-recruitment

## How to use

Clone the repository.

Make sure you have [Node.js](https://nodejs.org/) installed.

Min node version required: v18.17.0

Min npm version required: v9.9.3

Then run:

npm install

To start the development server, run:

npm run dev

You need to open [http://localhost:3000](http://localhost:3000) url in the browser.

Add subdomain before localhost which is project name.

Example : [http://mobile.localhost:3000](http://mobile.localhost:3000).

## Setup env variables
1- Create a `.env.local` file
2- Copy variables you want to override from default `.env`
3- Change and adjust values as per needs

> [!TIP]
> `.env.local` file is not committed to the repo, and its values automatically override the ones from default `.env` 

<details>
	<summary>Env vars definition</summary>

| Env                      | Definition              |
|--------------------------|-------------------------|
|NEXT_PUBLIC_API_URL       |URL for api instance     |
||                         |
|                          |                         |
|                          |                         |
|                          |                         |
|                          |                         |
|                          |                         |
|                          |                         |
</details>

## Configure multi-tenant on dev environment

### Setup multi-tenant subdomains

- For OS X edit hosts file to add custom subdomains `sudo nano /etc/hosts`
- Add subomainds such as `127.0.0.1 project1.localhost` (subomainds should exist on the api side)
- Then you can test each by accessing `project1.localhost:PORT` (default PORT is 3000)

## Cypress

To run Cypress tests run the following :

- `npm install`
- Run NextJs instance : (preferably a PROD instance to run e2e test faster)
- - `npm run build`
- - `npm run start`
- Run a dev instance if you're writing tests and need to make changes to NextJs, else you will have to run a new build on each change
- - `npm run dev`
- Configure baseUrl to be used by cypress in `.env CYPRESS_BASE_URL` (defaults to `http://localhost:3000`)
- `npm run cypress`
- to run a headless test (for CI and/or automation) `npm run cypress:headless`

## Generating TypeScript Types from OpenAPI Schemas

### Installation

Install the `openapi-typescript` package:

- `npm install -g openapi-typescript`

### Usage

Run the following command to generate types from the NOVA schema returned by the API:

- `npm run gen-api-types`

Once the types are generated, you can import them in your code:

- `import { components } from "schema";`


#******************* TO USE in the .env.local ***************
# Common data
NEXT_PUBLIC_USE_INMEMORY = false
REVALIDATE_TOKEN="8Igl+sFSGhBC+taYsE[L8S0ZEVX)#!]gWaH.BW=r1+?*Y(lZMG7Zj(B4SP|R.{GU"
NEXT_PUBLIC_DASHBOARD_REVALIDATE_TOKEN="8Igl+sFSGhBC+taYsE[L8S0ZEVX)#!]gWaH.BW=r1+?*Y(lZMG7Zj(B4SP|R.{GU"
SKIP_BUILD_STATIC_GENERATION=false
DEPLOYMENT_DOMAIN=

# Local BE
NEXT_PUBLIC_API_URL=http://127.0.0.1:5001/api
NEXT_PUBLIC_MEDIA_DOMAIN=http://127.0.0.1:5001
NEXT_PUBLIC_MEDIA_URL=http://127.0.0.1:5001
CYPRESS_BASE_URL=http://wftest.localhost:3001
CYPRESS_IP_PORT=localhost:3001
NOVA_API_KEY="KUYQwyvGPvAuzPLE4f8Iztv4qkcOqejapdvtmxE8oRZvVhlmJRD5phslmzGEfmGx"

# QA env BE
NEXT_PUBLIC_API_URL=https://qa-api.nova.bepatient.com/api
NEXT_PUBLIC_MEDIA_DOMAIN=https://qa-api.nova.bepatient.com
NEXT_PUBLIC_MEDIA_URL=https://qa-api.nova.bepatient.com
CYPRESS_BASE_URL=http://qacapture.localhost:3001
CYPRESS_IP_PORT=localhost:3001
NOVA_API_KEY="5cWBsiKQaPsU5rHcEFS1EhVO0GGr/y"




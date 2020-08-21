# Strapi Starter Nuxt.js E-commerce

Nuxt.js starter for creating a simple e-commerce website with Strapi.

This starter allows you to try Strapi with Nuxt.js with the example of a simple e-commerce website where you can buy dev stickers. It is fully customizable and due to the fact that it is open source, fully open to contributions. Do not hesitate to add new features etc ...

This starter is using [Snipcart](https://snipcart.com/) which allows you setup a shopping cart on any website.

![screenshot image](/screenshot.png)

### Deploy the backend

To deploy the Strapi instance you'll need:

- [An Heroku account](https://signup.heroku.com/) for free
- [A Cloudinary account for saving images](https://cloudinary.com/users/register/free) for free

Once you have created these accounts you can deploy your instance by clicking on this button

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/strapi/strapi-starter-nuxt-e-commerce)

### Deploy the frontend

**On Vercel**

To deploy the Nuxt.js blog you'll need:

  - [A Vercel account](https://vercel.com/dashboard) for free
  - Wait for your heroku instance to be up and running before deploying your Nuxt.js server
  - Vercel will ask you the root directory of the project to deploy which is **frontend**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2Fstrapi%2Fstrapi-starter-nuxt-e-commerce&env=API_URL&envDescription=Enter%20the%20url%20of%20your%20Strapi%20API%20without%20the%20trailing%20slash&project-name=my-strapi-starter-nuxt-e-commerce)  

  - Select the repository you want to deploy, here it's the `strapi-starter-nuxt-e-commerce`
  - Select the root directory of your frontend
  - Override the Build commande to `yarn generate`

![Root directory](/medias/vercel-deploy-step-1.png)

  - Paste the url of your running Strapi instance on Heroku without the trailing slash

![Root directory](/medias/vercel-deploy-step-2.png)  

  - Once your website has been deployed, create a `STORE_URL` env variable in your dashboard containing the url of your deployed frontend


### Automatic build on Vercel

We're using Nuxt.js which is a static site generator (SSG). This means we need to trigger new builds when the content changes in Strapi. We'll use webhooks to do this automatically.

We first need to create a Deploy Hook in Vercel. In your project's settings, go to the end of the Git Integration tab. Name your hook however you want, but make sure you link it to your master branch.

![Webhooks vercel](/medias/vercel-deploy-hook.png)

Then copy the generated URL and open your Strapi admin in production. In the settings tab, open Webhooks and paste the hook URL. Make sure you check all events to trigger build after every change.

Now everytime we make a change in Strapi, Vercel creates a new build!

### Features in Strapi

- 1 Component
- 2 Collection types: Product, Category
- 27 Created products
- 6 Created categories
- Permissions set to `true` for product and category
- Responsive design using Tailwind css
- Slug system
- Publication system (draft & published)
- Role based access controls

### Features in Nuxt.js

- [@nuxt/strapi](https://strapi.nuxtjs.org/) module

### Payment service

This starter is using [Snipcart](https://snipcart.com/) which allows you setup a shopping cart on any website.
They wrote a [tutorial](https://snipcart.com/blog/strapi-nuxt-ecommerce-tutorial) teaching you how to create this website but selling cupcakes!

Payment will not work on localhost, we are redirecting you to this [tutorial](https://snipcart.com/blog/develop-a-snipcart-powered-website-locally-using-ngrok) if you want to test payment locally.

### Getting started

Clone the repository

```
git clone https://github.com/strapi/strapi-starter-nuxt-e-commerce.git
cd strapi-starter-nuxt-e-commerce
```

**Backend**

Install dependencies and run your server

```bash
# Using yarn
yarn install
yarn develop

# Using npm
npm install
npm run develop
```

**Frontend**

```bash
# Using yarn
yarn install
yarn develop

# Using npm
npm install
npm run develop
```

Nuxt.js server is running here => [http://localhost:3000](http://localhost:3000)

Enjoy this starter

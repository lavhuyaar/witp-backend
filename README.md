# Express TS Template

This is a beginner-friendly, already set up ExpressJS (v5) template with TypeScript, CORS, a formatted folder structure, and scripts.

The scripts configured make both development and production easy.

I've also added an `errorHandler` middleware, which prevents the server from crashing when there occurs some error.
(There is no need for `asyncHandler` or some similar error-handling middleware as Express (in v5) does it on it's own).

---

## Steps to use the template:

**Step 1:** Fork this repository (duh) and use this template in any of your personal projects while creating it.

**Step 2:** Install all the packages by running:

`$ npm install`

**Step 3 (Optional but preferred):** Create a `.env` file in your root folder and add the specific environmental variables.

**Step 4:** You're good to go! Yup, it was this simple hehe.

---

## Scripts

- During development, run `$ npm run dev`.
- During production, run `$ npm run build && npm start`.

---

## The following packages are pre-installed:

- TypeScript
- ExpressJS
- JSON Web Token
- BcrpytJS
- Express-validator
- Nodemon
- Prettier
- ESLint
- CORS
- Dotenv

---

Do star the repo if you liked this template, and let me know if there is any way this template can be improved.

I've deliberately not installed any database; that's for the user to decide.

Of course there is no need to give me any credits. Use it as you please :)

# Where Is That Pokemon - Backend

This is the backend repository of my project - Where Is That Pokemon?, which is a game to find the list of five Pokemons in an image as quickly as possible. The game is similar to the famous "Where's Waldo?" game.

---

## Tools used :

- Express (deployed on Render)
- Typescript
- PostgreSQL (deployed on Neon Console)
- Prisma ORM
- Jest
- Supertest

---

### To run this project locally :

**Step 1:** Fork this repository, clone it, and open the repository in your local device

**Step 2:** Install all packages by running `npm install` or `npm i`

**Step 3:** Create an `.env` file in the root of the repository and add the following variables :

`DATABASE_URL=your_database_connection string`
`PORT=4040`
`NODE_ENV=development`

**Step 4:** Make sure that the Prisma models are generated and migrated by running `npx prisma migrate dev`, give a name to your migration, and run `npx prisma generate`

**Step 5**: Seed the Pokemon data by running `npm run seed`

**Step 6**: Assuming that you've forked the [frontend repository](https://github.com/lavhuyaar/where-is-that-pokemon) of this project, add `http://localhost:5173` in the `allowedLists` array in `app.ts`

**Step 7:** Start the project by running `npm run dev`

_**Note**: You can also test the controllers by running `npm run test` or `npm test`_

And you'll be running the project!

---

I liked this project, not very complicated, but did learn stuff like testing, (I used to think testing is of no use until I wrote tests for this project, they were super helpful).

The deployment part was messy as I'm using Typescript. I think I have to use Docker in some way to ensure that only transpiled files are deployed. I liked the seeding part, did for the first time XD

Overall good work Lav, before starting this project it seemed like hard but it was easy lol. (16-06-2025)

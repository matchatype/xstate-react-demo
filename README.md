# @Xstate/react 1.0.0 bug

This repo reproduces a bug introduced with `@xstate/react` 1.0.0

## Quick start

1. Clone this repo.
2. Make a copy of the file `.env.example` and rename it to `.env`  
3. Head over to [Firebase console](https://console.firebase.google.com) and create a new project.
4. From the Project Overview general settings, add a new Firebase app.
5. Head over `Authentication` sign-in methods and enable email/password method.
6. Create a new user and write down email and password for later use.    
5. Uncomment all lines in your `.env` file and fill in the keys with your Firebase app config values for `apiKey`, `authDomain` and `projectId`.
6. On a terminal window, from the project root directory, install dependencies by running `yarn install`. You can use `npm install` too if you like. Then run `yarn dev` or `npm run dev`.
7. Open your browser and visit `http://localhost:3000`

## Usage

You'll see a bare-bones although functional login form. Use the credential for the user created previously. You'll be able to sign in and sign out. Firebase user object is saved in the `auth` machine's `context.user` property.

## Reproducing the bug

1. In the terminal run `yarn add -E @xstate/react@1.0.0`.
2. Open the file `./contexts/auth-context.tsx`.
3. Replace line 19, `const [state, send] = useService(actor)`, with `const [state, send] = useActor(actor)`.
4. Fix the import statement on line 1, to reflect the change.
5. Try to log in again in your browser and see it fail.
6. No error message will be logged.

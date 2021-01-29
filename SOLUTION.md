Solution Documentation
===========================
I have opted to implement this as described here since I got only a limited amount of time to complete this with barely 2-3 hours each day for 4 days (on the 5th day today, had to finish this write up earlier due to timezone difference). ;)
Besides, I must admit i have to refresh myself on NodeJs and Typescript. Been more than a year i havent touched any nodejs project, and more than 2 years not on Typescript. This was after i started rewriting an Ionic app to ReactNative which by then TS support was not yet first class on React/RN. And this week indeed was fun working back again on NodeJs and ReactJs in Typescript.

### How to run the system
1. Checkout the `develop` branch.
2. Duplicate the corresponding `.env.example` config file as `.env` in both `ui` and `server` folders.
3. Proceed with firing up the project: `docker-compose up -d`

### Analysis and Strategy
1. Navigation (with router)? or just state changes (with context)?
2. Identify components using atomic design system.
3. Run docker container to get initial mapping (in my head) from the UI fields against the database/data structure.
4. Leads refer to Jobs. (Leads in higher-level abstraction, jobs in lower-level).
5. Start with dummy while testing UI.
6. Proceed with api then.

### Frontend UI
- I have opted to start working from the `react` branch as this is more updated and already in Typescript. This is to make sure it is consistent with the **server** setup which is also in Typescript.

- Since the use case is tagging/labeling a job (from the backend) as a **lead**, i have to keep in consistent and call it as **lead** in that UI context. And even endpoints must be consistent, so `/leads`. However, behind it, in the backend/server side, which is abstracted, it will refer to it to the `jobs` table.

- Tech stacks / concepts:
  - `context` - this is better than adding extra packages with `redux`. And suits well with the current requirement. I have event started rewriting my RN project in redux to context (and hooks).
  - `atomic design` - i am not really sticking to everything in that concept from atomic design, but only chose to do `atoms`, `molecules` and `organisms`. Coz i think going further with `templates` is no longer necessary on this UI design. And i think will just add more layer and complexities. 
  - `styled-components` - would avoid adding extra bloat from css frameworks. And even with css frameworks, you would have to add customizations to fit it to your design. 
  - `daysjs` - lightweight date utility
  - `apisauce` - a wrapper to axios with standard errors. Since my background is mostly in ReactNative, those errors like *timeout*, *connection issues* or *network errors* come really handy.

- **Nice to have (if given more time)**
  - Some i have annotated them in the code as `@TODO`
  - Loader animations while sending request to api
  - Prompts for whatever result (success or error) from those requests
  - e2e tests

### Server
- Initially thought of doing this in Laravel 7/8. But I think it would more consistent with your setup (based on this boilerplate) to do it on NodeJs thinking it would be benefit me as well as a refresher. It was fun indeed. :)

- Had to start from one big file (`index.ts`) while playing around with it. Then move to own directory and separate files as I progress thru the implementations.

- Endpoints were rooted as `/leads` to be consistent with UI context though the lower level implementations (which UI context doesn't care) are accessing the `Job` entity.

- Tech stacks / concepts:
  - `typeorm` - It has first class support for Typescript. In previous experience, we were using `sequelize` though. But i think `typeorm` offer more options like choosing between Active Record or Data Mapper pattern. I have been exploring lately about `elixir-lang` and their recommended/support persistence framework applies the Data Mapper pattern. This familiarity as well makes me chose typeorm.

- **Nice to have (if given more time)**
  - Move logic inside routes to controllers
  - Authentication and permissions on endpoints
  - e2e tests

**Thank you!**
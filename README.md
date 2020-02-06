# Khatm API

## Environment

- Node 12.14.1, Npm 6.4.1 [source](https://medium.com/@katopz/how-to-install-specific-nodejs-version-c6e1cec8aa11)
  - Used to match AWS Elastic Beanstalk max version as of 5/19/2019
  - (Recommended) Using Node Version Manager
     - Install [NVM](https://github.com/nvm-sh/nvm) with `brew install nvm`. Follow the post-install directions to update your `~/.bash_profile`.
     - Install Node Version 12.14.1 with `nvm install 12.14.1`
     - Installing [avn](https://www.npmjs.com/package/avn)
       - Now when you open a new terminal window, it will respect the .nvmrc
  - Specific Node version in your system
     - `brew install node@10`
     - `brew link node@10`
     - Follow brew instruction, like having to `--force` and `--overwrite`
- Postgres Database
  - `brew install postgres`
  - `brew services start postgresql`
  - `npm dev-db-setup`

## Development

After you've followed all the steps in `Environment` section above, install node modules by running `npm install`. These are all the libraries that the server needs to run.

Then setup your local databse by running `npm run dev-db-setup`. Once that runs successfully, you are ready to `npm start` your local server instance! Normally the baseURL will be `http://localhost:3000` unless you play with the `./server/mainfest.js` file's `host` and `port` keys.

Make sure that you can also run `npm test` successfully. A full successful run of these tests is required before any pull request for changes are accepted. Use `npm test -- -i [test id]` to run a specific test (or ranges use `-i 1-3,5`). Use `npm run test-list` to get a list of all the tests in the systerm.

## API Documentation

- `./docs/openapi.yaml` using [OpenAPI 3.0](https://swagger.io/blog/news/announcing-openapi-3-0/).
- `./docs/Khatm-API.postman_collection.json` Postman collection 2.1 of example API calls
- `./docs/*.postman_environment.json` Postman environments

Once you've been able to run the server locally following instructions in `Development`, you can use [Postman](https://www.getpostman.com/) to test the API.

After installing Postman, [import the api collection](https://learning.getpostman.com/docs/postman/collections/sharing_collections/) and the [environment](https://learning.getpostman.com/docs/postman/environments_and_globals/manage_environments#sharing-an-environment). Look in the `./docs/` directory for the exports.

### Editing OpenAPI

It is encouraged to maintain the API docs with changes to not just the API, but data model properties, relationships, and as much architectural design detail as possible. Thoroughness in the documentation will mean people (including ourselves) can set aside this project and come back to it later without having to retain all the information in our brains.

At the moment of writing, OpenAPI 3.0 doesn't have many intuitive tooling around generating static documentation with all the bells and whistles I want. There's quite a lot for Swagger 2.0, [ReDoc](https://github.com/Redocly/redoc) is the closest to producing something through a quick easy CLI, but it doesn't display the models, opened [Issue (7/26/2019)](https://github.com/khatm-org/khatm-api/issues/12).

In the meantime, here are the methods of viewing/editing the documentation:
1. (Recommended) Install the [Swagger Viewer](https://marketplace.visualstudio.com/items?itemName=Arjun.swagger-viewer) on VSCode
1. [Swagger Online Editor](http://editor.swagger.io/)
1. Run Swagger editor locally using docker:
     - `docker pull swaggerapi/swagger-editor`
     - `docker run -d -p 80:8080 swaggerapi/swagger-editor`
     - `open http://localhost/`

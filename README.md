# AnonymousChatAPI

## Installing on your local machine
1. If you don't already have Node.js installed on your machine, go to https://nodejs.org/, download the LTS version, and install.
2. If you don't already have Git installed on your machine, go to https://git-scm.com/book/en/v2/Getting-Started-Installing-Git and follow the instructions to install.
3. Log into your Github account and make sure that you have an SSH key added to your account. If you do not or if you do not know, follow the instructions here to add one: https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account
4. Open a terminal and navigate to the folder where you want to store your development environment.
5. Run `git clone git@github.com:mgreenwood11/AnonymousChatAPI.git` to clone the repository.
6. Run `cd AnonymousChatAPI` to move into the local copy of the repository.
7. Run `npm install` to install all of the project dependencies.

## Running the API on your local machine
Run `npm start` from inside the AnonymousChatAPI folder to start the server

## Testing an endpoint locally
### Test GET requests using a browser
With the server running locally, you can test GET requests by using your browser.
1. Make sure your server is currently running in an open terminal window.
2. Open a web browser and go to `localhost:4000`. You should see a response in the web browser window.
3. Look through the acaRoutes.js file to see the format of all GET requests that you can test in this way.

### Test all request types using Postman
With the server running locally, you can test any of the supported request types using Postman.
1. If you don't already have Postman installed on your machine, go to https://www.postman.com/ and follow the instructions to install.
2. Use Postman to set the request type and enter a url that corresponds to a route and request type found in acaRoutes.js.
3. Send the request and you should see one of the hardcoded responses provided by the API.

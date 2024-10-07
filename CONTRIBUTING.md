# Contributing to Algorithm-Finder
Thank you for considering contributing to Algorithm-Finder! This is a small project, but every contribution helps make it better 🎀

## How to Contribute
If you'd like to work on an open issue, please:
Comment on the issue to let us know you're taking it on.
Provide detailed explanations for the approach you're taking.
If you're unsure about something, ask questions within the issue thread. Collaboration is encouraged!


### How to install it
1. Do `npm install` within the root project.
2. Create your own OAuth by going to [Google Cloud Console](https://console.cloud.google.com/apis/), then click on **Credentials** and create a new one:
   - Set **Application type** to Web Application.
   - In both URI fields, enter `http://localhost:3000` (if you are running locally on port 3000).
   - After finishing, you’ll get your `Client ID`. Copy it.
3. Create a `.env` file in the root directory of the project with the following variables:
   `REACT_APP_GOOGLE_CLIENT_ID=<your-google-oauth-client-id>`, `HOST=localhost`, and `MONGODB_URI=<your-mongodb-connection-string>`. Replace `<your-google-oauth-client-id>` with the `Client ID` you copied earlier. For the `MONGODB_URI`, use the connection string from [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database) (it's free 🚀). If you're running MongoDB locally, use something like `MONGODB_URI=mongodb://localhost:27017/visitorCountDB`. Moreover, you need to specify where your localhost is running (e.g., `LOCAL_HOST_URI='http://localhost:3001'`)
   **This .env ensures private information is stored securely.**
4. To run the application, execute `npm start` within the `algorithm-finder/src` directory. To run the MongoDB server, do `node visitors-utility.js` within algorithm-finder/src.



## Submitting Pull Requests (PRs)
When you're ready to submit a fix or feature:
Fork the repository and create your branch from `main`.
Include a clear description of the changes in your pull request.
Reference the issue number you're addressing.

## Rewards!
As a token of appreciation, contributors whose pull requests get merged will receive a pretty t-shirt 🎉! 

I am excited to see your contributions and look forward to collaborating!

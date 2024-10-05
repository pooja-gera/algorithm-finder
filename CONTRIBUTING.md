# Contributing to Algorithm-Finder
Thank you for considering contributing to Algorithm-Finder! This is a small project, but every contribution helps make it better 🎀

## How to Contribute
If you'd like to work on an open issue, please:
Comment on the issue to let us know you're taking it on.
Provide detailed explanations for the approach you're taking.
If you're unsure about something, ask questions within the issue thread. Collaboration is encouraged!


### How to install it
1. Do `npm install` within the root project.
2. Create your own OAuth, go to https://console.cloud.google.com/apis/, then click on Credential and create a new one.
   Put the type Web Application and in both the URI's put http://localhost:3000. After finishing this process, they give you
   your clientID, copy it.
3. Create a .env file withing the root project, 
   put your OAuth clientID within the variable `REACT_APP_GOOGLE_CLIENT_ID`. This is done to protect this private 
   information from the public repository. Put the variable HOST = localhost, as well. 
4. To run it, do `npm start` within root/src.


## Submitting Pull Requests (PRs)
When you're ready to submit a fix or feature:
Fork the repository and create your branch from `main`.
Include a clear description of the changes in your pull request.
Reference the issue number you're addressing.

## Rewards!
As a token of appreciation, contributors whose pull requests get merged will receive a pretty t-shirt 🎉! 

I am excited to see your contributions and look forward to collaborating!

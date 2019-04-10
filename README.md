# TeamLoadManagement
Quite often team members are not loaded full-time and they execute multiple tasks at once.
I would love to see some tool which helps tracking current load and current availability of team members in one single place
with simple visualization to make the decision about further multiple assignments which are coming
(e.g. if I see that the person is formally loaded 50% of their time, but still has 2 tasks in parallel,
I would see it risky to give another task; or I would love to see who is really (not formally) available with Java skills).
Also such a tool could give some level of prediction on the load and on the number of people
required extra to cover that or another type of activities.

## Development Environment
- Sql Server Express 2017 & Sql Server Management Studio 2017
- Runs in both Visual Studio 2017 & Visual Studio Code
- Node 8.9.4 & NPM 5.6.0
- .NET Core 2.0 sdk
- Angular CLI -> `npm install -g @angular/cli` https://github.com/angular/angular-cli
 

## Setup
To build and run the project using the command line:
1. Install npm packages with `src>npm install` in the `src` directory.
2. Restore nuget packages with `src>dotnet restore` in the `src` directory.
3. Create the database with `src>dotnet ef database update` in the `src` directory.
4. Run the project with `src>dotnet run` in the `src` directory.
5. Point your browser to **http://localhost:5000**.

Of course, you can also run it from either Visual Studio 2017 or Visual Studio Code with the IDE handling most of the steps above.  If you have issues, try running the above steps from the command line to ensure things are setup properly.

## Facebook App Setup
To setup and use your own application <a href="https://fullstackmark.com/post/13/jwt-authentication-with-aspnet-core-2-web-api-angular-5-net-core-identity-and-facebook-login#creating-a-facebook-application">follow the steps detailed on the post</a>.

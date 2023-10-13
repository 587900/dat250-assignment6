# DAT250: Assignment 6
By 587900 (Kjetil Berg)

### Description
The instructions of https://github.com/selabhvl/dat250public/blob/master/expassignments/expass6.md were followed gain to create an Angular web app that interacted with a previous project: Todos with Spring Boot.
Everything went according to the instructions besides what is mentioned under the 'Trials and tribulations' section (problems and noteworthy moments).

### Tools
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.6.

### Running
To run the Angular app, do `npm install` and then `npm start`. It should start on port 4200. The app will try and use the server defined inside src/app/constants (defaults to `http://localhost:8080`).
Make sure the Spring Boot project containing the Todo server is running.
**NOTE: You must enable CORS for it by using a @CrossOrigin annotation over the @RestController for it**.

### Status
I did part 1 (the Angular app), but not part 2 (The Angular materials).

### Trials and tribulations
1. I was surprised to find almost no documentation of how to actually use the components I made. It took a while, but eventually I found out that every component defines a 'selector' that is to be used inside a html (the component must also be 'declared')
2. I created an Angular service to interact with the server.
3. The server caused CORS trouble. I had to manually add a '@CrossOrigin' annotation above the '@RestController' inside the Todo-class (Spring Boot server).
4. When I tried using 'await/async' in the service interacting with the server, typescript refused to recognize what a 'Promise' was. Imported typescript libraries were 'dom' and 'ES2022'. I am convinced that both of these should have Promises, yet for some reason it refused to work. I added 'es6' as an additional library, and that worked.  
4.1 After adding es6, `fetch` returned Promise<Response>, as expected. However, the 'Response' type had absolutely zero fields on it. Not sure why. I don't think `fetch` is defined in es6. I worked around it by casting the type to ´any´.
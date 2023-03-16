# RxjsJwtExample

1. rename   /src/environments/environment.dev.example.ts into  /src/environments/environment.dev.ts
2. put api url in  /src/environments/environment.dev.ts
3. npm i
4. npm start

# Description
0. no design
1. well structired code
2. ngrx store
2.1. effects are extremely powerful but I'm trying to keep it clean from redirects or somehing else and do inside only things that are store-relevant.
2.2. for business-logic I use separate services like UserService or ApiService, even though all it's functionality can be put in effects.
3. variety of async techiques: observables, asyncs 
4. token is stored in localstorage so page reload (F5) will try to authrise the user automatically 
4.1. if user has expired token they will be redirected to the login page
5. login form contains UX best practises: it gently focus user on empty fields rather than shouting with error messages or disabling submit button
5.1. login form can hangle more than one error
6. other Angular fancy staff like ReactiveForms, Interceptors and Guards
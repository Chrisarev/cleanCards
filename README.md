#CleanCards
by Chrisarev

Description
--------------
CleanCards is a full-stack flashcard web application in which users can create different decks with multiple flashcards to study.
The flashcards can include images and are visually customizable by selecting a theme on deck creation. All svgs and animations created by Chrisarev. 

Technology
--------------
Front-end created using React.
Back-end created with Express.
Database utilized is MongoDB. 
User authentication done with passport.js.

Running/Deploying
--------------
All unoptimized react files are in client folder. Production ready, built version of these files are in cleancards/public folder. To run this project locally you can 'nodemon app.js' in root folder to start the express backend, then go to /client/src and 'npm run start' to start the react front-end. Client folder is unnecessary for production environment and should be deleted before deployment of this application. 

License
--------------
Copyright (c) 2023 Christian Lizasuain

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
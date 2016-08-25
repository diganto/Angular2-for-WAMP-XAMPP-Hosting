# Angular2-for-WAMP-XAMPP-Hosting
This is an Angular 2 RC5 project ready to run on any server including localhost. 

The TypeScript files are stored in app directory and the compiled JS files are linked to /js_bin as output directory of
TS compiler. Before uploading/running in server just use the command line: "npm start" to compile and execute the program.

The project runs live in local ip and an external ip which can be accessed from mobile devices to run the same application seamlessly.

After compiling the project simply upload all the contents to the server.

The index.html links the JS files to the /js_bin as defined in system.config.js.Hence there is no need to install node.js into the server machine (during developement node.js is mandatory). 

This approach is for developers who don't want the lite-server as default and want WAMP,XAMPP or any APACHE machine to serve the pages without using angular-cli or other interfaces to compile and run it on lite-server.

#Requirements(During developement on Localhost):
1.NPM: A javascript package manager
2.NODE.JS

-Diganta Datta

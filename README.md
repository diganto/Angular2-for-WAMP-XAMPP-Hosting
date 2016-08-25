# Angular2-for-WAMP-XAMPP-Hosting
This is an Angular 2 RC5 project ready to run on any server including localhost. 

The TypeScript files are stored in app directory and the compiled JS files are linked to /js_bin as and output directory of
TS compiler. Before uploading/running in server just use the command line: npm run tsc to start the compilation.

After compiling the project simply upload all the contents to the server.

The index.html links the JS files to the /js_bin as defined in system.config.js.Hence there is no need to install node.js into the server machine. 

This approach is for developers who don't want the lite-server as default and want WAMP,XAMPP or any APACHE machine to server the pages
without using angular-cli or other interfaces to compile and serve the pages.

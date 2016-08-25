import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>Tritan Technologies </h1>
  <h3>
  <li>TypeScript is now compiled to JS and stored in <b>/js_bin</b></li>
  <br><li>So for UI coding(TypeScript) the <b>/app</b> folder will only matter</li>
  <br><li>However for any JS config changes(change of default directory locations or mappings) look into <b>systemjs.config.js</b></li>
  <br><li>And for TS compiler adjustments change <b>tsconfig.json</b></li>
  <br><br><li>Use sudo npm start to start compilation and execution at localhost:3000 </li></h3>
  <my-demo></my-demo>
  <h2>-Diganto Datta</h2>`
})
export class AppComponent { }
/*Created by Diganta -Tritan Technologies*/
/*Component is an metadata directive
The component acts as an core header file for the entire framework
*/
/*So for UI coding the /app folder will only matter</br> However for any JS config changes look into systemjs.config.js</br>And for TS compiler adjustments change tsconfig.json'*/

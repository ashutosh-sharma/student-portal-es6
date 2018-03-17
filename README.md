# student-portal-es6

### 1.Create css(style.css), js(main.js) and index.html and 'dist'(a directory where babel will compile the es6 to javascript file)
### 2.Add babel as a transpiler for converting es6 to javascript.
      - npm init *add all intial info for the project*
      - npm install babel-cli babel-core --save-dev *to install Babel CLI locally in the project*
      - npm install babel-preset-es2015 --save-dev 
### 3. Add build command to scripts in pakage.json 
      - "build": "babel js -d dist"
      This will set the project so that babel can convert any code written in es6(in directory **js**) to javascript code(to folder **dist**)
### 4.Create .babelrc and add contents as: { "presets": ["es2015"] } to specify the version of es6
      - This will set *preset* plugin of babel to es2015
      
### Now, you can check of your babel is working or not. Add some es6 code in js/main.js and run *npm run build* in your project's root directory. You will find the vanilla javascript file in your 'dist' directory which is compiler by babel.

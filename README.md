# Starter
Basic font-end starter file for all projects



## Bower
Run `npm install`
Run `bower install`
Create Public Folder
Move over Bower Components

If NOT using homebrew:

Download Node.js.
Install Grunt's command line interface (CLI). Open up Terminal and run: npm install -g grunt-cli
If you get a permissions error, try sudo npm install -g grunt-cli
Make sure 'package.json' and 'Gruntfile.js' are in your project directory
If not installed, in terminal, navigate to the project directory and run
 npm install
Run Grunt to watch for JS and CSS changes to LiveReload.
In terminal, navigate to the repo directory:
cd Sites/start
In terminal, run grunt to watch your project
LiveReload is included in the project plugins folder. When the site is ready to be built for production, simply run the grunt production command instead of the default grunt task.
Dependencies

If your project is not using Sass/Compass, you will need to add the Grunt CSS Condense and CSS Minify Plugins to your package.json file to run those tasks.

Contributing

Our process largely follows the Github Flow pattern. The only divergence is our specificity for database exports, which Github flow leaves somewhat undefined.

Work on master for hotfixes and non-breaking updates. This includes things like tweaking CSS and adjusting field templates. If you're adding an entire template, though, branch off so as not to affect other developers on the project.
If you work on a feature branch name it accordingly, but don't worry about extra specificity. Simply homepage-updates is fine, please don't nest branch names with /.
You may choose to work on a feature branch on this repository or a fork of the repository under your own user.

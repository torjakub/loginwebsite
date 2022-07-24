# Development

## Pre-requirements

Please check if you have installed it locally:

* node version 16
* npm version 8
* php version 7.4
* composer

## First run

At the very beginning, you should prepare your theme for further development. Install all dependencies and build main libraries for the website

1. Copy `.env.sample` to `.env` (<b>do not change the file name</b>, just create a new `.env` file with the same content
   which is in the `.env.sample` file)
2. Configure variables in `.env` file according to your local WordPress settings
3. Run `npm install`

## Development: BrowserSync + Livereload + watchers

To start development, just type in the command line `npm start`
It will run SCSS and JS code compilators and linters.

## Checking PHP code quality

Install all PHP dependencies by typing in terminal `composer install` in this plugin directory

To lint your PHP code, type in the console (in this directory) `composer run-script lint`

To autofix your PHP code, type in the console (in this directory) `composer run-script lint:fix`

You can also configure your IDE with this documentation:
* https://www.jetbrains.com/help/phpstorm/using-php-cs-fixer.html#installing-configuring-php-cs-fixer

## Building bundle

Deploying all source files is not the best practice. For that reason, you can build a zip package with your theme

1. Run `npm install`
2. Run `npm run bundle`

It will take only the required files and compress them into a zip file that can be easily installed on the website via
the admin panel.

## Building styles and scripts

Compiled assets are not included in the repository, so the website won't be displayed properly at the beginning

1. Run `npm install`
2. Run `npm run build`

# Configure PhpStorm
First of all, check do you have the latest version of PhpStorm.

Go to PhpStorm Preferences (Settings in windows)

PHP -> PHP language level -> select PHP 7.4
PHP -> CLI Interpreter -> select interpreter that you use

PHP -> Composer -> Indicate path to composer.json in your theme directory
PHP -> Composer -> select "Synchronize IDE settings with composer.json"
PHP -> Composer -> select composer executable path (`/usr/local/bin/composer` on mac)


PHP -> quality tools -> PHP_CodeSniffer
Click 3 donts next to configuration, Browse patth, select localization in theme_folder/vendor/bin/phpcs and validate it
Expand PHP Code Beautifier and Fixer Settings and select path to the theme_folder/vendor/bin/phpcsbf
Click PHP_CodeSniffer inspection -> PHP_CodeSniffer validation -> Coding standard: Custom indicate .phpcs.xml file in the theme directory + uncheck `installed standard path` + change files extensions to `php` only

PHP -> Frameworks -> WordPress -> Enable WordPress integration + indicate the WordPress root folder of the current project

Plugins -> if you know you will not use something, you can uncheck it. It may simplify management, linting, code completing, and speed of PHP storm (Drupal, Laravel, Tailwind, Docker, etc.)

Languages & Frameworks -> enable + stylelint package select theme/node_modules/stylelint + configuration file theme/.stylelintrc
Run for files: {**/*,*}.{css,scss}

Editor -> Code style -> PHP - import scheme from the theme folder phpstorm-php.xml
Editor -> Code style -> HTML - import scheme from the theme folder phpstorm-html.xml

Preferences | Languages & Frameworks | JavaScript | Code Quality Tools | ESLint -> Select automatic ESLint configuration + Run eslint --fix on save
Editor -> Live template -> disable things that you don't need.

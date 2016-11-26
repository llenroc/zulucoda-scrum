import angular from 'angular';
import routing from './app.config';
import uiRouter from 'angular-ui-router';

import walls from './../features/walls'

import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.css';
import '../style/lib/right.dark.css';
import 'font-awesome-webpack';

const MODULE_NAME = 'zulucoda.scrum';

angular.module(MODULE_NAME, [uiRouter, walls])
  .config(routing);

export default MODULE_NAME;
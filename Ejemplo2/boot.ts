import {bootstrap} from 'angular2/platform/broser';
import {AppComponent} from './app.component';

bootstrap (AppComponent)
.then (success => console.log('Bootstrap successfully!'))
.catch(err => console.log(err));
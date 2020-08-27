import Turbolinks from 'turbolinks';
import { Application } from 'stimulus';
import { listen } from 'quicklink';
import HelloController from './controllers/hello_controller.js';

Turbolinks.start();

// Quicklink needs to be initialized on each page load.
document.addEventListener('turbolinks:load', () => {
  listen();
});

const app = Application.start();
app.register('hello', HelloController);

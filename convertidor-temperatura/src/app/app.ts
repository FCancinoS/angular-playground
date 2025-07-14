import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Conversor } from './conversor/conversor';
@Component({
  selector: 'app-root',
  imports: [Conversor, RouterOutlet],
  styleUrl: './app.css',
  template: `

  <app-conversor></app-conversor>
  `
})
export class App {
  protected readonly title = signal('convertidor-temperatura');
}

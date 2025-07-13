import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoProductosComponent } from './listado.productos/listado.productos';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListadoProductosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Tienda Online');
  titulo = 'Tienda Online';
}

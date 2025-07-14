import { Component } from '@angular/core';
import { ProductoComponent } from '../producto/producto';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-listado-productos',
  imports: [ProductoComponent, FormsModule],
  templateUrl: './listado.productos.html',
  styleUrl: './listado.productos.css'
})
export class ListadoProductosComponent {
  productos: Producto[] = [

  new Producto('Pantalon', 130.00),
    new Producto('Camisa', 80.00),
    new Producto('Playera', 150.00)
  
  ];
  descripcionInput: string = '';
  precioInput: number | null = null;
  agregarProducto() {
    if (this.descripcionInput.trim() === ''  || this.precioInput ==null || this.precioInput <=0) {
      alert('Por favor, ingrese una descripción y un precio válido.');
      return;
    }
    const producto = new Producto(this.descripcionInput, this.precioInput);
    this.productos.push(producto);
    this.descripcionInput = '';
    this.precioInput = null;
  }
}

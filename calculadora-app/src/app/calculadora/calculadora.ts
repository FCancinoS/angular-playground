import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css'
})
export class Calculadora {
  operandoA: number = 0;
  operandoB: number = 0;
  resultado: number = 0;
  sumar() {
    this.resultado= this.operandoA + this.operandoB;
  }
}

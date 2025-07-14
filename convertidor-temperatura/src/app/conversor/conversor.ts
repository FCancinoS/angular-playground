import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';


import { FormControl,  Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-conversor',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="container mt-5">
      <h2>Conversor de Temperatura </h2>
      <div class="form-group">
        <label for="valor">Temperatura:</label>
        <input type="number" class="form-control" id="valor"  [formControl]="valorControl">
      </div>
      <div class="form-group mt-3">
        <label for="unidad">Unidad:</label>
        <select class="form-select" id="unidad" [(ngModel)]="tipo">
          <option value="c">Celsius</option>
          <option value="f">Fahrenheit</option>
        </select>
    </div>
    <button class="btn btn-primary mt-3" (click)="convertir()">Convertir</button>
    <div *ngIf="resultado !== null  " class="alert alert-success mt-3">
      Resultado: <strong>{{ resultado | number:'1.2-2' }} ° {{tipo === 'c' ? 'C' : 'F' }}</strong>
    </div>
  `,
  styles: ``
})
export class Conversor {
    valorControl = new FormControl(0, Validators.required);
  tipo: 'c' | 'f' = 'f';
  resultado: number | null = null;

  convertir() {
    const valor = this.valorControl.value;
    if (this.valorControl.invalid || valor === null) return;

    this.resultado =
      this.tipo === 'c'
        ? ((valor - 32) * 5) / 9
        : (valor * 9) / 5 + 32;}
}

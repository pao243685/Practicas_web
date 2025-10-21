import { Component } from '@angular/core';

@Component({
  selector: 'app-resultados-busqueda',
  standalone: false,
  templateUrl: './resultados-busqueda.html',
  styleUrl: './resultados-busqueda.css'
})
export class ResultadosBusqueda {

  resultados: string[] = ['Resultado 1', 'Resultado 2', 'Resultado 3'];
}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.scss']
})
export class CertificadosComponent {

  //Variables----
  tableData: any[] = [] ;  //Data del data.json

  selectedColumn: string = '';  //Seleccion de columa para sorting
  sortDirection: string = ''; //Seleccion de asc o dsc para sorting

  pageSize: number = 10; //Seleccion de numero de elementos en tabla
  currentPage: number = 1;  //Seleccion de actual numero de pagina de la tabla

  //Funciones---
  constructor(private http: HttpClient) {  }

  //Leer Json data---
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(): void {
    this.http.get<any>('../../assets/data.json').subscribe((data) => {
      this.tableData = data.certificates.data;
      console.log(data.certificates.data)
    });
  }

  //Sort de tabla de todas las columas---
  sortTable(column: string) {
    if (this.selectedColumn === column) {
      // If the same column is clicked again, reverse the sort direction
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      // If a new column is clicked, set the selected column and default sort direction
      this.selectedColumn = column;
      this.sortDirection = 'asc';
    }
  
    // Sort the table data based on the selected column and sort direction
    this.tableData.sort((a, b) => {
      if (a[column] < b[column]) {
        return this.sortDirection === 'asc' ? -1 : 1;
      }
      if (a[column] > b[column]) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }

  //Formatear fechas---
  formatDate(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  }

  //Cambio de pagina---
  pageChanged(event: number) {
    console.log(event)
    this.currentPage = event;
  }
}

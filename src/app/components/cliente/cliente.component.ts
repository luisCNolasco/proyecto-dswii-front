import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  nombreCliente:string = "Luis Carranza";
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  nombreAdministrador:string="Admin 007";
  constructor() { }

  ngOnInit(): void {
  }

}

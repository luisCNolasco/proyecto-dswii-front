import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoletaService } from '../../../services/boleta.service';

@Component({
  selector: 'app-detalle-boleta',
  templateUrl: './detalle-boleta.component.html',
  styleUrls: ['./detalle-boleta.component.css']
})
export class DetalleBoletaComponent implements OnInit {

  detalleBoleta:any;
  numeroBoleta:number;
  boleta=0;
  precioTotal=0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private serviceBoleta: BoletaService,
    private router: Router
  ) { 
    this.verDetalleBoleta();
  }

  ngOnInit(): void {
  }

  verDetalleBoleta() {
    this.activatedRoute.params.subscribe((params) => {
      this.numeroBoleta = params['id'];
      this.serviceBoleta.detalleBoleta(this.numeroBoleta).subscribe(data=>{
        this.detalleBoleta=data;

        for (let i = 0; i < this.detalleBoleta.length; i++) {
        
          this.precioTotal+=this.detalleBoleta[i].precio;
        }
        this.boleta=this.detalleBoleta[0].boleta.numeroBoleta;
   
      })

    });
  }
  
  volver() {
    this.router.navigate(['cliente/pedidos']);
  }


}

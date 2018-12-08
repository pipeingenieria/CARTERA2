import { Component, OnInit } from '@angular/core';
import { ConexionClienteService } from 'src/app/_services/conexionCliente.service';
import { ConexionClienteService1 } from 'src/app/_services/conexionCliente.service.1';
import { first } from 'rxjs/operators';
import * as $ from 'jquery';


@Component({
  selector: 'app-deuda',
  templateUrl: './deuda.component.html',
  styleUrls: ['./deuda.component.css']
})
export class DeudaComponent implements OnInit {
  items:any;
  items2:any;

  constructor(private conexion:ConexionClienteService, private conexion2:ConexionClienteService1) { }

  ngOnInit() {
    this.conexion2.ListaItem().pipe(first()).subscribe(items2 => { 
      this.items2 = items2; 
      console.log(items2);
    });
    
  }

  validateForm() {
    this.conexion.cliente($("#prueba").val()).pipe(first()).subscribe(items => { 
      this.items = items; 
      console.log(items);
    });
  }

}

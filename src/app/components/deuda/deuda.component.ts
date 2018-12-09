import { Component, OnInit } from '@angular/core';
import { ConexionClienteService } from 'src/app/_services/conexionCliente.service';
import { ConexionClienteService1 } from 'src/app/_services/conexionCliente.service.1';
import { first } from 'rxjs/operators';
import { UserService } from '../../_services';
import { User } from '../../_models';
import * as $ from 'jquery';


@Component({
  selector: 'app-deuda',
  templateUrl: './deuda.component.html',
  styleUrls: ['./deuda.component.css']
})
export class DeudaComponent implements OnInit {
  items:any;
  items2:any;
  users: User[] = [];

  constructor(private conexion:ConexionClienteService, 
              private conexion2:ConexionClienteService1,
              private userService: UserService,) { }

  ngOnInit() {
    this.conexion2.ListaItem().pipe(first()).subscribe(items2 => { 
      this.items2 = items2; 
      console.log(items2);
      this.loadAllUsers();
    });
    
  }

  validateForm() {
    this.conexion.cliente($("#prueba").val()).pipe(first()).subscribe(items => { 
      this.items = items; 
      console.log(items);
    });
  }

  private loadAllUsers() {
    this.userService.getAll().pipe(first()).subscribe(users => { 
        this.users = users; 
    });
  }

  eliminar(item){
    this.conexion.eliminarItem(item);
  }

}

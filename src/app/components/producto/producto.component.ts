import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/_services/conexion.service';
import { first } from 'rxjs/operators';

import { User } from '../../_models';
import { UserService } from '../../_services';
import { producto } from './producto';
import { sort } from './sort';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  items:any;

  currentUser: User;
    users: User[] = [];

  editarItems:any={
    Caracteristicas: "",
    CorreoFabricante: "",
    FechaLanzamiento: "",
    ImagenProducto: "",
    NombreProducto: "",
    PaisFabricacion: "",
    Precio: "",
    UnidadesDisponibles: "",
    UnidadesVendidas: "",
  }
  

  constructor(private conexion:ConexionService , private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.conexion.ListaItem().pipe(first()).subscribe(item=>{
        this.items=item;
        console.log(this.items);

         this.sortOptions = [
          {label: 'Los mas nuevos Primero', value: '!FechaLanzamiento'},
          {label: 'Los mas Viejos primero', value: 'FechaLanzamiento'},
          {label: 'Nombre de Producto', value: 'NombreProducto'}
      ]; 
        
    })
   }

  ngOnInit() {
    
    this.conexion.ListaItem().pipe(first()).subscribe(items => { 
      this.items = items; 
      this.loadAllUsers();
      
  });
  }

  eliminar(item){
    this.conexion.eliminarItem(item);
    location.reload();
  }

  editar(item){
    this.editarItems=item;
  }

  agregarItemEditado(item){
    this.conexion.editarItem(this.editarItems);
  }

  cargarProductos(item){
    this.conexion.ListaItem().subscribe(item=>{
      this.items=item;
      console.log(this.items);
  })
  }

  private loadAllUsers() {
    this.userService.getAll().pipe(first()).subscribe(users => { 
        this.users = users; 
    });
}


cars: producto[];
personas: producto[];

    selectedCar: producto;

    displayDialog: boolean;

    sortOptions: sort[];

    sortKey: string;

    sortField: string;

    sortOrder: number;

    

    selectCar(event: Event, car: producto) {
        this.selectedCar = car;
        this.displayDialog = true;
        event.preventDefault();
    }

    onSortChange(event) {
        let value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        }
        else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

    onDialogHide() {
        this.selectedCar = null;
    }

   
  
    
    

  
}

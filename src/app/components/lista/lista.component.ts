import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/_services/conexion.service';
import { first } from 'rxjs/operators';
import { ConexionClienteService } from 'src/app/_services/conexionCliente.service';
import { User } from '../../_models';
import { UserService } from '../../_services';
import { cliente } from './cliente';
import { sort } from './sort';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  items:any;

  currentUser: User;
    users: User[] = [];

  editarItems:any={
    Cedula: "",
    Nombre: "",
    Telefono: "",
    contrasena: "",
  }
  

  constructor(private conexion:ConexionClienteService , private userService: UserService) {
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


cars: cliente[];
personas: cliente[];

    selectedCar: cliente;

    displayDialog: boolean;

    sortOptions: sort[];

    sortKey: string;

    sortField: string;

    sortOrder: number;

    

    selectCar(event: Event, car: cliente) {
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

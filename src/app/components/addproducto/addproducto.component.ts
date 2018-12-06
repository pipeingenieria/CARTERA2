import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/_services/conexion.service';
import { RestService } from '../../rest.service';
import { RestHttpService } from '../../rest-http.service';

@Component({
  selector: 'app-addproducto',
  templateUrl: './addproducto.component.html',
  styleUrls: ['./addproducto.component.css']
})
export class AddproductoComponent implements OnInit {

  item:any = {
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

  public allCountries;
  constructor(private servicio: ConexionService, public restHttpService: RestHttpService) { }

  ngOnInit() {

    console.log("countries ngOnInit called")
    let Region = 'World';
    console.log(Region)
    this.restHttpService.getAllCountries().subscribe(
      data => {
        console.log(data);
        this.allCountries = data;

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )
    

  }

  agregar(){
    this.servicio.agregarItem(this.item);
    
    this.item.Caracteristicas='';
    this.item.CorreoFabricante='';
    this.item.FechaLanzamiento='';
    this.item.ImagenProducto='';
    this.item.NombreProducto='';
    this.item.PaisFabricacion='';
    this.item.Precio='';
    this.item.UnidadesDisponibles='';
    this.item.UnidadesVendidas='';
  }

  
}

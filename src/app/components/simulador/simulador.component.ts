import { Component, OnInit } from '@angular/core';
import { ConexionCreditoService } from 'src/app/_services/conexionCredito.service';
import { ConexionFacturaService } from 'src/app/_services/conexionFactura.service';
import { RestService } from '../../rest.service';
import { RestHttpService } from '../../rest-http.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-simulador',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.css']
})
export class SimuladorComponent implements OnInit {

  item:any = {
    cuota: "",
    numeroCuota: "",
    monto: "",
    restante: "",
    fecha: "",
    Cedula: "",
    factura: "",
  }

  item2:any = {
    valor: "",
    fecha: "",
    Cedula: "",
    factura: "",
  }

  
  constructor(private servicio: ConexionCreditoService, private servicio2: ConexionFacturaService) { }

  ngOnInit() {

  
    

  }

  agregar(){

    var shouldDelete = confirm("Seguro Quieres Generar credito??");
    if (shouldDelete) {
    
    
      


    var cuotas:any = $("#cuotas").val();
    var subtotal:any = $("#sub-total").val();
    var resul = subtotal / cuotas;

    for (var i = 0; i < cuotas; i++) {

          var res = subtotal-resul*(i+1);

          this.servicio.agregarItem(this.item);
          this.item.fecha='11/05/2018(Prueba)';
          this.item.Cedula='';
          this.item.factura='';
          this.item.restante=resul.toFixed(2);
          this.item.monto=res.toFixed(2);
          this.item.numeroCuota=(i+1);
          this.item.cuota=cuotas;


    }

    this.servicio2.agregarItem(this.item2);
    this.item2.factura=$("#factura").val();
    this.item2.Cedula=$("#Cedula").val();
    this.item2.fecha='11/05/2018(Prueba)';
    this.item2.valor=subtotal;

    $("#pagos tbody tr").remove();
} else {
  alert("Debe Cotizar Prestamo de nuevo");
  $("#pagos tbody tr").remove();
}
    
    

    /* this.item.fecha1='';
    this.item.fecha2='';
    this.item.fecha3='';
    this.item.fecha4='';
    this.item.fecha5='';
    this.item.fecha6='';
    this.item.fecha7='';
    this.item.fecha8='';
    this.item.fecha9='';
    this.item.fecha10='';
    this.item.fecha11='';
    this.item.fecha12='';

    this.item.restante1='';
    this.item.restante2='';
    this.item.restante3='';
    this.item.restante4='';
    this.item.restante5='';
    this.item.restante6='';
    this.item.restante7='';
    this.item.restante8='';
    this.item.restante9='';
    this.item.restante10='';
    this.item.restante11='';
    this.item.restante12='';

    this.item.monto1='';
    this.item.monto2='';
    this.item.monto3='';
    this.item.monto4='';
    this.item.monto5='';
    this.item.monto6='';
    this.item.monto7='';
    this.item.monto8='';
    this.item.monto9='';
    this.item.monto10='';
    this.item.monto11='';
    this.item.monto12='';

    this.item.numeroCuota1='';
    this.item.numeroCuota2='';
    this.item.numeroCuota3='';
    this.item.numeroCuota4='';
    this.item.numeroCuota5='';
    this.item.numeroCuota6='';
    this.item.numeroCuota7='';
    this.item.numeroCuota8='';
    this.item.numeroCuota9='';
    this.item.numeroCuota10='';
    this.item.numeroCuota11='';
    this.item.numeroCuota12='';

    this.item.cuota1=cuotas;
    this.item.cuota2='';
    this.item.cuota3='';
    this.item.cuota4='';
    this.item.cuota5='';
    this.item.cuota6='';
    this.item.cuota7='';
    this.item.cuota8='';
    this.item.cuota9='';
    this.item.cuota10='';
    this.item.cuota11='';
    this.item.cuota12=''; */
  }

  validateForm() {
      
      var prestamo:any = $("#Prestamo").val();
      var cuotas:any = $("#cuotas").val();
      var vehiculo:any = $("#Vehiculo").val();
      var vivienda:any = $("#Vivienda").val();
      if($("#Vehiculo").is(':checked')){
        $("#sub-total").val( parseInt(prestamo)+(vehiculo*prestamo*cuotas));
      }
      if($("#Vivienda").is(':checked')){
        $("#sub-total").val( parseInt(prestamo)+(vivienda*prestamo*cuotas));
      }
    
    $("#pagos tbody tr").remove();

    var cuotas:any = $("#cuotas").val();
    var subtotal:any = $("#sub-total").val();

    var resul = subtotal / cuotas;

    for (var i = 0; i < cuotas; i++) {

          var res = subtotal-resul*(i+1);

           var row="<tr>";
           row += "<td width='4%'>"+(i+1)+"</td>";
           row += "<td>Cuota "+(i+1)+" de "+cuotas+"</td>";
           row += "<td>"+resul.toFixed(2)+"</td>";
           row += "<td>"+res.toFixed(2)+"</td>";
           row += "<td>05/12/2018(prueba)</td>";
           row +="</tr>";
           row +="<button class='btn btn-success mt-3' type='submit' (click)='agregar()'>Generar Credito</button>";

          $("#pagos tbody").append(row);

    }

    /* for (var i = 0; i < cuotas; i++) {

            var res = subtotal-resul*(i+1);

            var row="<input type='text' id='cuota"+(i+1)+"' name='cuota"+(i+1)+"' value='"+cuotas+"' class='form-control' [(ngModel)]='item.cuota"+(i+1)+"'>";
            row += "<input type='text' id='numeroCuota"+(i+1)+"' name='numeroCuota"+(i+1)+"' value='"+(i+1)+"' class='form-control' [(ngModel)]='item.numeroCuota"+(i+1)+"'>";
            row += "<input type='text' id='monto"+(i+1)+"' name='monto"+(i+1)+"' value='"+resul.toFixed(2)+"' class='form-control' [(ngModel)]='item.monto"+(i+1)+"'>";
            row += "<input type='text' id='restante"+(i+1)+"' name='restante"+(i+1)+"' value='"+res.toFixed(2)+"' class='form-control' [(ngModel)]='item.restante"+(i+1)+"'>";
            row += "<input type='text' id='fecha"+(i+1)+"' name='fecha"+(i+1)+"' value='Prueba' class='form-control' [(ngModel)]='item.fecha"+(i+1)+"'>";
            

            $("#form").append(row);

    } */

    $("#cuota1").val(cuotas);
    

}

}

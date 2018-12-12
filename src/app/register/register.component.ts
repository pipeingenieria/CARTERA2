import { Component, OnInit } from '@angular/core';
import { ConexionCreditoService } from 'src/app/_services/conexionCredito.service';
import { ConexionFacturaService } from 'src/app/_services/conexionFactura.service';
import { ConexionClienteService } from 'src/app/_services/conexionCliente.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { User } from '../_models';

import { AlertService, UserService } from '../_services';
import * as $ from 'jquery';

@Component({templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    users: User[] = [];
    currentUser: User;


    item:any = {
        
        cedula:"",
        firstName:"",
        id: "",
        lastName: "",
        password:"",
        rol: "",
        telefono: "",
        username: "",
      }
    
      

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private servicio: ConexionCreditoService,
        private servicio2: ConexionFacturaService,
        private servicio3: ConexionClienteService,
        private alertService: AlertService) { 
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            rol: ['', Validators.required],
            cedula: ['', Validators.required],
            telefono: ['', Validators.required],
        });
       /*  this.loadAllUsers(); */
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        var rol:any = $("#rol").val();
        this.servicio3.agregarItem(this.item);
        this.item.cedula=$("#cedula").val();
        this.item.firstName=$("#firstName").val();
        this.item.lastName=$("#lastName").val();
        this.item.password=$("#password").val();
        this.item.rol=$("#rol").val();
        this.item.telefono=$("#telefono").val();
        this.item.username=$("#username").val();

        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/logout']);
                    /* location.reload(); */
                    /* alert("Cliente Registrado correctamente"); */
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });

                
    }

    login(){
       
        this.router.navigate(['/login']);
    
    }

    admin(){
       
       /*  if(this.currentUser.rol=="admin"){
            return true;
        }else{
            
            return false;
        } */

        return true;
    
    }

    agregar(){

       
        
        
          
    
    
        
    
        
    
        this.servicio3.agregarItem(this.item);
        this.item.cedula=$("#factura").val();
        this.item.firstName=$("#Cedula").val();
        this.item.lastName=$("#factura").val();
        this.item.password=$("#Cedula").val();
        this.item.rol=$("#factura").val();
        this.item.telefono=$("#Cedula").val();
        this.item.username=$("#factura").val();
        
    
   
        
        
    
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

      private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => { 
            this.users = users; 
        });
    }
}

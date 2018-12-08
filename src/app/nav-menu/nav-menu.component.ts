import { Component } from '@angular/core';
//import {MenubarModule} from 'primeng/menubar';
import { first } from 'rxjs/operators';
import {MenuItem} from 'primeng/api';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { UserService } from '../_services';
import { User } from '../_models';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  currentUser: User;
    users: User[] = [];
    url=location.protocol+"//"+location.hostname+":"+location.port+"/";

  constructor(@Inject(DOCUMENT) private document: Document, private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
}

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  items: MenuItem[];
  activeItem: MenuItem;

  ngOnInit() {
      /* this.items = [
         
          
          {label: 'Clientes', icon: 'fa fa-fw fa-book', routerLink: 'cliente'},
          {label: 'Lista', icon: 'fa fa-fw fa-book', routerLink: 'lista'},
          {label: 'Factura', icon: 'fa fa-fw fa-plus', routerLink: 'factura'},
          {label: 'Pago', icon: 'fa fa-fw fa-address-card', routerLink: 'pago'},
          {label: 'PRDODUCTO', icon: 'fa fa-fw fa-support', routerLink: 'producto'},
          {label: 'LogOut', icon: 'fa fa-fw fa-sign-out', routerLink: 'logout'},
          //{label: 'Registro', icon: 'fa fa-fw fa-sign-out', routerLink: 'registro'}
          
      ];

      this.activeItem = this.items[2];
      //this.loadAllUsers();
      this.userService.getAll().pipe(first()).subscribe(users => { 
        this.users = users; 
    }); */
  }
  checkSomething(){
    if(this.document.location.href==location.protocol+"//"+location.hostname+":"+location.port+"/login"){ 
        return false;
    }else{
        return true;
    }
   
  }

  navcliente(){
    return this.document.location;
  } 

  navlista(){
    //console.log(location.pathname);
    return location.pathname;
    
  } 
  
  deleteUser(id: number) {
    this.userService.delete(id).pipe(first()).subscribe(() => { 
        this.loadAllUsers() 
    });
  }

  private loadAllUsers() {
      this.userService.getAll().pipe(first()).subscribe(users => { 
          this.users = users; 
      });
  }

 /*  active(){
    var elemento = document.getElementById("cliente");
    if (elemento.className == "cliente active") {
      elemento.className = "cliente active";
    }else {
      elemento.className = "cliente active";
    }
  } */

}

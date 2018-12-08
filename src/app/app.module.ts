// Imports para primeNG
import { NgModule }      from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import {TabMenuModule} from 'primeng/tabmenu';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import {PanelModule} from 'primeng/panel';
import { DialogModule } from 'primeng/primeng';
import {ButtonModule} from 'primeng/button';

//Imports Angular
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


// usado para generar un backend "falso"
import { fakeBackendProvider } from './_helpers';

//Imports para Utilizar FireBase (Base de Datos en tiempo Real) :)
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
//service FireStore
import {ConexionService} from './_services/conexion.service'
import {PaisesService} from './_services/paises.service'
import { RestService } from './rest.service';
import { RestHttpService } from './rest-http.service';




//Componentes y servicios de Login
import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService} from './_services';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

//Componentes de Estructura
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ProductoComponent } from './components/producto/producto.component';
import { AddproductoComponent } from './components/addproducto/addproducto.component';
import { SoporteComponent } from './components/soporte/soporte.component';;
import { LogoutComponent } from './components/logout/logout.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { FacturaComponent } from './components/factura/factura.component';
import { PagoComponent } from './components/pago/pago.component';
import { FacturacionComponent } from './components/facturacion/facturacion.component';
import { ListaComponent } from './components/lista/lista.component';
import { CreditoComponent } from './components/credito/credito.component';
import { SimuladorComponent } from './components/simulador/simulador.component';
import { DeudaComponent } from './components/deuda/deuda.component'
@NgModule({
    imports: [
        //BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        ReactiveFormsModule,
        HttpClientModule,
        MenubarModule,
        MenuModule,
        TabMenuModule,
        routing,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        DataViewModule,
        AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
        AngularFirestoreModule, // imports firebase/firestore, only needed for database features
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
        AngularFireStorageModule,
        PanelModule,
        DropdownModule,
        DialogModule,
        ButtonModule,
        RouterModule.forRoot([
            { path: 'home', component: HomeComponent, pathMatch: 'full' },
            { path: 'register', component: RegisterComponent },
          ])
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        NavMenuComponent,
        RegistroComponent,
        ProductoComponent,
        AddproductoComponent,
        SoporteComponent ,
        LogoutComponent,
        ClienteComponent,
        FacturaComponent,
        PagoComponent ,
        FacturacionComponent ,
        ListaComponent ,
        CreditoComponent ,
        SimuladorComponent ,
        DeudaComponent  //
             
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        ConexionService,
        PaisesService,
        RestService,
        RestHttpService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { 
   
}
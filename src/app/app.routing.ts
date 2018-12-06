import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { RegistroComponent } from './components/registro/registro.component';
import { ProductoComponent } from './components/producto/producto.component';
import { AddproductoComponent } from './components/addproducto/addproducto.component';
import { SoporteComponent } from './components/soporte/soporte.component';
import { LogoutComponent } from './components/logout/logout.component'
import { ClienteComponent } from './components/cliente/cliente.component'
import { FacturaComponent } from './components/factura/factura.component'
import { PagoComponent } from './components/pago/pago.component'
import { FacturacionComponent } from './components/facturacion/facturacion.component'
import { ListaComponent } from './components/lista/lista.component'
import { CreditoComponent } from './components/credito/credito.component'
import { SimuladorComponent } from './components/simulador/simulador.component'



const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard], children:[
        {
         path : 'registro',
         component: RegistroComponent
        },
        {
         path : 'producto',
         component: ProductoComponent
        },
        {
            path : 'addproducto',
            component: AddproductoComponent
        },
        {
            path : 'soporte',
            component: SoporteComponent
        }
        ,
        {
            path : 'logout',
            component: LogoutComponent
        },
        {
            path : 'cliente',
            component: ClienteComponent
        },
        {
            path : 'factura',
            component: FacturaComponent
        },
        {
            path : 'pago',
            component: PagoComponent
        },
        {
            path : 'Facturacion',
            component: FacturacionComponent
        },
        {
            path : 'lista',
            component: ListaComponent
        },
        {
            path : 'credito',
            component: CreditoComponent
        },
        {
            path : 'simulador',
            component: SimuladorComponent
        },
        
    ] },
    { path: 'login', component: LoginComponent },
    { path: 'register', 
        component: RegisterComponent 
        },
    

    // otherwise redirect to ProductoComponent
    { path: '**', component: ProductoComponent },
];

export const routing = RouterModule.forRoot(appRoutes);
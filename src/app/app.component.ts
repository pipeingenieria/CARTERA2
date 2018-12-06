import { Component } from '@angular/core';

//Imports para Utilizar FireBase (Base de Datos en tiempo Real) :)
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent { 
    items: Observable<any[]>;
    constructor(db: AngularFirestore) {
        this.items = db.collection('items').valueChanges();
    }
}
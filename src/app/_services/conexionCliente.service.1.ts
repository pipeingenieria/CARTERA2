import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item2 { name: string; }

@Injectable({
  providedIn: 'root'
})
export class ConexionClienteService1 {

  private itemsCollection: AngularFirestoreCollection<Item2>;
  private itemsCollection2: AngularFirestoreCollection<Item2>;
  Cliente: Observable<Item2[]>;
  Cliente1: Observable<Item2[]>;
  private itemDoc: AngularFirestoreDocument<Item2>;

  constructor(private afs: AngularFirestore) {

    
   
    this.itemsCollection = afs.collection<Item2>('Cliente');
    this.Cliente = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item2;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
   }

   ListaItem() {
    return this.Cliente;
  }

 
  agregarItem(item: Item2) {
    this.itemsCollection.add(item);
  }

  eliminarItem(item){

    this.itemDoc = this.afs.doc<Item2>(`Cliente/${item.id}`);
    this.itemDoc.delete();
  }

  editarItem(item){

    this.itemDoc = this.afs.doc<Item2>(`Cliente/${item.id}`);
    this.itemDoc.update(item);
  }

  cliente(cedula){

    this.itemsCollection2=this.afs.collection('Credito', ref => ref.where('Cedula', '==', cedula));
    this.Cliente1 = this.itemsCollection2.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item2;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.Cliente1;
   }
}

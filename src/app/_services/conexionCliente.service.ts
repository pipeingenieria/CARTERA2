import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item { name: string; }

@Injectable({
  providedIn: 'root'
})
export class ConexionClienteService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  private itemsCollection2: AngularFirestoreCollection<Item>;
  Cliente: Observable<Item[]>;
  Cliente1: Observable<Item[]>;
  private itemDoc: AngularFirestoreDocument<Item>;

  constructor(private afs: AngularFirestore) {

    
   
    this.itemsCollection = afs.collection<Item>('Cliente');
    this.Cliente = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
   }

   ListaItem() {
    return this.Cliente;
  }

 
  agregarItem(item: Item) {
    this.itemsCollection.add(item);
  }

  eliminarItem(item){

    this.itemDoc = this.afs.doc<Item>(`Credito/${item.id}`);
    this.itemDoc.delete();
  }

  editarItem(item){

    this.itemDoc = this.afs.doc<Item>(`Cliente/${item.id}`);
    this.itemDoc.update(item);
  }

  cliente(cedula){

    this.itemsCollection2=this.afs.collection('Credito', ref => ref.where('Cedula', '==', cedula));
    this.Cliente1 = this.itemsCollection2.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.Cliente1;
   }
}

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item { name: string; }

@Injectable({
  providedIn: 'root'
})
export class ConexionFacturaService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  Factura: Observable<Item[]>;
  private itemDoc: AngularFirestoreDocument<Item>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('Factura');
    this.Factura = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
   }

   ListaItem() {
    return this.Factura;
  }

 

  agregarItem(item: Item) {
    this.itemsCollection.add(item);
  }

  eliminarItem(item){

    this.itemDoc = this.afs.doc<Item>(`Factura/${item.id}`);
    this.itemDoc.delete();
  }

  editarItem(item){

    this.itemDoc = this.afs.doc<Item>(`Factura/${item.id}`);
    this.itemDoc.update(item);
  }
}

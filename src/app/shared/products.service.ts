import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private firebase: AngularFireDatabase) { }
  productList: AngularFireList<any>
  buyedproductList: AngularFireList<any>

  getProducts(){
    this.productList = this.firebase.list('burgerMenu');
    return this.productList.snapshotChanges()
  }

  boughtItems(boughtFood){
    this.buyedproductList.push({
      userId: 1,
      id: boughtFood.id,
      price: boughtFood.price,
      name: boughtFood.name
    })
  }
}

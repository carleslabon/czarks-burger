import { ProductsService } from '../shared/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  burgerMenu = [];
  purchasedOrders = [];
  amount: number
  quantity: number
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      userList => {
        this.burgerMenu = userList.map(indivProduct => {
          return {
            $key:indivProduct.key,
            ...indivProduct.payload.val(),
          }
        })
      }
      
    )
  }

  addtoCart(burger, quantity){
    this.quantity = +quantity.value
    this.purchasedOrders.push(burger)
  }

  onBuy(boughtFood){
    console.log(boughtFood);
    this.productService.boughtItems(boughtFood);
  }

}

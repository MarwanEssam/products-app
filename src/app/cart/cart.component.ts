import { Component, inject } from '@angular/core';
import { CartCountService } from '../services/cart-count.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartItems!: any[];
  counter!: number;
  _cartCountService = inject(CartCountService);
  // constructor(private _cartCountService: CartCountService) {}
  ngOnInit() {
    this._cartCountService
      .getCounter()
      .subscribe((value) => (this.counter = value));
  }
  deleteFromCart(item: any) {
    this._cartCountService.delete(item);
    if (this.counter != 0) {
      this._cartCountService.setCounter(this.counter - 1);
    }
  }
}

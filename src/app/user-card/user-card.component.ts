import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ProductType } from '../product-type';
import { CartCountService } from '../services/cart-count.service';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  @Input() product!: ProductType;
  desc!: any;
  counter!: any;
  constructor(
    private router: Router,
    private cartCountService: CartCountService
  ) {}
  prepareProduct() {
    if (this.product) {
      this.desc = this.product.description.substring(0, 50);
    }
  }
  ngOnInit() {
    this.prepareProduct();
    this.cartCountService
      .getCounter()
      .subscribe((value) => (this.counter = value));
  }
  stockStatus() {
    return this.product.stock > 0 ? 'In Stock' : 'Out of stock';
  }
  productDetails(id: number) {
    this.router.navigate([`/user-details/${id}`]);
  }
  addToCart(addedProduct: ProductType) {
    // const cartItems = localStorage.getItem('carItems');
    // console.log(cartItems);

    // this.cartCountService.setCounter(this.counter + 1);
    this.cartCountService.addToCart(addedProduct);
    // console.log(addedProduct);
  }
}

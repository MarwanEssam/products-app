import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ProductType } from '../product-type';

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
  constructor(private router: Router) {}
  prepareProduct() {
    if (this.product) {
      this.desc = this.product.description.substring(0, 50);
    }
  }
  ngOnInit() {
    this.prepareProduct();
  }
  stockStatus() {
    return this.product.stock > 0 ? 'In Stock' : 'Out of stock';
  }
  productDetails(id: number) {
    this.router.navigate([`/user-details/${id}`]);
  }
}

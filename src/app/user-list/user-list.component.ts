import { Component, Input, OnInit } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
// import for lab 3
// import * as prdouctsList from '../../assets/products.json';
import { ProductType } from '../product-type';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  constructor(private productService: ProductsService) {}
  // data: any = prdouctsList;
  products!: ProductType[];
  ngOnInit() {
    this.productService.getAllProducts().subscribe((res) => {
      this.products = res.products;
    });
  }
}

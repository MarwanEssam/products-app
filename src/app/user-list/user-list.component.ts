import { Component, Input, OnInit } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import * as prdouctsList from '../../assets/products.json';
import { ProductType } from '../product-type';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  // @Input() userCard: UserCard;
  data: any = prdouctsList;
  products!: ProductType[];
  ngOnInit() {
    this.products = this.data.default;
  }
}

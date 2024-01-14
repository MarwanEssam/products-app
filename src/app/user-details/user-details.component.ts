import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import * as prdouctsList from '../../assets/products.json';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
  constructor(private activatedRoute: ActivatedRoute) {}
  data: any = prdouctsList;
  products!: any;
  product: any;
  ngOnInit() {
    this.products = this.data.default;
    const id = this.activatedRoute.snapshot.params['id'];
    this.product = this.products.find((product: any) => product.id == id);
  }
}

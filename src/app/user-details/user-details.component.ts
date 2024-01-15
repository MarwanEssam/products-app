import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService
  ) {}
  product: any;
  id!: number;
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.productService
      .getSingleProduct(this.id)
      .subscribe((res) => (this.product = res));
  }
}

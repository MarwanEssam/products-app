import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { CartCountService } from '../services/cart-count.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  counter: number = 0;
  constructor(private cartCountService: CartCountService) {}
  ngOnInit() {
    this.cartCountService
      .getCounter()
      .subscribe((value) => (this.counter = value));
  }
}

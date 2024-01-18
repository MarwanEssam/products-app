import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartCountService {
  getCounterFromLocalStorage(): any {
    const storedCounter = localStorage.getItem('counter');
    return storedCounter ? +storedCounter : 0;
  }
  private items: any[] = JSON.parse(localStorage.getItem('carItems') || '[]');
  private counter = new BehaviorSubject<number>(
    this.getCounterFromLocalStorage()
  );

  constructor() {}
  getCounter() {
    return this.counter.asObservable();
  }

  setCounter(newCounter: any) {
    this.counter.next(newCounter);
    localStorage.setItem('counter', JSON.stringify(newCounter));
  }

  addToCart(item: any) {
    let itemsId = this.items.map((existingItem) => existingItem.id);

    if (itemsId.includes(item.id)) {
      const existingItemIndex = this.items.findIndex(
        (existingItem) => existingItem.id === item.id
      );
      this.items[existingItemIndex].quantity++;
    } else {
      const newCounter = this.counter.value + 1;
      this.setCounter(newCounter);
      // this.setCounter(this.counter);

      this.items.push({ ...item, quantity: 1 });
    }
    console.log(this.items);

    localStorage.setItem('carItems', JSON.stringify(this.items));
  }

  getItems() {
    return this.items;
  }
  delete(item: any) {
    this.items = this.items.filter((i) => i.id !== item.id);
    localStorage.setItem('carItems', JSON.stringify(this.items));
  }
  incrementQuantity(id: number) {
    let item = this.items.find((i) => i.id === id);
    if (item) {
      item.quantity++;
    }
    localStorage.setItem('carItems', JSON.stringify(this.items));
  }
  decrementQuantity(id: number) {
    let item = this.items.find((i) => i.id === id);
    if (item) {
      item.quantity--;
    }
    localStorage.setItem('carItems', JSON.stringify(this.items));
  }
  getTotal() {
    return this.items.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }
}

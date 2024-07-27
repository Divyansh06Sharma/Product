import { products, Products } from './../data';
import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  ngOnInit(): void {
    console.log('Product Component is working');
  }
  products = products;

  constructor(private router: Router) {}

  openDetailsPage(id: number): void {
 this.router.navigate(['/details', id])
//  const url = this.router.serializeUrl(
//   this.router.createUrlTree(['/details', id])
// );
// window.open(url, '_blank');
  }

}

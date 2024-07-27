import { Products, products } from './../data';
import { NgFor, NgIf } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  product: Products | undefined;


  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = +params.get('id')!;
      this.product = products.find(p => p.id === productId);

    });
  }
}
 
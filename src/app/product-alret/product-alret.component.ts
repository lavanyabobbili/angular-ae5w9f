import { Component, OnInit } from '@angular/core';
import { Input }from '@angular/core';

@Component({
  selector: 'app-product-alret',
  templateUrl: './product-alret.component.html',
  styleUrls: ['./product-alret.component.css']
})
export class ProductAlretComponent implements OnInit {
@Input() Product;
  constructor() { }
 
  ngOnInit() {
  }

}
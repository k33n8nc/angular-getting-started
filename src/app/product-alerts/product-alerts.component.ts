import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: IProduct;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}

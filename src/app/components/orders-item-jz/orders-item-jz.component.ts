import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-orders-item-jz',
  templateUrl: './orders-item-jz.component.html',
  styleUrls: ['./orders-item-jz.component.css']
})
export class OrdersItemJzComponent implements OnInit {

  @Input() id: string;
  @Input() title: string;
  @Input() text: string;
  @Input() image: string;
  @Input() price: number;

  constructor() { }

  ngOnInit() {
  }

}

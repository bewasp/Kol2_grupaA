import { Component, OnInit } from '@angular/core';
import {JzDataService} from '../../services/jz-data.service';

@Component({
  selector: 'app-orders-jz',
  templateUrl: './orders-jz.component.html',
  styleUrls: ['./orders-jz.component.css']
})
export class OrdersJzComponent implements OnInit {

  public items$: any;

  constructor(private service: JzDataService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }
}

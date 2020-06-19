import { Component, OnInit } from '@angular/core';
import {JzDataService} from '../../services/jz-data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-orders-details-jz',
  templateUrl: './orders-details-jz.component.html',
  styleUrls: ['./orders-details-jz.component.css']
})
export class OrdersDetailsJzComponent implements OnInit {

  public image = '';
  public text: string;
  public id: number;
  public title: string;
  public price: number;

  constructor(private service: JzDataService, private route: ActivatedRoute) { }
  ngOnInit() {
    let id: string;
    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
      });
    if (id) {
      this.service.getById(id).subscribe(res => {
        this.id = res['id'];
        this.title = res['title'];
        this.text = res['text'];
        this.image = res['image'];
        this.price = res['price'];
      });
    } else {
      this.id = 1;
    }
  }
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemJzComponent } from './orders-item-jz.component';

describe('OrdersItemJzComponent', () => {
  let component: OrdersItemJzComponent;
  let fixture: ComponentFixture<OrdersItemJzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersItemJzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemJzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsJzComponent } from './orders-details-jz.component';

describe('OrdersDetailsJzComponent', () => {
  let component: OrdersDetailsJzComponent;
  let fixture: ComponentFixture<OrdersDetailsJzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDetailsJzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsJzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

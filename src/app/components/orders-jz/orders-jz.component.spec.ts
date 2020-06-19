import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersJzComponent } from './orders-jz.component';

describe('OrdersJzComponent', () => {
  let component: OrdersJzComponent;
  let fixture: ComponentFixture<OrdersJzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersJzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersJzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

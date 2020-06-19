import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrdersDetailsJzComponent} from './components/orders-details-jz/orders-details-jz.component';
import {OrdersJzComponent} from './components/orders-jz/orders-jz.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersJzComponent
  },
  {
    path: 'detail/:id',
    component: OrdersDetailsJzComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

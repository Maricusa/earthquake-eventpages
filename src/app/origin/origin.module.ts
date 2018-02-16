import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

import { OriginComponent } from './origin/origin.component';
import { OriginRoutingModule } from './origin-routing.module';
import { ProductPageModule } from '../product-page/product-page.module';

import { DetailComponent } from './detail/detail.component';
import { PhaseComponent } from './phase/phase.component';
import { MagnitudeComponent } from './magnitude/magnitude.component';


@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    ProductPageModule,

    OriginRoutingModule
  ],
  declarations: [
    DetailComponent,
    MagnitudeComponent,
    OriginComponent,
    PhaseComponent
  ]
})
export class OriginModule {
}
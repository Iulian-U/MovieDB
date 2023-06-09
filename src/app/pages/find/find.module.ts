import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindPageRoutingModule } from './find-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { FindPage } from './find.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindPageRoutingModule,
    SharedModule,
  ],
  declarations: [FindPage],
})
export class FindPageModule {}

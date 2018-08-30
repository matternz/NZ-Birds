import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditBirdPage } from './edit-bird';

@NgModule({
  declarations: [
    EditBirdPage,
  ],
  imports: [
    IonicPageModule.forChild(EditBirdPage),
  ],
})
export class EditBirdPageModule {}

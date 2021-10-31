import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { LoadSpinnerComponent } from './components/load-spinner/load-spinner.component';

let sharedComponents = [LoadSpinnerComponent];

@NgModule({
  declarations: [sharedComponents],
  imports: [CommonModule, MaterialModule],
  exports: [sharedComponents],
})
export class SharedModule {}

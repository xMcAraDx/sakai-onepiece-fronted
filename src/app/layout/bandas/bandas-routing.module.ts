import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandasComponent } from './bandas.component';

const routes: Routes = [{path: '', component: BandasComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BandasRoutingModule { }

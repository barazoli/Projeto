import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from "./views/home/home.component"
import { ProductCrudComponent } from "./views/product-crud/product-crud.component"
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

const routes: Routes = [
  {
  path: "",
  component: HomeComponent
  }, {
    path: "veiculos",
    component: ProductCrudComponent
  },{
    path: "veiculos/create",
    component: ProductCreateComponent
  },
  {
    path: "veiculos/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "veiculos/delete/:id",
    component: ProductDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

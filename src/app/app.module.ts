import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { DietComponent } from './diet/diet.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HighlightDirective } from './highlight.directive';
import { FooterComponent } from './footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditProductComponent } from './products/product/edit-product/edit-product.component';
import { SearchProductComponent } from './products/products-list/search-product/search-product.component';
import { DietProductComponent } from './diet/diet-product/diet-product.component';
import { ProductPostsService } from './products/product-posts.service';
import { ProductService } from './products/product.service';
import { DietService } from './diet/diet.service';
import { AddProductToDietComponent } from './products/product/add-product-to-diet/add-product-to-diet.component';
import { UserSiteComponent } from './user-site/user-site.component';

const appRoutes: Routes = [
  { path: 'diet', component: DietComponent },
  { path: 'user-site', component: UserSiteComponent },
  // { path: '', redirectTo: '/not-found', pathMatch: 'full' },
  { path: 'new-product', component: AddProductComponent },
  { path: 'products-list', component: ProductsListComponent },
  { path: 'products-list-reload', redirectTo: '/products-list' },
  { path: 'not-found', component: NotFoundComponent },
  { path: '', redirectTo: '/diet', pathMatch: 'full' },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsListComponent,
    DietComponent,
    AddProductComponent,
    HeaderComponent,
    NotFoundComponent,
    HighlightDirective,
    FooterComponent,
    EditProductComponent,
    SearchProductComponent,
    DietProductComponent,
    AddProductToDietComponent,
    UserSiteComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      imageWidth: 30,
      imageHeight: 30,
      outerStrokeColor: 'red',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
  ],
  providers: [ProductPostsService, ProductService, DietService],
  bootstrap: [AppComponent],
})
export class AppModule {}

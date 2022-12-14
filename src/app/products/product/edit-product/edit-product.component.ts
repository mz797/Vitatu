import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/types/Product.model';
import { ProductService } from '../../product.service';
import { ProductPostsService } from '../../product-posts.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  addProductForm: FormGroup;
  @Input() product: Product;

  constructor(
    private productService: ProductPostsService,
    private editProductService: ProductService
  ) {}

  ngOnInit(): void {
    this.addProductForm = new FormGroup({
      name: new FormControl(this.product.Name, Validators.required),
      kcal: new FormControl(this.product.Kcal, [
        Validators.required,
        Validators.min(0),
        Validators.max(1000),
      ]),
      carbohydrates: new FormControl(this.product.Carbohydrates, [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
      protein: new FormControl(this.product.Protein, [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
      fat: new FormControl(this.product.Fat, [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
    });
  }

  onSubmit() {
    const prod = this.addProductForm.value;
    let updetedProduct = new Product(
      prod.carbohydrates,
      prod.fat,
      prod.kcal,
      prod.name,
      prod.protein
    )
    this.productService.updateProduct(
      this.product.Id,
      updetedProduct
    );
    updetedProduct = new Product(
      prod.carbohydrates,
      prod.fat,
      prod.kcal,
      prod.name,
      prod.protein,
      this.product.Id
    )
    this.editProductService.productWasEdited.emit(updetedProduct);
    this.addProductForm.reset();
    this.editProductService.closeEditEvent.emit();
  }
  onCloseEdit() {
    this.editProductService.closeEditEvent.emit();
  }
}

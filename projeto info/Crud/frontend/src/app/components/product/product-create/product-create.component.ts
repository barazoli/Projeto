import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    id: 1,
    placa: '',
    chassi: 0,
    renavam: 0,
    modelo:'',
    marca:'',
    ano: 0
  }

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {

  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() =>{
      this.productService.showMessage('Operação executada com sucesso!')
      this.router.navigate(['/veiculos'])
    })

  }
  cancel(): void {
    this.router.navigate(['/veiculos'])
  }

}

import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs/internal/Observable';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/add"
  listaUrl = "http://localhost:3001/"
  putUrl ='http://localhost:3001/update'


  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg : string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product) // aqui
  }

  read():Observable<Product[]> {
    return this.http.get<Product[]>(this.listaUrl)
  }

  readById(id: any): Observable<Product> {
    const url = `${this.listaUrl}/${id}`
    return this.http.get<Product>(url)
  }

  update(product: Product): Observable<Product>{
    const url = `${this.putUrl}/${product.id}` //aqui
    return this.http.put<Product>(url, product)
  }

  delete(id: any): Observable<Product> {
    const url= `${this.listaUrl}/${id}`;
    return this.http.delete<Product>(url);
  }

}

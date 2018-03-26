import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  providers: [
    HttpClientModule
  ]
})

export class BooksComponent implements OnInit{
  title = "Sophia Wong's BookStore";
  books: any;

  constructor(private http:HttpClient){}

  ngOnInit() {
    this.http
      .get("http://localhost:3000/books")
      .subscribe(data => {this.books = data;});
  }
}

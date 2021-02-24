import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-train',
  templateUrl: './book-train.component.html',
  styleUrls: ['./book-train.component.scss'],
})
export class BookTrainComponent implements OnInit {
  bookForm = this.fb.group({
    class: ['', Validators.required],
    date: ['', Validators.required],
    passType: ['', Validators.required],
    validity: ['', Validators.required],
    quantity: [[], Validators.required],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}

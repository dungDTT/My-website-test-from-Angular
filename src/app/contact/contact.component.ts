import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import axios from 'axios';

import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  
  userForm: FormGroup;
  currentId = 1;
  result = '';
  users: any[] = [];


  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      //id: [0],
      id_user: ['', Validators.required],
      avatar: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      joinDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getAllUser(); // Lấy danh sách người dùng khi component khởi tạo
  }

  onSubmit() {
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      axios.post('https://jsonplaceholder.typicode.com/users', formData)
        .then(response => {
          this.result = 'Thêm thành công!';
        })
        .catch(error => {
          this.result = 'Đã xảy ra lỗi';
          console.error(error);
        });
    } else {
      this.result = 'Form không hợp lệ!';
    }
  }

  getAllUser(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      this.result = 'Get all thành công!';
    })
    .catch(error => {
      this.result = 'Đã xảy ra lỗi';
      console.error(error);
    });
  }

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import axios from 'axios';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DataService } from '../data.service';

import { from } from 'rxjs';

import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-test-form',
  standalone: true,
  imports: [ReactiveFormsModule,
    CommonModule,
    TableModule,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    ScrollPanelModule,
    DatePipe,
  ],
  templateUrl: './test-form.component.html',
  styleUrl: './test-form.component.scss'

})

export class testformComponent {
  
  resultrxjs: number[] = [];

  userForm: FormGroup;
  //currentId = 1;
  result = '';
  users: any[] = [];
  genders: any[] = [];
  isEdit = false;

  //pipe = new DatePipe('vi-VN');
  today: number = Date.now();




  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.userForm = this.fb.group({
      id: [0],
      id_user: ['', Validators.required],
      avatar: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      id_gender: ['', Validators.required],
      joinDate: ['', Validators.required]
    });
  }

   ngOnInit(): void {

    const array = [10, 20, 30];
    const observableFromArray = from(array);

    observableFromArray.subscribe({
      next: value => this.resultrxjs.push(value),
      error: err => console.error('Error:', err),
      complete: () => console.log('Completed')
    });


     this.LoadUsers(); 
     this.LoadGenders();
   }

   //cho id_gender bên users == id của genders
   getGenderName(id: string): string {
    const gender = this.genders.find(g => g.id === id);
    return gender ? gender.ten_gioitinh : '';
  }
  
  LoadGenders(): void {
    this.dataService.GetAllGenders().then(genderS => {
      this.genders = genderS;
    });
  }

  LoadUsers(): void {
    this.dataService.GetAllUsers().then(userS => {
      this.users = userS;
    });
  }
  
  onSubmit(): void {
    debugger;
    if (this.userForm.valid) {
      if (this.isEdit) {
        this.dataService.UpdateUser(this.userForm.value.id, this.userForm.value).then(() => {
          this.result = 'Cập nhật thành công!';
          this.isEdit = false;
          this.userForm.reset();
          this.LoadUsers();
        }).catch(error => {
          this.result = 'Đã xảy ra lỗi';
          console.error(error);
        });
      } else {
        this.dataService.AddUser(this.userForm.value).then(() => {
          this.result = 'Thêm mới thành công!';
          this.userForm.reset();
          this.LoadUsers();
        }).catch(error => {
          this.result = 'Đã xảy ra lỗi';
          console.error(error);
        });
      }
    }
  }

  EditUser(user: any): void {
    this.userForm.patchValue(user);
    this.isEdit = true;
    
  }

  DeleteUser(id: string): void {
    this.dataService.DeleteUser(id).then(() => {
      this.result = 'Xóa thành công!';
      this.LoadUsers();
    })
    .catch(error => {
         this.result = 'Đã xảy ra lỗi';
         console.error(error);
       });
  }


  // getAllGerder(){
  //   axios.get('http://localhost:3000/gerders')
  //   .then(res => {
  //     this.genders = res.data;
  //   })
  //   .catch(error => {
  //     this.result = 'Đã xảy ra lỗi';
  //     console.error(error);
  //   });
  // }
  // getAllUser(){
  //   axios.get('http://localhost:3000/users')
  //   .then(res => {
  //     this.users = res.data;
  //   })
  //   .catch(error => {
  //     this.result = 'Đã xảy ra lỗi';
  //     console.error(error);
  //   });
  // }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import axios from 'axios';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DataService, User } from '../data.service';

import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Thêm dòng này


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
    FormsModule,
  ],
  templateUrl: './test-form.component.html',
  styleUrl: './test-form.component.scss'

})

export class testformComponent implements OnInit {
  
  NewUser: User = { name: '', email: '', contact: '' };
  GetUser: User[] = [];
  SelectedUser: User = { id: 0, name: '', email: '', contact: ''};
  result = '';
  constructor(private dataservice: DataService) {}

  ngOnInit(): void {
    this.GetAllUser();
  }

  async CreateUser() {
    try {
      const user = await this.dataservice.CreateUser(this.NewUser);
      this.result = 'Thêm thành công.';
      this.NewUser = { name: '', email: '', contact: '' };
      this.GetAllUser();
    } catch (error) {
      this.result = 'lỏ rồi.';
      console.error('Lỗi:', error);
    }
  }

  async UpdateUser() {
    try {
      if (this.SelectedUser.id) {
        await this.dataservice.UpdateUser(this.SelectedUser.id, this.SelectedUser);
        console.log('Item updated');
        this.GetAllUser();
        this.SelectedUser = { id: 0, name: '', email: '', contact: ''}; // Reset form
      }
    } catch (error) {
      console.error('Error updating item:', error);
    }
  }

   Select(id: number) {
    const item = this.GetUser.find(item => item.id === id);
    if (item) {
      this.SelectedUser = { ...item }; 
      console.log('Selected:', this.SelectedUser);
    }
  }

  async GetAllUser() {
    try {
      this.GetUser = await this.dataservice.GetAllUser();
      console.log('Get All:', this.GetUser);
    } catch (error) {
      console.error('Lỗi:', error);
    }
  }

  // resultrxjs: number[] = [];

  // userForm: FormGroup;
  // //currentId = 1;
  // result = '';
  // users: any[] = [];
  // genders: any[] = [];
  // isEdit = false;
  // id: number = 0;
  // ids: number = this.id;
  // //pipe = new DatePipe('vi-VN');
  // today: number = Date.now();
  // isEnabled = false;



  // constructor(private fb: FormBuilder, private dataService: DataService) {
  //   this.userForm = this.fb.group({
  //     id: new FormControl(this.ids+this.id),
  //     id_user: new FormControl('', Validators.required),
  //     avatar: new FormControl(''),
  //     name: new FormControl('', Validators.required),
  //     email: new FormControl('', Validators.required || Validators.email),
  //     id_gender: new FormControl('', Validators.required),
  //     joinDate: new FormControl('', Validators.required),
  //   });
  // }

   //ngOnInit(): void {
    //  this.LoadUsers(); 
    //  this.LoadGenders();
   //}

  //  //cho id_gender bên users == id của genders
  //  getGenderName(id: string): string {
  //   const gender = this.genders.find(g => g.id === id);
  //   return gender ? gender.ten_gioitinh : '';
  // }
  
  // LoadGenders(): void {
  //   this.dataService.GetAllGenders().then(genderS => {
  //     this.genders = genderS;
  //   });
  // }

  // LoadUsers(): void {
  //   this.dataService.GetAllUsers().then(userS => {
  //     this.users = userS;
  //   });
  // }
  
  // onSubmit(): void {
  //   debugger;
  //   if (this.userForm.valid) {
  //     if (this.isEdit) {
  //       this.dataService.UpdateUser(this.userForm.value.id_user, this.userForm.value).then(() => {
  //         this.result = 'Cập nhật thành công!';
  //         this.isEdit = false;
  //         this.userForm.reset();
  //         this.LoadUsers();
  //       }).catch(error => {
  //         this.result = 'Đã xảy ra lỗi';
  //         console.error(error);
  //       });
  //     } else {
  //       this.dataService.AddUser(this.userForm.value ).then(() => {
  //         this.id++;
  //         this.result = 'Thêm mới thành công!';
  //         this.userForm.reset();
  //         this.LoadUsers();
          
  //       }).catch(error => {
  //         this.result = 'Đã xảy ra lỗi';
  //         console.error(error);
  //       });
  //     }
  //   }
  // }

  // EditUser(user: any): void {
  //   this.userForm.patchValue(user);
  //   this.isEdit = true;
    
  // }

  // DeleteUser(id: string): void {
  //   this.dataService.DeleteUser(id).then(() => {
  //     this.result = 'Xóa thành công!';
  //     this.LoadUsers();
  //   })
  //   .catch(error => {
  //        this.result = 'Đã xảy ra lỗi';
  //        console.error(error);
  //      });
  // }


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

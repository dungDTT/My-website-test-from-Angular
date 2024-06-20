import { Component } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  

import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  
  userForm!: FormGroup;

  constructor(private fb: FormBuilder){
    this.userForm = this.fb.group({
      fullname:'',
      email:'',
      contact:'',
      subjects: this.fb.array([])
    })

  }

  result = '';

  getSubjectGroup(){
    return this.fb.group({
      name: '',
      status:'',
      marks:''
    })
  }

  get subjects(){
    return this.userForm.get('subjects') as FormArray;
  }

  AddSubjects(){
    this.subjects.push(this.getSubjectGroup());
  }

  RemoveSubjects(indexAt: number){
    this.subjects.removeAt(indexAt);
  }

  onSubmit(){
    this.result = JSON.stringify(this.userForm.value);
  }

}

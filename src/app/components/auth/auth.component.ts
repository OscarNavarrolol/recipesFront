import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { user } from '../../models/users';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {

  ngOnInit(): void {
  }

  isSignIn = true;

  signForm: user = new user();

  toggleForm(formType: string): void {
    this.isSignIn = formType === 'signin';
  }

  onSignIn(): void {
    console.log('Sign In Form:', this.signForm);
  }

  onSignUp(): void {
    console.log('Sign Up Form:', this.signForm);
  }

}

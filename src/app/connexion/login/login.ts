import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
   standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginData = {
    email: '',
    password: ''
  };

  onLogin() {
    console.log('Connexion avec :', this.loginData);
    alert('Connexion réussie !');
  }

  continueWith(provider: string) {
    alert(`Connexion avec ${provider} (non connecté)`);
  }
}


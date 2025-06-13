import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-inscription',
  templateUrl: './inscription.html',
  styleUrls: ['./inscription.css'],
  imports: [CommonModule, FormsModule],
})
export class Inscription {
  user = {
    username: '',
    phone: '',
    profil: '',
    password: ''
  };

  onSubmit() {
    console.log('Inscription:', this.user);
    alert('Compte créé !');
  }

  continueWith(provider: string) {
    alert(`Connexion avec ${provider} (non connecté)`);
  }
}

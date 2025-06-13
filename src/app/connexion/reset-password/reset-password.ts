import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-reset-password',
  templateUrl: './reset-password.html',
  styleUrls: ['./reset-password.css'],
  imports: [CommonModule, FormsModule]
})
export class ResetPassword {
  resetData = {
    phone: ''
  };

  onReset() {
    console.log('Réinitialisation demandée pour :', this.resetData.phone);
    alert('Un code de réinitialisation a été envoyé (exemple)');
  }
}




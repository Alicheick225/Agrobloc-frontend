import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { PaginatorModule } from 'primeng/paginator';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';  
import { ConfirmDialogModule } from 'primeng/confirmdialog'; // <-- Ajout
           // <-- Ajout


@Component({
  selector: 'app-annonce-liste',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    TagModule,
    FormsModule,
    PaginatorModule,
    ToastModule,           // <-- Ajouté ici
    ConfirmDialogModule    // <-- Ajouté ici
  ],
  templateUrl: './annonce-liste.html',
  styleUrls: ['./annonce-liste.css'],
  providers: [ConfirmationService, MessageService]
})
export class AnnonceListe {
  first: number = 0;
  rows: number = 2;

  annonces = [
    { id: 1, nom: 'Bamboo Watch', prix: 65, categorie: 'Accessories', stock: 'INSTOCK', note: 4 },
    { id: 2, nom: 'Other Product', prix: 120, categorie: 'Electronics', stock: 'LOWSTOCK', note: 3 }
  ];
  

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  onPageChange(event: any): void {
    this.first = event.first;
    this.rows = event.rows;
    console.log('Page changed:', event);
  }

  confirmDelete(annonce: any) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete "${annonce.nom}"?`,
      header: 'Confirm Delete',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteAnnonce(annonce);
        this.messageService.add({
          severity: 'success',
          summary: 'Deleted',
          detail: 'Annonce deleted'
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Cancelled',
          detail: 'Deletion cancelled'
        });
      }
    });
  }

  deleteAnnonce(annonce: any) {
    this.annonces = this.annonces.filter(a => a.id !== annonce.id);
  }
  
}

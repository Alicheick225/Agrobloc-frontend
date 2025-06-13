import { Routes } from '@angular/router';
import { AnnonceFinancement } from './annonces/annonce-financement/annonce-financement';
import { AnnonceForm } from './annonces/annonce-form/annonce-form';
import { AnnonceListe } from './annonces/annonce-liste/annonce-liste';
import { Inscription } from './connexion/inscription/inscription';
import { Login } from './connexion/login/login';
import { ResetPassword } from './connexion/reset-password/reset-password';

export const routes: Routes = [
    {
        path: '',
        component: ResetPassword,
        title: 'liste des annonce'
      },
      {
        path: '',
        component: AnnonceForm,
        title: 'formulaire Annonce'
      },
      {
        path: '',
        component: AnnonceFinancement,
        title: 'pré-financement'
      },
];

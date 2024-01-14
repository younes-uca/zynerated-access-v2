import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import {TranslateModule} from '@ngx-translate/core';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from '@fullcalendar/angular';

import { PermissionCreateAdminComponent } from './permission/create/permission-create-admin.component';
import { PermissionEditAdminComponent } from './permission/edit/permission-edit-admin.component';
import { PermissionViewAdminComponent } from './permission/view/permission-view-admin.component';
import { PermissionListAdminComponent } from './permission/list/permission-list-admin.component';
import { DroitCreateAdminComponent } from './droit/create/droit-create-admin.component';
import { DroitEditAdminComponent } from './droit/edit/droit-edit-admin.component';
import { DroitViewAdminComponent } from './droit/view/droit-view-admin.component';
import { DroitListAdminComponent } from './droit/list/droit-list-admin.component';
import { ActionPermissionCreateAdminComponent } from './action-permission/create/action-permission-create-admin.component';
import { ActionPermissionEditAdminComponent } from './action-permission/edit/action-permission-edit-admin.component';
import { ActionPermissionViewAdminComponent } from './action-permission/view/action-permission-view-admin.component';
import { ActionPermissionListAdminComponent } from './action-permission/list/action-permission-list-admin.component';
import { PaiementAchatCreateAdminComponent } from './paiement-achat/create/paiement-achat-create-admin.component';
import { PaiementAchatEditAdminComponent } from './paiement-achat/edit/paiement-achat-edit-admin.component';
import { PaiementAchatViewAdminComponent } from './paiement-achat/view/paiement-achat-view-admin.component';
import { PaiementAchatListAdminComponent } from './paiement-achat/list/paiement-achat-list-admin.component';
import { CategorieProduitCreateAdminComponent } from './categorie-produit/create/categorie-produit-create-admin.component';
import { CategorieProduitEditAdminComponent } from './categorie-produit/edit/categorie-produit-edit-admin.component';
import { CategorieProduitViewAdminComponent } from './categorie-produit/view/categorie-produit-view-admin.component';
import { CategorieProduitListAdminComponent } from './categorie-produit/list/categorie-produit-list-admin.component';
import { ProduitCreateAdminComponent } from './produit/create/produit-create-admin.component';
import { ProduitEditAdminComponent } from './produit/edit/produit-edit-admin.component';
import { ProduitViewAdminComponent } from './produit/view/produit-view-admin.component';
import { ProduitListAdminComponent } from './produit/list/produit-list-admin.component';
import { ModelPermissionCreateAdminComponent } from './model-permission/create/model-permission-create-admin.component';
import { ModelPermissionEditAdminComponent } from './model-permission/edit/model-permission-edit-admin.component';
import { ModelPermissionViewAdminComponent } from './model-permission/view/model-permission-view-admin.component';
import { ModelPermissionListAdminComponent } from './model-permission/list/model-permission-list-admin.component';
import { AchatCreateAdminComponent } from './achat/create/achat-create-admin.component';
import { AchatEditAdminComponent } from './achat/edit/achat-edit-admin.component';
import { AchatViewAdminComponent } from './achat/view/achat-view-admin.component';
import { AchatListAdminComponent } from './achat/list/achat-list-admin.component';
import { ClientCreateAdminComponent } from './client/create/client-create-admin.component';
import { ClientEditAdminComponent } from './client/edit/client-edit-admin.component';
import { ClientViewAdminComponent } from './client/view/client-view-admin.component';
import { ClientListAdminComponent } from './client/list/client-list-admin.component';
import { AchatItemCreateAdminComponent } from './achat-item/create/achat-item-create-admin.component';
import { AchatItemEditAdminComponent } from './achat-item/edit/achat-item-edit-admin.component';
import { AchatItemViewAdminComponent } from './achat-item/view/achat-item-view-admin.component';
import { AchatItemListAdminComponent } from './achat-item/list/achat-item-list-admin.component';
import { UtilisateurCreateAdminComponent } from './utilisateur/create/utilisateur-create-admin.component';
import { UtilisateurEditAdminComponent } from './utilisateur/edit/utilisateur-edit-admin.component';
import { UtilisateurViewAdminComponent } from './utilisateur/view/utilisateur-view-admin.component';
import { UtilisateurListAdminComponent } from './utilisateur/list/utilisateur-list-admin.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations: [

    PermissionCreateAdminComponent,
    PermissionListAdminComponent,
    PermissionViewAdminComponent,
    PermissionEditAdminComponent,
    DroitCreateAdminComponent,
    DroitListAdminComponent,
    DroitViewAdminComponent,
    DroitEditAdminComponent,
    ActionPermissionCreateAdminComponent,
    ActionPermissionListAdminComponent,
    ActionPermissionViewAdminComponent,
    ActionPermissionEditAdminComponent,
    PaiementAchatCreateAdminComponent,
    PaiementAchatListAdminComponent,
    PaiementAchatViewAdminComponent,
    PaiementAchatEditAdminComponent,
    CategorieProduitCreateAdminComponent,
    CategorieProduitListAdminComponent,
    CategorieProduitViewAdminComponent,
    CategorieProduitEditAdminComponent,
    ProduitCreateAdminComponent,
    ProduitListAdminComponent,
    ProduitViewAdminComponent,
    ProduitEditAdminComponent,
    ModelPermissionCreateAdminComponent,
    ModelPermissionListAdminComponent,
    ModelPermissionViewAdminComponent,
    ModelPermissionEditAdminComponent,
    AchatCreateAdminComponent,
    AchatListAdminComponent,
    AchatViewAdminComponent,
    AchatEditAdminComponent,
    ClientCreateAdminComponent,
    ClientListAdminComponent,
    ClientViewAdminComponent,
    ClientEditAdminComponent,
    AchatItemCreateAdminComponent,
    AchatItemListAdminComponent,
    AchatItemViewAdminComponent,
    AchatItemEditAdminComponent,
    UtilisateurCreateAdminComponent,
    UtilisateurListAdminComponent,
    UtilisateurViewAdminComponent,
    UtilisateurEditAdminComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
    PaginatorModule,
    TranslateModule,
    FileUploadModule,
    FullCalendarModule,

  ],
  exports: [
  PermissionCreateAdminComponent,
  PermissionListAdminComponent,
  PermissionViewAdminComponent,
  PermissionEditAdminComponent,
  DroitCreateAdminComponent,
  DroitListAdminComponent,
  DroitViewAdminComponent,
  DroitEditAdminComponent,
  ActionPermissionCreateAdminComponent,
  ActionPermissionListAdminComponent,
  ActionPermissionViewAdminComponent,
  ActionPermissionEditAdminComponent,
  PaiementAchatCreateAdminComponent,
  PaiementAchatListAdminComponent,
  PaiementAchatViewAdminComponent,
  PaiementAchatEditAdminComponent,
  CategorieProduitCreateAdminComponent,
  CategorieProduitListAdminComponent,
  CategorieProduitViewAdminComponent,
  CategorieProduitEditAdminComponent,
  ProduitCreateAdminComponent,
  ProduitListAdminComponent,
  ProduitViewAdminComponent,
  ProduitEditAdminComponent,
  ModelPermissionCreateAdminComponent,
  ModelPermissionListAdminComponent,
  ModelPermissionViewAdminComponent,
  ModelPermissionEditAdminComponent,
  AchatCreateAdminComponent,
  AchatListAdminComponent,
  AchatViewAdminComponent,
  AchatEditAdminComponent,
  ClientCreateAdminComponent,
  ClientListAdminComponent,
  ClientViewAdminComponent,
  ClientEditAdminComponent,
  AchatItemCreateAdminComponent,
  AchatItemListAdminComponent,
  AchatItemViewAdminComponent,
  AchatItemEditAdminComponent,
  UtilisateurCreateAdminComponent,
  UtilisateurListAdminComponent,
  UtilisateurViewAdminComponent,
  UtilisateurEditAdminComponent,
  ],
  entryComponents: [],
})
export class StockAdminModule { }

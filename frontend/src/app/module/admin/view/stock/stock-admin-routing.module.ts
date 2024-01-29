
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { ActionPermissionListAdminComponent } from './action-permission/list/action-permission-list-admin.component';
import { PaiementAchatListAdminComponent } from './paiement-achat/list/paiement-achat-list-admin.component';
import { CategorieProduitListAdminComponent } from './categorie-produit/list/categorie-produit-list-admin.component';
import { ProduitListAdminComponent } from './produit/list/produit-list-admin.component';
import { AchatListAdminComponent } from './achat/list/achat-list-admin.component';
import { ClientListAdminComponent } from './client/list/client-list-admin.component';
import { ModelPermissionListAdminComponent } from './model-permission/list/model-permission-list-admin.component';
import { AchatItemListAdminComponent } from './achat-item/list/achat-item-list-admin.component';
import {UserListAdminComponent} from './utilisateur/list/user-list-admin.component';
import {ModelPermissionUserListAdminComponent} from './model-permission-utilisateur/list/model-permission-user-list-admin.component';
import {RoleListAdminComponent} from './role/list/role-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'action-permission',
                            children: [
                                {
                                    path: 'list',
                                    component: ActionPermissionListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'model-permission-user',
                            children: [
                                {
                                    path: 'list',
                                    component: ModelPermissionUserListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'paiement-achat',
                            children: [
                                {
                                    path: 'list',
                                    component: PaiementAchatListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'categorie-produit',
                            children: [
                                {
                                    path: 'list',
                                    component: CategorieProduitListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'produit',
                            children: [
                                {
                                    path: 'list',
                                    component: ProduitListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'achat',
                            children: [
                                {
                                    path: 'list',
                                    component: AchatListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'role',
                            children: [
                                {
                                    path: 'list',
                                    component: RoleListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'client',
                            children: [
                                {
                                    path: 'list',
                                    component: ClientListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'user',
                            children: [
                                {
                                    path: 'list',
                                    component: UserListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'model-permission',
                            children: [
                                {
                                    path: 'list',
                                    component: ModelPermissionListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'achat-item',
                            children: [
                                {
                                    path: 'list',
                                    component: AchatItemListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class StockAdminRoutingModule { }

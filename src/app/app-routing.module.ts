import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {
    path: 'user',
    loadChildren: './tab3/tab3.module#UserPageModule'
  }
  // { path: 'members', loadChildren: './members/members.module#MembersPageModule' },
  // { path: 'user', loadChildren: './tabs/tab3.module#UserPageModule'},
  // { path: 'user', loadChildren: './user/user.module#UserPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

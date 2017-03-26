import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { AccountPage } from '../pages/account/account';
import { MovieListPage } from '../pages/movie-list/movie-list';
import { MovieInfoPage } from '../pages/movie-info/movie-info';
import { PostListPage } from '../pages/post-list/post-list';
import { PostInfoPage } from '../pages/post-info/post-info';
import { MovieService } from '../pages/service/movie-service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SettingsPage,
    AccountPage,
    MovieListPage,
    MovieInfoPage,
    PostListPage,
    PostInfoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AccountPage,
    SettingsPage,
    MovieListPage,
    MovieInfoPage,
    PostListPage,
    PostInfoPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

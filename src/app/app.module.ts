import { PesaninboxPageModule } from './../pages/pesaninbox/pesaninbox.module';
import { TrackpemesananPageModule } from './../pages/trackpemesanan/trackpemesanan.module';

import { LoginPageModule } from './../pages/login/login.module';
import { WishlistPageModule } from './../pages/wishlist/wishlist.module';
import { ProductlistPageModule } from './../pages/productlist/productlist.module';
import { ChartPageModule } from './../pages/chart/chart.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import "hammerjs";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductlistProvider } from '../providers/productlist/productlist';
import { AuthtenticationProvider } from '../providers/authtentication/authtentication';
import { CartlistProvider } from '../providers/cartlist/cartlist';
import { ViewdetailsPageModule } from '../pages/viewdetails/viewdetails.module';
import { RealtimeapiProvider } from '../providers/realtimeapi/realtimeapi';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartPageModule,
    ProductlistPageModule,
    WishlistPageModule,
    ViewdetailsPageModule,
    LoginPageModule,
    PesaninboxPageModule,
    TrackpemesananPageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductlistProvider,
    AuthtenticationProvider,
    CartlistProvider,
    RealtimeapiProvider
  ]
})
export class AppModule {}

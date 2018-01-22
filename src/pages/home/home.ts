import { LoginPage } from './../login/login';
import { ListPage } from './../list/list';
import { ChartPage } from './../chart/chart';
import { ProductlistPage } from './../productlist/productlist';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tab1 = ProductlistPage
  tab2 = ChartPage
  tab3 = ListPage
  constructor(public navCtrl: NavController) {
    
  }
  GetChartitems(){
    //this.navCtrl.push(ChartPage);
    this.navCtrl.push(LoginPage);
  }
}

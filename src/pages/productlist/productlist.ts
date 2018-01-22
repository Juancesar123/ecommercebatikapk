import { ProductlistProvider } from './../../providers/productlist/productlist';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

/**
 * Generated class for the ProductlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productlist',
  templateUrl: 'productlist.html',
  providers:[ProductlistProvider]
})
export class ProductlistPage {
  messages$: Observable<any[]>;
  users$: Observable<any[]>;
  searchQuery: string = '';
  NewsData:Observable<any[]>;
  constructor(public ToastMessage:ToastController,public ProductService:ProductlistProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.GetDataProduct();
  }
  // messages$() {
  //   // just returning the observable will query the backend on every subscription
  //   // using some caching mechanism would be wise in more complex applications
  //   return this.feathers
  //     .service('artikel')
  //     .watch()
  //     .find();
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductlistPage');
  }
  GetDataProduct(){
    this.NewsData = this.ProductService.messages$()
    // our data is paginated, so map to .data
    .map(m => m)
    // reverse the messages array, to have the most recent message at the end
    // necessary because we get a descendingly sorted array from the data service
    .map(m => m.reverse());
    let MessageError = this.ToastMessage.create({
      message:'Network Error, Connect your internet',
      position:'bottom',
      duration:3000
    });
    // this.ArticleService.GetData().timeout(3000).subscribe((hasil)=>{
    //   this.NewsData = hasil
    // },(err)=>{
    //   MessageError.present();
    // });
  }

}

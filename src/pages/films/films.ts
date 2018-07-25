import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable'
import { FilmDetailsPage } from '../film-details/film-details';

/**
 * Generated class for the FilmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {
  films: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider) {
    this.films = this.apiProvider.getFilms();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmsPage');
  }

  openDetails(film) {
    this.navCtrl.push(FilmDetailsPage, {Film: film})
  }

}

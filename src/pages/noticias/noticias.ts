import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NOTICIAS } from '../../config/api.config';
import { Noticia } from '../../model/noticia';

/**
 * Generated class for the NoticiasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  

  noticia: Noticia[] = NOTICIAS;

  navNoticiaDetalhe(noticia : Noticia){
    this.navCtrl.push("NoticiaDetalhePage",{noticia : noticia});
  }

}


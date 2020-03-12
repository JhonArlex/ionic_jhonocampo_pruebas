import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'prueba-jhonocampo';
import { Plugins } from '@capacitor/core';

const { JhonOcampo } = Plugins;


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  executeJhonOcampo() {
    JhonOcampo.echo({value: 'plugin con jhonocampo.com'}).then(res => {
      console.log(res);
    }).catch(err => {
      console.error(err);
    })
  }

}

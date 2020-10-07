import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscaheroe',
  templateUrl: './buscaheroe.component.html',
})
export class BuscaheroeComponent implements OnInit {

  heroes:any[]=[]
  termino:string;

  constructor(private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.termino= params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);

    })
  }

}

import { Component } from '@angular/core';
import { ISuperHero } from './hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {
  pageTitle = 'SuperHero List';

  superheroes: ISuperHero[];
  filteredSuperHeroes: ISuperHero[];
  showImage = false;

  // Filter fields for 2-way binding
  attrListFilter = 'This is the initial value';

  performFilter(filterBy: string): ISuperHero[]{
      filterBy = filterBy.toLocaleLowerCase();

      return this.superheroes.filter((metaHuman: ISuperHero) => // Scans the super hero array
      metaHuman.name.toLocaleLowerCase().indexOf(filterBy) !== -1); // For every name, check if the filter exists in the name string
      // Add those that are inside the array, and those that aren't get skipped.
  }

  starEventTriggered(temp: string): void{
      this.pageTitle = temp;
  }

  get listFiler(): string {
      return this.attrListFilter;
  }

  set listFilter(temp: string){
      this.attrListFilter = temp;
      this.filteredSuperHeroes = this.attrListFilter ?
      this.performFilter(this.attrListFilter) :
      this.superheroes; // If the filter is set
      // Perform the list filter function, but if no filter set then return the default value.
  }

  toggleImage(): void {
      console.log('Button Clicked');
      this.showImage = !this.showImage;
  }

  constructor(private heroServ: HeroService){
      this.superheroes = heroServ.getCharacters();
      this.filteredSuperHeroes = this.superheroes;
  }

}

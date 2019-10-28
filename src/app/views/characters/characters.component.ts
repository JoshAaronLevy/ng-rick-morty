import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: 'characters.component.html',
  styleUrls: ['characters.component.scss'],
  providers: [
    CharactersService
  ]
})
export class CharactersComponent implements OnInit {
  loading: boolean;
  characters: any;

  constructor(
    // private sanitizer: DomSanitizer,
    // private meta: Meta,
    // private title: Title,
    private charactersService: CharactersService
  ) {}

  async ngOnInit() {
    this.loading = true;
    this.loadCharacters();
  }

  async loadCharacters() {
    this.charactersService.getCharacters().then(data => {
      this.characters = data.results;
      console.log(this.characters);
      return data;
    });
  }
}

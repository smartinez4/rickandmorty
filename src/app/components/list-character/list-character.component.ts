import { Component, OnInit, ViewChild } from '@angular/core';
import { ListCharactersService } from '../../services/list-characters.service';
import { Character } from '../../entities/Character';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-list-character',
  templateUrl: './list-character.component.html',
  styleUrls: ['./list-character.component.scss'],
  providers: [ListCharactersService],
})
export class ListCharacterComponent implements OnInit {
  characters: Character[] = [];
  favoriteList: Character[] = [];
  showFavoritesModal = false;

  constructor(private listCharacterService: ListCharactersService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters() {
    this.listCharacterService.load().subscribe((data) => {
      this.characters = data.results;
    });
  }

  applyFilterGlobal($event: Event, mode: string, table: Table) {
    table.filterGlobal(($event.target as HTMLInputElement).value, mode);
  }

  selectCharacter(character: Character) {
    let charAlreadyFav = this.favoriteList.find(
      (favChar) => favChar.id === character.id
    );
    if (!charAlreadyFav) {
      this.favoriteList.push(character);
    }
  }

  toggleModal(value: boolean) {
    this.showFavoritesModal = value;
  }
}

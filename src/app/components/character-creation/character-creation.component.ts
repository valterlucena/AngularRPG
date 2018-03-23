import { Component } from '@angular/core';
import { CharacterOptions } from '../../models/character-options';
import { GameControllerService } from '../../services/game-controller.service';

@Component({
    selector: "character-creation-component",
    templateUrl: "./character-creation.component.html",
    styleUrls: ["./character-creation.component.css"]
})
export class CharacterCreationComponent {
    constructor(private gameControllerService: GameControllerService) {}
    
    character = {
        race: '--Choose--',
        class: '--Choose--',
        gender: undefined,
        name: undefined
    }

    characterComplete: boolean = false;

    races = CharacterOptions.races;
    classes = CharacterOptions.classes;
    gender =  CharacterOptions.gender;

    changeRace(race: string) {
        this.character.race = race;
        this.checkCompleted();
    }

    changeClass(newClass: string) {
        this.character.class = newClass;
        this.checkCompleted();
    }

    changeGender(gender: string) {
        this.character.gender = gender;
        this.checkCompleted();
    }
    
    changeName() {
        this.checkCompleted();
    }

    checkCompleted() {
        this.characterComplete = this.character.race !== "--Choose--"
            && this.character.class !== "--Choose--"
            && this.character.gender
            && this.character.name
    }

    createCharacter() {
        if(!this.characterComplete) {
            return;
        }
        
        this.gameControllerService.setMainCharacter(this.character);
    }

}
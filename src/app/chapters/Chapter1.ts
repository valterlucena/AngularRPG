import { Chapter, CharacterAction, FailureOptions, SuccessOptions } from "../models/chapter";
import { Weapon, Armor, Monster, Warrior } from '../models/characters';
import { GenderOptions, RaceOptions, ClassOptions } from "../models/character-options";

export const Chapter1: Chapter = {
    story: [
        `You enter the woods, chasing after the goblin who stole your father's sword.`,
        `How do you want to approach this encounter?`
    ],
    options: [
        CharacterAction.attack,
        CharacterAction.sneak,
        CharacterAction.persuade
    ],
    enemyParty: [
        new Monster("Goblin", 5, {attack: 2, sneak: 0, persuade: 0}, {attack: 10, sneak: 10, persuade: 10}, 1, 3, "../../assets/Red_Orc.png")
    ],
    sneakPersuadeFail: CharacterAction.attack,
    ifFail: FailureOptions.nextChapter,
    ifSucceed: [
        SuccessOptions.rewardExperience,
        SuccessOptions.rewardEquipment,
        SuccessOptions.addHeroToParty
    ],
    rewards: {
        experience: 500,
        equipment: [new Weapon("Rusty Sword", 1, 6)],
    newHero: new Warrior("Benjamin", GenderOptions.male, RaceOptions.elf, 1, 10, {attack: 2, sneak: 1, persuade: 1, intelligence: 1}, new Weapon("Dagger", 1, 4), new Armor("Clothes",0))
    },
    nextChapter: null
}
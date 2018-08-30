import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Bird } from './../models/bird.model';
import { Species } from './../models/species.model';

@Injectable()
export class BirdsService {
    
    private birdListRef = this.db.list<Bird>('bird-list');
    private speciesListRef = this.db.list<Species>('species-list');
    private species: Species = {
        name: ''
    }

    constructor(private db: AngularFireDatabase) {}

    getBirdsList() {
        return this.birdListRef;
    }

    filterByString(species: string){
        return this.db.list('/bird-list', ref => ref.orderByChild('species').equalTo(species));
    }

    assembleSpeciesFilteredList(ctxt): any { 
        return(this.filterByString(ctxt));
    }
    
    addBird(bird: Bird){
        return this.birdListRef.push(bird);
    }

    addSpecies(species: Species){
        return this.speciesListRef.push(species);
    }

    getSpeciesList(){
        return this.speciesListRef;
    }

    editBird(bird: Bird){
        return this.birdListRef.update(bird.key, bird);
    }

    removeBird(bird: Bird){
        return this.birdListRef.remove(bird.key);
    }
}
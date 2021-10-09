const Park = function(name, ticket, dinosaurs){
    this.name = name;
    this.ticket = ticket;
    this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur){
    this.dinosaurs.slice(dinosaur);
}

Park.prototype.findMostLovedDinosaur = function(){
    const mostLovedDinosaur = this.dinosaurs;
    mostLovedDinosaur.sort(this.dinosaurs.guestsAttractedPerDay);
    return mostLovedDinosaur[0]
};

Park.prototype.findBySpecies = function(species){
    const bySpecies = [];
    for (const dinosaur of this.dinosaurs){
        if (dinosaur.species === species){
            bySpecies.push(dinosaur);
        }
    }
    return bySpecies;
};

module.exports = Park;
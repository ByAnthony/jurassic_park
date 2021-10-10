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

Park.prototype.totalVisitorsPerDay = function(){
    let total = 0;
    for (const dinosaur of this.dinosaurs){
        total += dinosaur.guestsAttractedPerDay
    }
    return total;
};

Park.prototype.totalVisitorsPerYear = function(){
    let total = this.totalVisitorsPerDay() * 365;
    return total;
};

Park.prototype.totalRevenueForOneYear = function(){
    let total = this.totalVisitorsPerYear() * this.ticket;
    return total;
};

Park.prototype.removeAllDinosaursOfParticularSpecies = function(species){
    const removeBySpecies = [];
    for (const dinosaur of this.dinosaurs){
        if (dinosaur.species !== species){
            removeBySpecies.push(dinosaur);
        }
    }
    return removeBySpecies;
};

Park.prototype.numberOfDinosaursByDiet = function(){
    const dinosaursByDiet = {};
    for (const dinosaur of this.dinosaurs){
        if (dinosaursByDiet[dinosaur.diet]){
            dinosaursByDiet[dinosaur.diet] += 1;
        }
        else{
            dinosaursByDiet[dinosaur.diet] = 1;
        }
    }
    return dinosaursByDiet;
};

module.exports = Park;
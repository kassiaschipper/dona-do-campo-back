import { notFoundError } from "../../errors/not-found-error.js";
import matchesRepository from "../../repositories/matches-repository.js";

async function getMatches() {
    const matches = await matchesRepository.findMatches();

    if(!matches){
        throw notFoundError();
    }
    return matches;
}

async function postMatchesData(home:string, visitor:string, date:string, time:string, court: string) {
    
    const matchesData = {
        home, 
        visitor,   
        date,
        time,
        court    
    };

    const insertMatches = await matchesRepository.insertMatchesData(matchesData);

    return insertMatches
 }

const matchesService = {
    getMatches,   
    postMatchesData
};

export default matchesService;
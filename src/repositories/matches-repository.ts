import { matches } from "@prisma/client";
import { prisma } from "../config/database.js";

async function findMatches(): Promise<matches[]> {
    return prisma.matches.findMany();
}

async function insertMatchesData(matches: CreateMatchesParams): Promise<matches> {
    return prisma.matches.create({
        data: {
            ...matches
        }
    })
}

export type CreateMatchesParams = Omit<matches, "id" >

const matchesRepository = {
    findMatches,
    insertMatchesData,
};

export default matchesRepository;
export enum Games {
    TJPP1= 'The Jackbox Party Pack 1',
    TJPP2= 'The Jackbox Party Pack 2',
    TJPP3= 'The Jackbox Party Pack 3',
    TJPP4= 'The Jackbox Party Pack 4',
    TJPP5= 'The Jackbox Party Pack 5',
    TJPP6= 'The Jackbox Party Pack 6',
    TJPP7= 'The Jackbox Party Pack 7',
    TJPP8= 'The Jackbox Party Pack 8',
    TJPP9= 'The Jackbox Party Pack 9',
};

export function getGameName(game: Games): string {
    return game;
}

export function getGameId(game: string): Games {
    for (const key in Games) {
        console.log("\"" + Games[key] + "\" : \"" + game + "\"");
        if (Games[key] === game) {
            return Games[key];
        }
    }
    return undefined;
}
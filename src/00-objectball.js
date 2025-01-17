function gameObject() {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            },
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
}


const game = gameObject()
// const players = playersObject()
const teams = Object.values(game)

function playersObject() {
    return Object.assign({}, homeTeam().players, awayTeam().players)
}

function homeTeam() {
    return gameObject().home
}

function awayTeam() {
    return gameObject().away
}

function players() {
    const game = gameObject()
    const homePlayers = game.home.players
    const awayPlayers = game.away.players

    return Object.assign({}, homePlayers, awayPlayers)

}

function numPointsScored(playerInput) {
    return players()[playerInput].points
}

function shoeSize(playerInput) {
    return players()[playerInput].shoe
}

function teamColors(teamInput) {
    console.log(teamInput)
    if (teamInput === game.home.teamName) {
        return game.home.colors
    } else if (teamInput === game.away.teamName) {
        return game.away.colors
    }
}

function teamNames(array) {
    return teams.teamName
}

function playerNumbers(teamInput) {
    let newArray = []

    for (const gameKey in game) {
        const teamObj = game[gameKey];
        const playerObj = teamObj.players
        for (const playerKey in playerObj) {
            if (teamObj.teamName === teamInput) {
                newArray.push([playerKey, playerObj[playerKey].number])
            }
        }
    }
    return newArray




    // if (teamInput === game.home.teamName) {
    //     const homePlayers = game.home.players
    //     for (const player in homePlayers) {
    //         console.log(player.number)
    //     }
    // }
}

function playerStats(playerInput) {
    return players()[playerInput]

}

function bigShoeRebounds() {
}

function mostPointsScored() {
    // Which player has the most points?
}

function winningTeam() {
    // Which team has the most points? 
    // sum the points of each team
    // return larger value
    const totalPoints = (total, currentValue) => total + currentValue
    return homePoints = homeTeam().players.points.reduce(totalPoints)
}

function playerWithLongestName() {
    //Which player has the longest name?
    //
}

function doesLongNameStealATon() {
    // Write a function that returns true if the player with the longest name had the most steals. 
}















    //     const playerArrays = Object.entries(players())

    //     const player = playerArrays.find(playerArray => playerArray[0] === playerInput)
    //     return player[1].points
    // }

    // function numPointsScored(playerInput) {
    //     const playerArrays = Object.entries(players())
    //     let points
    //     playerArrays.forEach(playerArray => {
    //         if (playerArray[0] === playerInput) {
    //             points = playerArray[1].points
    //         }
    //     })
    //     return points
    // }

    //     for (const playerName in players()) {
    //         if (playerName === playerInput) {
    //             return players()[playerName].points
    //         }
    //     }
    // }


    // function numPointsScored(playerInput) {
    //     const game = gameObject()
    //     const homePlayers = game.home.players
    //     const awayPlayers = game.away.players

    //     const players = Object.assign({}, homePlayers, awayPlayers)
    //     // const players = {...homePlayers, ...awayPlayers}

    //     for (const playerName in players) {
    //         if (playerName === playerInput) {
    //             return players[playerName].points
    //         }
    //     }
    // }


    // function shoeSize(playerName) {
    //     const game = gameObject()
    //     for (const gameKey in game) {
    //         const teamObj = game[gameKey]
    //         for (const teamKey in teamObj) {
    //             const playerObj = teamObj.players
    //             for (const playerKey in playerObj) {
    //                 if (playerKey === playerName) {
    //                     return playerObj[playerKey].shoe
    //                 }
    //             }
    //         }
    //     }

    // }

// let oo = { foo: 42, bar: 83, baz: 79 };
// for (let key in oo) {
//     let value = oo[key];
//     console.log("key:", key, "value:", value);
// }



// console.log(shoeSize('Reggie Evans'));


// function teamColors(nameOfTeam) {
//     const game = gameObject()
//     for (const gameKey in game) {
//         const teamObj = game[gameKey]
//         for (const teamKey in teamObj) {
//             if (teamObj.teamName === nameOfTeam) {
//                 return teamObj.colors
//             }
//         }
//     }
// }


// function teamColors(nameOfTeam) {
//     const game = gameObject();
//     for (let gameKey in game) {
//         let teamObject = game[gameKey];
//         if (teamObject.teamName === nameOfTeam) {
//             return teamObject.colors;
//         }
//     }
// }

// function teamColors(teamName) {
//     const game = gameObject()
//     for (const gameKey in game) {
//         const teamObj = game[gameKey]
//         if (teamName)
//     }
// }


// function numPointsScored(playerName) {
//     const game = gameObject()
//     for (const gameKey in game) {
//         const teamObj = game[gameKey]
//         const playerObj = teamObj.players
//         for (const playerKey in playerObj) {
//             if (playerKey === playerName) {
//                 return playerObj[playerKey].points
//             }
//         }
//     }
// }


// console.log(gameObject())


// function homeTeamName() {
//     let object = gameObject()
//     return object['home']['teamName']
// }



// function homeTeamName() {
//     return gameObject()['home']['teamName']

// console.log(homeTeamName())



// console.log(numPointsScored('Ben Gordon'))

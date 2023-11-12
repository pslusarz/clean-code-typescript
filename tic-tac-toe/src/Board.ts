export class Board {

    players = ["X", "O"]
    playerIndex = 0
    playerStones = new Map<string, number[]>([["X", new Array<number>()], ["O", new Array<number>()]]);
    gameOver = false
    winner: string | undefined

    winningPositions = [
        JSON.stringify([1, 2, 3]),
        JSON.stringify([4, 5, 6]),
        JSON.stringify([7, 8, 9]),
        JSON.stringify([1, 4, 7]),
        JSON.stringify([2, 5, 8]),
        JSON.stringify([3, 6, 9]),
        JSON.stringify([1, 5, 9]),
        JSON.stringify([3, 5, 7]),
    ]

    playerToMove() {
        return this.players[this.playerIndex];
    }

    move(number: number) {
        let currentPlayerStones = this.playerStones.get(this.players[this.playerIndex])!
        currentPlayerStones.push(number)
        if (this.winningPositions.includes(JSON.stringify(currentPlayerStones.sort()))) {
            this.gameOver = true
            this.winner = this.players[this.playerIndex]
        }
        this.playerIndex = (this.playerIndex + 1) % this.players.length
    }

}

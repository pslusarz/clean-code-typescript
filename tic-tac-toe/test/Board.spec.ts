import {Board} from "../src/Board";

it("make alternating moves", () => {
    let board = new Board()
    expect(board.playerToMove()).toBe("X")
    board.move(5)
    expect(board.playerToMove()).toBe("O")
    expect(board.playerStones.get("X")).toEqual([5])
    board.move(1)
    expect(board.playerToMove()).toBe("X")
    expect(board.playerStones.get("O")).toEqual([1])
})

it("victory condition", () => {
    let board = new Board()
    expect(board.gameOver).toBe(false)
    board.move(1)
    board.move(4)
    board.move(2)
    board.move(5)
    board.move(3)
    expect(board.gameOver).toBe(true)
    expect(board.winner).toBe("X")
})

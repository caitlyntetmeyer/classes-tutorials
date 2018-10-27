class Game {
	constructor(board, players, ready) {
		this.board = new Board();
		this.players = createPlayers();
		this.ready = false;
	}

	/** 
	 * Creates two player objects
	 * @return  {Array}    An array of two Player objects.
	 */

	createPlayers(name, color, id, active) {
		name: "Player 1",
		color: "e15258",
		id: 1,
		active: true
	}
}
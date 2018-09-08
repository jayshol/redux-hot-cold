export const NEW_GAME = 'NEW_GAME';
export const newGame = correctAnswer => ({
	type: NEW_GAME,
	correctAnswer
});

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = guess => ({
	type: MAKE_GUESS,
	guess
});
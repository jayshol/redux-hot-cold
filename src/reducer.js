import {NEW_GAME, MAKE_GUESS} from './action';

const initialState = {
	guesses : [],
	feedback: 'Make a guess.',
	correctAnswer:Math.round(Math.random() * 100) + 1
}

export const gameReducer = (state=initialState, action) => {
	
	if(action.type === NEW_GAME){
		return Object.assign({}, state, {
			guesses : [],
			feedback: 'Make a guess.',
			correctAnswer: action.correctAnswer
		});
	}

	if(action.type === MAKE_GUESS){
		let feedback, guess;
        guess = parseInt(action.guess, 10);
        if (isNaN(guess)) {
            feedback = 'Please enter a valid number.';
            return Object.assign({}, state, {
                feedback,
                guesses: [...state.guesses, guess]
            });
        }

        const difference = Math.abs(guess - state.correctAnswer);

        if (difference >= 50) {
            feedback = "You're Ice Cold...";
        } else if (difference >= 30) {
            feedback = "You're Cold...";
        } else if (difference >= 10) {
            feedback = "You're Warm.";
        } else if (difference >= 1) {
            feedback = "You're Hot!";
        } else {
            feedback = 'You got it!';
        }

        return Object.assign({}, state, {
            feedback,
            guesses: [...state.guesses, guess]
        });

	}

	return state;
}
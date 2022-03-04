const getInstruction = (gameName) => INSTRUCTIONS[gameName];

const INSTRUCTIONS = {
  "Bulls and Cows": {
    "how to play": [
      "Eact turn you can guess 4 colors",
      "You can delete your last guess with the left arrow icon",
      "After you finish, click on the V icon to end the turn",
      "when you end the turn, you will see the results for your guesses",
      "blue pin, means the color exist, but not in the place you chose",
      "red pin, means the color exist and you put it in the right place",
    ],
    "how to win": [
      "Guess the color exists in each place",
      "You have 12 turn to guess it",
    ],
  },
};

export default getInstruction;

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

@system = GameBase::SystemProperty.create(
  main_name:        'Mahaga',
  main_caption:     'THE LADDER of CLASSICAL GAMES',
  main_description: 'Collection of games, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est '
)

@system.games.create(
  label:           'Never Lucky TicTacToe',
  name:            'TicTacToe',
  wikipedia_query: 'Tic-tac-toe',
  description:     'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
)

@system.games.create(
  label:           'Sudoku',
  name:            'Sudoku',
  wikipedia_query: 'Sudoku',
  description:     'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
)


game = GameBase::Game.find(1)
game.settings = {
  sizeOptions: [
    [3, "3x3"],
    [4, "4x4"],
    [5, "5x5"],
    [6, "6x6"],
    [7, "7x7"]
  ],
  startsOptions: [
    ["computer", "Computer"],
    ["human",    "You"]
  ],
  matchStarts: "human",
  matchSize: 3
}
game.save

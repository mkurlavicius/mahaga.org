# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# @system = GameBase::SystemProperty.create(
#   main_name:        'Mahaga',
#   main_caption:     'THE LADDER of CLASSICAL GAMES',
#   main_description: 'Collection of classical games like TicTacTao, Sudoku, Chess, Draughts, Solitaire and many more to come as the idea expands. 
#   Playable against a computer or human opponent(s) with the same level of experience. '
# )

# @system.games.create(
#   label:           'TicTacToe',
#   name:            'TicTacToe',
#   wikipedia_query: 'Tic-tac-toe',
#   description:     'Tic-tac-toe, noughts and crosses, or Xs and Os is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.'
# )


# game = GameBase::Game.find(1)


# game.settings = {
#   sizeOptions: [
#     [3, "3x3"],
#     [4, "4x4"],
#     [5, "5x5"],
#     [6, "6x6"],
#   ],
#   startsOptions: [
#     ["computer", "Computer"],
#     ["human",    "You"]
#   ],
#   matchStarts: "human",
#   matchSize: 3
# }
# game.save

game = GameBase::Game.first
a.picture.attach(
  io: File.open("/home/mindaugas/good.png"),
  filename: "good.png"
)

# Emotion.all.each do |emotion|
#   emotion.face.attach(
#     io:       File.open("/home/mindaugas/emotion_faces/#{emotion.name}.png"), 
#     filename: "#{emotion.name}.png"
#   )
# end
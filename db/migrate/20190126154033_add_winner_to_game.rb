class AddWinnerToGame < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :winner, :integer, default: 0
  end
end
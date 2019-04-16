class RenamePlayersIds < ActiveRecord::Migration[5.2]
  def change
    rename_column :games, :player_id, :user_id
  end
end
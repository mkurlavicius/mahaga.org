class RenameGamesToMatches < ActiveRecord::Migration[5.2]
  def change
    rename_table :games, :matches
    rename_column :moves, :game_id, :match_id
    rename_column :squares, :game_id, :match_id
    #Ex:- rename_column("admin_users", "pasword","hashed_pasword")
    #Ex:- rename_column("admin_users", "pasword","hashed_pasword")
  end
end

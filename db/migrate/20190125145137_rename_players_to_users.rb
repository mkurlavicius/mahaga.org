class RenamePlayersToUsers < ActiveRecord::Migration[5.2]
  def change
    rename_table :players, :users
  end
end

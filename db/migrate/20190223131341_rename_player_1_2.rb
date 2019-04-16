class RenamePlayer12 < ActiveRecord::Migration[5.2]
  def change
    rename_column :matches, :player_1, :first_player_type
    rename_column :matches, :player_2, :second_player_type

    add_column :games, :label, :string
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end

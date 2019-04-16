class AddTypesToModels < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :type, :string
    add_column :moves, :type, :string
    add_column :squares, :type, :string
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end

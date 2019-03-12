class AddMoreStatusColumns < ActiveRecord::Migration[5.2]
  def change
    change_column :games, :started_by, :integer, :default => 0
    add_column    :games, :goes,       :integer, :default => 0
  end
end
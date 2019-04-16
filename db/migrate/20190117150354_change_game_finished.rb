class ChangeGameFinished < ActiveRecord::Migration[5.2]
  def change
    remove_column :games, :finished
    add_column :games, :status, :integer, :default => 0
  end
end

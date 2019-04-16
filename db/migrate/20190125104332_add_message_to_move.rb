class AddMessageToMove < ActiveRecord::Migration[5.2]
  def change
    add_column :moves, :message, :string
  end
end
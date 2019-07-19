class AddWinCondition < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :win_condition, :text
  end
end

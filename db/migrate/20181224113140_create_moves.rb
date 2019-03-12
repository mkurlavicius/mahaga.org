class CreateMoves < ActiveRecord::Migration[5.2]
  def change
    create_table   :moves do |t|
      t.string     :as_string
      t.integer    :number, :default => 0
      t.integer    :x
      t.integer    :y
      t.integer    :player
      t.belongs_to :game
      t.timestamps
    end
  end
end

class CreateSquares < ActiveRecord::Migration[5.2]
  def change
    create_table   :squares do |t|
      t.integer    :x
      t.integer    :y
      t.integer    :status,  :default => 0
      t.boolean    :winning, :default => false
      t.belongs_to :game
    end
  end
end

class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table   :games do |t|
      t.integer    :started_by
      t.integer    :size,     :default => 3
      t.boolean    :finished, :default => false
      t.belongs_to :player
      t.timestamps
    end
  end
end

class CreateGameBaseSystemProperties < ActiveRecord::Migration[5.2]
  def change
    create_table    :system_properties do |t|
      t.string      :main_caption
      t.string      :main_name
      t.text        :main_description
      t.timestamps
    end

    change_table :games do |t|
      t.belongs_to :system_properties
    end
  end
end

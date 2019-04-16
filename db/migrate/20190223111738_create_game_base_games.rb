class CreateGameBaseGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string   :name
      t.text     :description
      t.timestamps
    end

    create_table :subscriptions do |t|
      t.belongs_to :game
      t.belongs_to :user
      t.timestamps
    end

    change_table :matches do |t|
      t.belongs_to :game
      t.belongs_to :first_player
      t.belongs_to :second_player
    end

    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end

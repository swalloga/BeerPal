class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :user_id, null: false
      t.integer :bar_beer_id, null: false
      t.time :time

      t.timestamps
    end
    add_index :reservations, :user_id
    add_index :reservations, :bar_beer_id
  end
end

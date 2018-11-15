class CreateBarBeers < ActiveRecord::Migration[5.2]
  def change
    create_table :bar_beers do |t|
      t.integer :bar_id, null: false
      t.integer :beer_id, null: false
      t.date :date, null: false

      t.timestamps
    end
    add_index :bar_beers, :bar_id, unique: true
    add_index :bar_beers, :beer_id, unique: true
  end
end

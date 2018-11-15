class AddUniquenessBarBeers < ActiveRecord::Migration[5.2]
  def change
    add_index :bar_beers, [:bar_id, :date], unique: true
  end
end

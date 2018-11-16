class UpdateIndexBarBeer < ActiveRecord::Migration[5.2]
  def change
    remove_index :bar_beers, :bar_id
    remove_index :bar_beers, :beer_id
  end
end

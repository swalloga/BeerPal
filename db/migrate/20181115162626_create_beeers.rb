class CreateBeeers < ActiveRecord::Migration[5.2]
  def change
    create_table :beers do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.float :price, null: false
      t.float :abv, null: false
      t.string :image_url

      t.timestamps
    end

  end
end

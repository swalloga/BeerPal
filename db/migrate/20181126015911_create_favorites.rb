class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.integer :user_id, null:false
      t.integer :bar_id, null:false

      t.timestamps
    end
    add_index :favorites, :user_id
    add_index :favorites, :bar_id
    add_index :favorites, [:user_id, :bar_id], unique: true
  end
end

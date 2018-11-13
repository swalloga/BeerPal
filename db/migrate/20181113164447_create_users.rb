class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null:false
      t.string :name, null:false
      t.integer :beer_allowance, null:false
      t.string :preferred_city, null:false
      t.string :company_name
      t.string :image_url
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
    end
    add_index :users, :session_token, unique: true
    add_index :users, :username, unique: true
  end
end

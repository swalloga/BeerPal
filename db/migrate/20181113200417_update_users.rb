class UpdateUsers < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :beer_allowance, :integer, {default: 0, null: false}
    change_column :users, :preferred_city, :string, {default: "New York", null: false}
  end
end

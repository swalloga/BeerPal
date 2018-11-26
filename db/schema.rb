# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_11_26_015911) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bar_beers", force: :cascade do |t|
    t.integer "bar_id", null: false
    t.integer "beer_id", null: false
    t.date "date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["bar_id", "date"], name: "index_bar_beers_on_bar_id_and_date", unique: true
  end

  create_table "bars", force: :cascade do |t|
    t.string "name", null: false
    t.string "address", null: false
    t.float "latitude", null: false
    t.float "longitude", null: false
    t.integer "city_id", null: false
    t.index ["city_id"], name: "index_bars_on_city_id"
  end

  create_table "beers", force: :cascade do |t|
    t.string "name", null: false
    t.string "description", null: false
    t.float "price", null: false
    t.float "abv", null: false
    t.string "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "cities", force: :cascade do |t|
    t.string "name", null: false
    t.float "latitude"
    t.float "longitude"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "favorites", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "bar_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["bar_id"], name: "index_favorites_on_bar_id"
    t.index ["user_id", "bar_id"], name: "index_favorites_on_user_id_and_bar_id", unique: true
    t.index ["user_id"], name: "index_favorites_on_user_id"
  end

  create_table "reservations", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "bar_beer_id", null: false
    t.time "time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["bar_beer_id"], name: "index_reservations_on_bar_beer_id"
    t.index ["user_id"], name: "index_reservations_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "name", null: false
    t.integer "beer_allowance", default: 0, null: false
    t.string "preferred_city", default: "New York", null: false
    t.string "company_name"
    t.string "image_url"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end

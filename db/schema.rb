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

ActiveRecord::Schema.define(version: 2019_07_17_161545) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "games", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "label"
    t.string "wikipedia_query"
    t.bigint "system_properties_id"
    t.json "settings"
    t.text "win_condition"
    t.index ["system_properties_id"], name: "index_games_on_system_properties_id"
  end

  create_table "matches", force: :cascade do |t|
    t.integer "started_by", default: 0
    t.integer "size", default: 3
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "status", default: 0
    t.integer "goes", default: 0
    t.integer "first_player_type"
    t.integer "second_player_type"
    t.integer "winner", default: 0
    t.string "type"
    t.bigint "game_id"
    t.bigint "first_player_id"
    t.bigint "second_player_id"
    t.index ["first_player_id"], name: "index_matches_on_first_player_id"
    t.index ["game_id"], name: "index_matches_on_game_id"
    t.index ["second_player_id"], name: "index_matches_on_second_player_id"
    t.index ["user_id"], name: "index_matches_on_user_id"
  end

  create_table "moves", force: :cascade do |t|
    t.string "as_string"
    t.integer "number", default: 0
    t.integer "x"
    t.integer "y"
    t.integer "player"
    t.bigint "match_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "message"
    t.string "type"
    t.index ["match_id"], name: "index_moves_on_match_id"
  end

  create_table "squares", force: :cascade do |t|
    t.integer "x"
    t.integer "y"
    t.integer "status", default: 0
    t.boolean "winning", default: false
    t.bigint "match_id"
    t.string "type"
    t.index ["match_id"], name: "index_squares_on_match_id"
  end

  create_table "subscriptions", force: :cascade do |t|
    t.bigint "game_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id"], name: "index_subscriptions_on_game_id"
    t.index ["user_id"], name: "index_subscriptions_on_user_id"
  end

  create_table "system_properties", force: :cascade do |t|
    t.string "main_caption"
    t.string "main_name"
    t.text "main_description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end

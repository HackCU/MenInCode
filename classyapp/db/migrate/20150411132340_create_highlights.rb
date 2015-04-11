class CreateHighlights < ActiveRecord::Migration
  def change
    create_table :highlights do |t|
      t.references :assignment, index: true, foreign_key: true
      t.string :text
      t.integer :upvotes
      t.integer :downvotes

      t.timestamps null: false
    end
  end
end

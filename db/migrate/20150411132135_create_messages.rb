class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.references :assignment, index: true, foreign_key: true
      t.string :text

      t.timestamps null: false
    end
  end
end

class CreateAssignments < ActiveRecord::Migration
  def change
    create_table :assignments do |t|
      t.references :course, index: true, foreign_key: true
      t.string :name

      t.timestamps null: false
    end
  end
end

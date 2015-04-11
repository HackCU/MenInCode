class CreateSchools < ActiveRecord::Migration
  def change
    create_table :schools do |t|
      t.string :short
      t.string :city

      t.timestamps null: false
    end
  end
end

class CreateCloths < ActiveRecord::Migration[6.1]
  def change
    create_table :cloths do |t|
      t.string :item
      t.string :size
      t.string :color
      t.string :description
      t.belongs_to :style, null: false, foreign_key: true

      t.timestamps
    end
  end
end

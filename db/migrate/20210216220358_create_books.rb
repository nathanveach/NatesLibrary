class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.boolean :isReference, null: false, default: false

      t.timestamps
    end
  end
end

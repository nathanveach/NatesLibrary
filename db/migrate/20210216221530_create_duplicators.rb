class CreateDuplicators < ActiveRecord::Migration[6.1]
  def change
    create_table :duplicators do |t|
      t.integer :reference_id
      t.integer :duplicate_id

      t.timestamps
    end
  end
end

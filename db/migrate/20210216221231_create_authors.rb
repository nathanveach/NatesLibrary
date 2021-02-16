class CreateAuthors < ActiveRecord::Migration[6.1]
  def change
    create_table :authors do |t|
      t.string :fullName, null: false

      t.timestamps
    end
    # Here I'm creating the joined table between authors and books
    # The id: false is because we don't need a model folder to add any logic to
    # with has_and_belongs_to_many 
    create_table :authors_books, id: false do |t|
      t.belongs_to :book
      t.belongs_to :author
    end
  end
end

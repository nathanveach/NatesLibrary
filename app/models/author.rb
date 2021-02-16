class Author < ApplicationRecord
  # This is my first time using this relationship, but it seems to fit the bill
  # as long as you don't need any logic added to the joined table..
  # Usually I would use something like:
  #    has_many :models, through: :joinedTable for many to many relationships

  has_and_belongs_to_many :books
end

class Duplicator < ApplicationRecord
  # Many to One relationship books can only have one reference
  # Searches table for :reference_id then matches id with Book
  belongs_to :reference, foreign_key: :reference_id, class_name: "Book"

  # Many to Many relationship many books can have many duplicates
  belongs_to :duplicates, foreign_key: :duplicate_id, class_name: "Book"
end

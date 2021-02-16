class Book < ApplicationRecord
  has_and_belongs_to_many :authors
  # Returns an array of Duplicators with matching reference_id's
  has_many :all_duplicates, foreign_key: :reference_id, class_name: "Duplicator"
  # Returns array of Books matching duplicate_id's 
  has_many :duplicates, through: :all_duplicates, source: :duplicates

  # Returns a Duplicator record with matching duplicate_id
  has_one :referencer, foreign_key: :duplicate_id, class_name: "Duplicator" 
  has_one :reference, through: :referencer, source: :reference
end

class MostLobbiedBill < ApplicationRecord
  has_and_belongs_to_many :companies
end

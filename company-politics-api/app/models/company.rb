class Company < ApplicationRecord
  has_and_belongs_to_many :share_holders
  has_and_belongs_to_many :top_recipients
  has_and_belongs_to_many :most_lobbied_bills
end

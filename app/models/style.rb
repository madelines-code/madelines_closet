class Style < ApplicationRecord
  has_many :cloths, dependent: :destroy
end

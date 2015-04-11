class School < ActiveRecord::Base

	accepts_nested_attributes_for :courses
end

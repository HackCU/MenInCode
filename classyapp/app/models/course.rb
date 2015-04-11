class Course < ActiveRecord::Base
  belongs_to :school

	def to_param
		name
	end

  def self.find_by_param(input)
    find_by_name(input)
  end

end

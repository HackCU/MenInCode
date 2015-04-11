class School < ActiveRecord::Base

	def to_param
		[short, city].join("-")
	end

  def self.find_by_param(input)
    find_by_name(input)
  end

end

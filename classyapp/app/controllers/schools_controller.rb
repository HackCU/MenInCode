class SchoolsController < ApplicationController

	def index
		@school = School.new
		@course = Course.new
	end

	def show
	end

	def new
	end

	def edit
	end

	def create
		@school = School.find_or_create_by(school_params)
		@course = Course.find_or_create_by(class_params)
		redirect_to school_path
	end

	def update
	end

	def destroy
	end

	private
		def school_params
			params.require(:school).permit(:short, :city)
		end

		def class_params
			params.require(:school).permit(:course)
		end

end

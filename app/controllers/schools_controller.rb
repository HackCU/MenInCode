class SchoolsController < ApplicationController

	def index
	end

	def show
		@school = School.find(params[:id])
	end

	def new
		@school = School.new
		@course = Course.new
	end

	def edit
	end

	def create
		@school = School.find_or_create_by(school_params)
		@course = Course.where(:school_id => @school.id, :name => params[:school][:name]).first_or_create
		redirect_to [@school, @course]
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
			params.require(:school).permit(:name)
		end

end

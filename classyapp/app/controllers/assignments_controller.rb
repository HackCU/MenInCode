class AssignmentsController < ApplicationController

	def index
        @ass = Assignment.all
	end

	def show
        @ass = Assignment.find(params[:id])
		@course = Course.find(params[:course_id])
		@school = School.find(params[:school_id])
	end

	def new
		@ass = Assignment.new
	end

	def edit
	end

	def create
		@school = School.find(params.require(:school_id) )
		@course = Course.find(params.require(:course_id) )
		@ass = Assignment.find_or_create_by(ass_params)
		redirect_to [@school, @course, @ass]
		#redirect_to [@school, @course, @ass]
	end

	def update
	end

	def destroy
	end

	private
		def ass_params
			params.require(:assignment).permit(:name)
		end

end

class CoursesController < ApplicationController

	def index
		@ass = Assignment.all
	end

	def show
		#binding.pry
        @ass = Assignment.where(course_id: params[:id])
		@course = Course.find(params[:id])
		@school = School.find(params[:school_id])
	end

	def new
        @ass = Assignment.new
	end

	def edit
	end

	def create
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
  

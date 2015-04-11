class CoursesController < ApplicationController

	def index
		@ass = Assignment.all
	end

	def show
        @ass = Assignment.find_by_course_id(params[:id])
	end

	def new
        @ass = Assignment.new
	end

	def edit
	end

	def create
        @ass = Assignment.new(ass_params)

        if @ass.save
            redirect_to @ass
        else
            render 'new'
        end
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
  

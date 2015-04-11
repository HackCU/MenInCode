class CoursesController < ApplicationController

	def index
		@assignemnts = Assignment.all
	end

	def show
        @assignment = Assignment.find(params[:id])
	end

	def new
        @assignment = Assignment.new
	end

	def edit
	end

	def create
        @assignment = Assignment.new(assignment_params)

        if @assignment.save
            redirect_to @assignment
        else
            render 'new'
        end
	end

    

	def update
	end

	def destroy
	end

    private
        def assignment_params
            params.require(:assignment).permit(:name)
        end
end
  

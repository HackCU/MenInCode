class AssignmentsController < ApplicationController

	def index
        @assignments = Assignment.all
	end

	def show
        @assignment = Assignment.find(params[:id])
	end

	def new
	end

	def edit
	end

	def create
	end

	def update
	end

	def destroy
	end

end

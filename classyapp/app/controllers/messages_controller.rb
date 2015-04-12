class MessagesController < ApplicationController

	def index
	end

	def show
		@message = Message.find(params[:id])
	end

	def new
		@message = Message.new
	end

	def edit
	end

	def create
		@message = Message.new(params.require(:message).permit(:text))
		if @message.save
			render status: 200
		else 
			render status: 500
		end
	end

	def update
	end

	def destroy
	end

end

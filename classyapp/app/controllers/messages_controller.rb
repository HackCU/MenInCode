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
			render json: @message
		else 
			render json: @message
		end
	end

	def update
	end

	def destroy
	end

end

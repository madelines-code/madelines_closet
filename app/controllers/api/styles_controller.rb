class Api::StylesController < ApplicationController
before_action :set_style, only: [:show, :destroy, :update]

def index
  render json: Style.all 
end

def show
  render json: @style 
end

def create
  @style = Style.new(style_params)
  if(@style.save) 
    render json: @style
  else
    render json: { errors: @style.errors }, status: 422
  end
end

def update  
  if(@style.update(style_params))
    render json: @style 
  else
    render json: { errors: @style.errors }, status: 422
  end
end

def destroy
  render json: @style.destroy 
end

private

def style_params
  params.require(:style).permit(:name, :quantity)
end


def set_style
  @style = Style.find(params[:id])
end

end

class Api::ClothsController < ApplicationController
  before_action :set_style
  before_action :set_cloth, only: [:show, :update, :destroy]

  def index
    render json: @style.cloths
  end

  def show
    render json: @cloth
  end

  def create
    @cloth = @style.cloths.new(cloth_params)

    if (@cloth.save)
      render json: @cloth
    else
      render json: { errors: @cloth.errors }, status: 422
    end
  end

  def update
    if (@cloth.update(cloth_params))
      render json: @cloth
    else
      render json: { errors: @cloth.errors }, status: 422
    end
  end

  def destroy
    render json: @cloth.destroy
  end

  private

  def cloth_params
    params.require(:cloth).permit(:item, :size, :color, :description)
  end

  def set_style
    @style = Style.find(params[:style_id])
  end

  def set_cloth
    @cloth = @style.cloths.find(params[:id])
  end

end

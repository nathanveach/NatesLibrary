class Api::V1::AuthorsController < ApplicationController
  
  def index 
    authors = Author.all.order(:fullName) 
    render json: authors
  end

  def show
    author = Author.find(params[:id])
    if author
      render json: author, include: :books
    else
      render json: author.errors
    end
  end
  
end
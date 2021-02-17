class AuthorController < ApplicationController
  
  def index 
    authors = Author.all 
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
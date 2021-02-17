class BooksController < ApplicationController
  
  def index
    books = Book.all 
    render json: books
  end

  def show
    book = Book.find(params[:id])
    if book
      render json: book, include: [:authors, :duplicates, :reference]
    else
      render json: book.errors
    end
  end

  def referenceList
    references = Book.where(isReference: true)
    render json: references 
  end
  
end
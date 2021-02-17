class DuplicatorController < ApplicationController

  def makeDuplicate
    book = Book.find(params[:id])
    book.update!(isReference: false)
    
    # Moves all of book's duplicates to the new reference
    duplicates = Duplicator.where(reference_id: book.id)
    duplicates.update_all(reference_id: params[:reference_id])
   
    # Saves the link between this book and it's new reference
    if Duplicator.create!(reference_id: params[:reference_id], duplicate_id: book.id)
      render json: book
    else
      render json: book.errors
    end
  end

  def changeReference
    book = Book.find(params[:id])
    duplicator = Duplicator.where(duplicate_id: book_id)
    if duplicator.update!(reference_id: params[:reference_id])
      render json: book
    else
      render json: book.errors
    end
  end

  def makeReference
    book = Book.find(params[:id])

    # Deletes book's reference if any
    duplicates = Duplicator.find_by(duplicate_id: book.id)
    duplicates&.destroy

    book.isReference = true
    if book.save!
      render json: book
    else
      render json: book.errors
    end
  end
end
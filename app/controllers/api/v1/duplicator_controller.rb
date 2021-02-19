class Api::V1::DuplicatorController < ApplicationController
  
  def makeDuplicate
    book = Book.find(params[:id])
    referenceBook = Book.find(params[:reference_id])
    # Moves all of book's duplicates to the new reference
    duplicates = Duplicator.where(reference_id: book.id)
    duplicates.update_all(reference_id: params[:reference_id])
   
    # Saves the link between this book and it's new reference
    if Duplicator.find_or_create_by(reference_id: params[:reference_id], duplicate_id: book.id)
      book.update!(isReference: false)
      referenceBook.update!(isReference: true)
      render json: book, include: [:authors, :duplicates, :reference]
    else
      render json: book
    end
  end

  def changeReference
    book = Book.find(params[:id])
    duplicator = Duplicator.find_by(duplicate_id: book.id)

    if duplicator.update(reference_id: params[:reference_id])
      render json: book, include: [:authors, :duplicates, :reference]
    else
      render json: book
    end
  end

  def makeReference
    book = Book.find(params[:id])

    # Deletes book's reference if any
    duplicates = Duplicator.find_by(duplicate_id: book.id)
    duplicates&.destroy

    book.isReference = true
    if book.save!
      render json: book, include: [:authors, :duplicates, :reference]
    else
      render json: book.errors
    end
  end
end
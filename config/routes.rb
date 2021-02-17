Rails.application.routes.draw do
 
  namespace :api do
    namespace :v1 do
      get 'authors/index'
      get 'authors/:id', to: 'authors#show'
      get 'books/index'
      get 'books/:id', to: 'books#show'
      get 'books/references', to: 'books#referenceList'
      post 'duplicator/create/:id', to: 'duplicator#makeDuplicate'
      patch 'duplicator/update/:id', to: 'duplicator#changeReference'
      delete 'duplicator/destroy/:id', to: 'duplicator#makeReference'
    end
  end
  
  root 'homepage#index'
  get '*path', to: 'homepage#index'
end

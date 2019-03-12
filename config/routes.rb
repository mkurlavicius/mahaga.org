Rails.application.routes.draw do
  
  resources :pages, only: :index

  resource :system_properties, only: :show
  
  resources :games, only: [:show, :index], constraints: { format: 'json' } do
    resources :matches, except: [:edit, :update], constraints: { format: 'json' } do
      resources :moves, except: [:edit, :update, :destroy], constraints: { format: 'json' }
    end
  end
  
  root to: "pages#index"
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

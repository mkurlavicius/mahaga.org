Rails.application.routes.draw do
  mount ActionCable.server => "/cable"
  
  resources :pages,             only: :index
  resource  :system_properties, only: :show
  
  resources :games,       only:   [:show, :index],            constraints: { format: 'json' } do
    resources :matches,   except: [:edit, :update],           constraints: { format: 'json' } do
      resources :squares, only:   [:index, :show],            constraints: { format: 'json' }
      resources :moves,   except: [:edit, :update, :destroy], constraints: { format: 'json' }
    end
  end
  
  root to: "pages#index"
  get '*path', to: 'pages#index', constraints: { format: 'html' }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

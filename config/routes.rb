Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :beers, only: [:create, :update, :destroy]
    resources :bars, only: [:create, :update, :destroy]
    resources :barbeers, only: [:create, :update, :destroy]
    resources :cities, only: [:create]
  end
end

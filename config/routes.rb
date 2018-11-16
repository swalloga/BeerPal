Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :beers do
      get 'bar_beers' => 'bar_beers#index_by_beer'
    end
    resources :bars do
      get 'bar_beers' => 'bar_beers#index_by_bar'
    end
    resources :bar_beers
    resources :cities
  end
end

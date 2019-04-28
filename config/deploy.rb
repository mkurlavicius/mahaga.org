
# config valid for current version and patch releases of Capistrano
lock "~> 3.11.0"

default_run_options[:shell] = '/bin/zsh'

server 'mahaga.org', port: 22, roles: [:web, :app, :db], primary: true

set :repo_url,    'git@github.com:mkurlavicius/mahaga.org.git'
set :branch,      'master'
set :application, 'gamebase'
set :user,        'mindaugas'
set :rbenv_type,  :user # or :system, depends on your rbenv setup
set :rbenv_ruby,  '2.6.1'
set :pty,         true
set :stage,       :production
set :deploy_to,   "/home/#{fetch(:user)}/apps/#{fetch(:application)}"

set :ssh_options, { 
  forward_agent: true, 
  user: fetch(:user), 
  keys: %w(~/.ssh/id_rsa.pub) 
}


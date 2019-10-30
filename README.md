# SOCH Website

Instructions to run:

Checkout the project using `git clone`
Install ruby and gem
Run `gem install jekyll`

Open the repository root folder and run `bundle install` to install all dependencies from gemfile

Finally jekyll serve to see a preview

You might face some version issues like you end up getting concurrent-ruby 1.1.5 but gemfile had concurrent-ruby 1.1.4. 

So the safest way to run is `bundle exec jekyll serve`
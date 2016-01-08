compass_config do |config|
  config.output_style = :expanded
end

activate :blog do |blog|
  blog.prefix = 'blog'

  blog.permalink = '{year}/{month}/{title}.html'

  # # Matcher for blog source files
  blog.layout = 'blog'
  blog.summary_separator = /READMORE/
  blog.default_extension = '.markdown'

  # Enable pagination
  blog.paginate = false
  blog.per_page = 5
end

page "/feed.xml", layout: false

activate :directory_indexes

set :css_dir, 'assets/css'
set :js_dir, 'assets/js'
set :images_dir, 'assets/img'
set :relative_links, true

sprockets.append_path File.join root, 'bower_components'


# Build-specific configuration
configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :cache_buster
end

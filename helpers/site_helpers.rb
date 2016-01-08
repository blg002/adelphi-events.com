module SiteHelpers
  
  def page_title
    current_page.data.title ? "#{current_page.data.title} | Adelphi Productions" : "Adelphi Productions"
  end

  def make_path(string)
  	string.downcase.gsub(/[ \+]/, ' ' => '', '+' => '-')
  end

end

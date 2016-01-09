### Required Tools

* [fontcustom](https://github.com/FontCustom/fontcustom)
* [nodejs](https://nodejs.org/)
  * [bower](http://bower.io/)


1. Install dependencies

        bower install

2. Start the preview web-server

        bundle exec middleman server

3. Make a blog entry

        bundle exec middleman article TITLE

4. Compile web fonts

        fontcustom compile

5. Build site

        bundle exec middleman build

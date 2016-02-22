### simple jekyll posts generator
As you can guess from the title, this is a node module to generate [jekyll posts](http://jekyllrb.com/)  easily from within your terminal.

#### Installation
type in your terminal :
```
npm install -g jekyll-posts-generator
```

#### Usage
Navigate to some jekyll website that have the following structure :
```
.
├── _config.yml
├── _drafts
├── _includes
├── _layouts
├── _posts
|   |── posts are listed here ...
├── _data
├── _site
├── .jekyll-metadata
└── index.html
```

Now you can create a basic article using the ``create command``

```
jposts create 'my article title'
```
OR
```
 jposts create "my article title"
```

At this time you go inside ``_posts`` folder, you will see a new file ``[YYYY-MM-DD]-my-article-title.md`` generated for you.

#### TODO
* Add other essential options.
* Add jshint and other stuff for linting and testing purpposes.
* ...


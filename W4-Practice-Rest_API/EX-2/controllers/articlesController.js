import {articles} from '../models/data.js';

// get all articles
export const getAllArticles = async (req, res) => {
    res.json(articles);
}

// GET /articles/:id — Get a single article by ID 
export const getArticleById = async (req, res) => {
    const articleId = parseInt(req.params.id);
    const article = articles.find(a => a.id === articleId);
    if (!article) return res.status(404).json({ error: 'Article not found' });
    res.json(article);
}


// POST /articles — Create a new article 
export const createArticle = async (req, res) => {
    const { title, content, journalistId, categoryId } = req.body;
    if (!title || !content || !journalistId || !categoryId) {
        return res.status(400).json({ error: 'Title, content, journalistId, and categoryId are required' });
    }

    const newArticle = {
        id: articles.length + 1,
        title,
        content,
        journalistId,
        categoryId
    };
    articles.push(newArticle);
    res.status(201).json(newArticle);
}


// PUT /articles/:id — Update an existing article 
export const updateArticle = async (req, res) => {
    const articleId = parseInt(req.params.id);
    const { title, content, journalistId, categoryId } = req.body;

    const article = articles.find(a => a.id === articleId);
    if (!article) return res.status(404).json({ error: 'Article not found' });

    if (title) article.title = title;
    if (content) article.content = content;
    if (journalistId) article.journalistId = journalistId;
    if (categoryId) article.categoryId = categoryId;

    res.json(article);
}


// DELETE /articles/:id — Delete an article 
export const deleteArticle = async (req, res) => {
    const articleId = parseInt(req.params.id);
    const index = articles.findIndex(a => a.id === articleId);
    if (index === -1) return res.status(404).json({ error: 'Article not found' });

    articles.splice(index, 1);
    res.status(204).send();
}

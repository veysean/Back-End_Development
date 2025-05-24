// Category Controller
import { categories, articles } from '../models/data.js';


// GET /categories — Get all categories 
export const getAllCategories = (req, res) => {
    res.json(categories);
};


// GET /categories/:id — Get a single category 
export const getCategoryById = (req, res) => {
    const categoryId = parseInt(req.params.id);
    const category = categories.find(c => c.id === categoryId);
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.json(category);
};


// POST /categories — Add a new category 
export const createCategory = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }

    const newCategory = {
        id: categories.length + 1,
        name
    };
    categories.push(newCategory);
    res.status(201).json(newCategory);
};  


// PUT /categories/:id — Update a category 
export const updateCategory = (req, res) => {
    const categoryId = parseInt(req.params.id);
    const { name } = req.body;

    const category = categories.find(c => c.id === categoryId);
    if (!category) return res.status(404).json({ error: 'Category not found' });

    if (name) category.name = name;

    res.json(category);
};


// DELETE /categories/:id — Delete a category 
export const deleteCategory = (req, res) => {
    const categoryId = parseInt(req.params.id);
    const index = categories.findIndex(c => c.id === categoryId);
    if (index === -1) return res.status(404).json({ error: 'Category not found' });

    categories.splice(index, 1);
    res.status(204).send();
};

// GET /categories/:id/articles — Articles from a categories 
export const getArticlesByCategory = (req, res) => {
    const categoryId = parseInt(req.params.id);
    const articlesByCategory = articles.filter(a => a.categoryId === categoryId);
    
    if (articlesByCategory.length === 0) {
        return res.status(404).json({ error: 'No articles found for this category' });
    }
    
    res.json(articlesByCategory);
};

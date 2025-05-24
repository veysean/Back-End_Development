// Journalists Resource 
import {journalists, articles} from "../models/data.js";


// GET /journalists — Get all journalists 
export const getAllJournalists = async (req, res) => {
    res.json(journalists);
}

// GET /journalists/:id — Get a single journalist
export const getJournalistById = async (req, res) => {
    const journalistId = parseInt(req.params.id);
    const journalist = journalists.find(j => j.id === journalistId);
    if (!journalist) return res.status(404).json({ error: 'Journalist not found' });
    res.json(journalist);
}

// POST /journalists — Create a new journalist 
export const createJournalist = async (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    const newJournalist = {
        id: journalists.length + 1,
        name,
        email
    };
    journalists.push(newJournalist);
    res.status(201).json(newJournalist);
}

// PUT /journalists/:id — Update journalist info
export const updateJournalist = async (req, res) => {
    const journalistId = parseInt(req.params.id);
    const { name, email } = req.body;

    const journalist = journalists.find(j => j.id === journalistId);
    if (!journalist) return res.status(404).json({ error: 'Journalist not found' });

    if (name) journalist.name = name;
    if (email) journalist.email = email;

    res.json(journalist);
}


// DELETE /journalists/:id — Delete a journalist 
export const deleteJournalist = async (req, res) => {
    const journalistId = parseInt(req.params.id);
    const index = journalists.findIndex(j => j.id === journalistId);
    if (index === -1) return res.status(404).json({ error: 'Journalist not found' });

    journalists.splice(index, 1);
    res.status(204).send();
}

// GET /journalists/:id/articles — Article by specific journalist 
export const getArticlesByJournalist = async (req, res) => {
    const journalistId = parseInt(req.params.id);
    const articlesByJournalist = articles.filter(a => a.journalistId === journalistId);
    
    if (articlesByJournalist.length === 0) {
        return res.status(404).json({ error: 'No articles found for this journalist' });
    }
    
    res.json(articlesByJournalist);
}
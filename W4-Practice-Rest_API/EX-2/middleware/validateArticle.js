// Validate the article data

const validateArticle = (req, res, next) => {
    const { title, content, journalistId, categoryId } = req.body;

    if (!title || typeof title !== 'string' || title.trim() === '') {
        return res.status(400).json({ error: 'Title is required and must be a non-empty string.' });
    }

    if (!content || typeof content !== 'string' || content.trim() === '') {
        return res.status(400).json({ error: 'Content is required and must be a non-empty string.' });
    }

    if (!journalistId || typeof journalistId !== 'number') {
        return res.status(400).json({ error: 'Journalist ID is required and must be a number.' });
    }

    if (!categoryId || typeof categoryId !== 'number') {
        return res.status(400).json({ error: 'Category ID is required and must be a number.' });
    }
    next();
}

export default validateArticle;
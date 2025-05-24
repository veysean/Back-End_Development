// validate category middleware

const validateCategory = (req, res, next) => {
    const { name } = req.body;

    if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ error: 'Category name is required and must be a non-empty string.' });
    }

    next();
}  

export default validateCategory;
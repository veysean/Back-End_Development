// validate journalist middleware
const validateJournalist = (req, res, next) => {
    const { name, email } = req.body;

    if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ error: 'Journalist name is required and must be a non-empty string.' });
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
        return res.status(400).json({ error: 'Valid journalist email is required.' });
    }

    next();
}

export default validateJournalist;
const validateUser = (req, res, next) => {
    const { name, email } = req.body;

    // Check if name and email are provided
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    next();
}

export default validateUser;
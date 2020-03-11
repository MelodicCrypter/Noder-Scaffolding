import compression from 'compression';

const shouldCompress = (req, res) => {
    // No compression
    if (req.headers['x-no-compression']) return false;
    // fallback to standard compression
    return compression.filter(req, res);
};

export default shouldCompress;

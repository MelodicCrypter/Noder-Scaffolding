import compression from 'compression';

const shouldCompress = (req, res) => {
    if (req.headers['x-no-compression']) {
        // don't compress responses if this request header is present
        return false;
    }

    // fallback to standard compression
    return compression.filter(req, res);
};

export default shouldCompress;

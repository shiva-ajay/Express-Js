import colors from 'colors';

const logger = (req, res, next) => {
  const methodColors = {
    GET: 'green',
    POST: 'blue',
    PUT: 'yellow',
    DELETE: 'red'
  };

  const method = req.method;
  const color = methodColors[method] || 'white';


    console.log(
      `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}` [
        color
      ]
    );
    next();
  }

  export default logger;

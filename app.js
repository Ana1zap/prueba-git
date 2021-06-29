
const path = require ('path');

app.use(express.static('public'));

app.get('/',(req, res)=> res.Sendfile(path.join(__dirname,'views','home.html')))


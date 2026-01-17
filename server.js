require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 5000;




const userRoutes = require('./src/routes/user.routes');
const USER_API = require('./src/constants/endpoints/user.api');

app.use(USER_API.LIST, userRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

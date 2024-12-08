import { app } from './app.js';
import connectDB from './database.js';

const PORT = process.env.PORT;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`⚙️  Server is running at port: `, PORT);
    });
  })
  .catch((err) => {
    console.error(`MongoDB Connection Failed!`, err);
  });

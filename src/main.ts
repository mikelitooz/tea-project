import express from 'express';
import { IndexController } from './controllers/index';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const indexController = new IndexController();

app.post('/register', indexController.registerProject.bind(indexController));
app.post('/validate-constitution', indexController.validateConstitution.bind(indexController));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
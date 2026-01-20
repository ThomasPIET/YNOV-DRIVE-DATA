import express from 'express';
import cors from 'cors';


import userRoute from "./routes/user.route.js";
import { errorHandler } from './middleware/error.middleware.js';

export const App = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    app.use(errorHandler);

    app.use('/api/user/', userRoute)

    return app;
}
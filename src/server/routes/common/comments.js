import commentController from '../../controllers/story';
import bodyParser from '../../middlewares/bodyParser';
import { jwtAuth } from '../../middlewares/jwtAuth';

export default app => {
  app.get('/api/comments', commentController.list);
  app.get('/api/comments/:id', commentController.check);
  app.post('/api/comments', jwtAuth, bodyParser.json, commentController.create);
  app.put('/api/comments/:id', jwtAuth, bodyParser.json, commentController.update);
  app.delete('/api/comments/:id', jwtAuth, commentController.remove);
};

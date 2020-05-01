import { getAllUsers, getUser, addNewUser, updateUser, deleteUser } from '../controllers/userController';

const routes = (app) => {
    app.route('/user')
        .get(getAllUsers)
        .post(addNewUser);

    app.route('/user/:userId')
        .get(getUser)
        .put(updateUser)
        .delete(deleteUser);
}

export default routes;
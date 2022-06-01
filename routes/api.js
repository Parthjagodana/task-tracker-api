const TaskController = require("../controllers/taskController");

module.exports = function (router) {

    router.post('/create_task', TaskController.createTask);
    router.get('/task_list', TaskController.getAllTask);
    router.get('/task_delete', TaskController.taskDelete);
    router.get('/task_update', TaskController.taskTimeUpdate);

}
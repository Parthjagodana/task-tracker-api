const { response } = require('../service/index');
const Localization = require('../service/localization');
const taskService = require('../service/taskService');


module.exports = {

    createTask: async (req, res) => {

        var { title } = req.body;

        try {
            const data = {
                title: title,
             }
             var create = await taskService.createTask(data);
             return res.status(200).json(response(1, Localization.CREATE_TASK, create));

        } catch (error) {
            return res.status(404).json(response(0, error, null));
        }
    },

    getAllTask: async (req, res) => {
        try {
            const task_data = await taskService.getTasks();
            return res.status(200).json(response(1, Localization.SUCCESS, task_data));
        } catch (error) {
            return res.status(404).json(response(0, error, null));
        }
    },

    taskDelete: async (req, res) => {
        const { id } = req.query;
        try {
            const task_data = await taskService.deleteTasks(id);
            return res.status(200).json(response(1, Localization.SUCCESS, null));
        } catch (error) {
            return res.status(404).json(response(0, error, null));
        }
    },
    
    taskTimeUpdate: async (req, res)=> {
        const { id, time, status } = req.query;
        try {
            const update_time = await taskService.updateTask(id, time, status);
            return res.status(200).json(response(1, Localization.SUCCESS, null));
        } catch (error) {
            return res.status(404).json(response(0, error, null));
        }
    }
}
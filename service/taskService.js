const { Task } = require("../model/task")



module.exports = class taskService {

    static async createTask(data) {
        try {
            const task_data = await Task.create(data)
            return task_data

        } catch (error) {
            throw new Error(error)
        }
    }

    static async getTasks() {
        try {
            const task_data = await Task.find()
            return task_data

        } catch (error) {
            throw new Error(error)
        }
    }

    static async deleteTasks(id) {
        try {
            const task = await Task.findByIdAndDelete(id)
            return task

        } catch (error) {
            throw new Error(error)
        }
    }

    static async updateTask(id, time, status) {
        try {
            const update = await Task.findByIdAndUpdate(id,
                {
                    $set: {
                        total_time: time,
                        is_status: status
                    }
                })
            return update

        } catch (error) {
            throw new Error(error)
        }
    }

}
module.exports = class Service { 
    
    static response(status, message, data) {
        return {
            success: status,
            message: message,
            data: data,
        }
    }
}




module.exports = function getModel(modelName) {
    return require(`./${modelName}`)    
} 
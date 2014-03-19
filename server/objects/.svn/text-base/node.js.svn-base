module.exports = function(app) {
    var mongoose = app.get('mongoose'); 
    
    var childSchema = mongoose.Schema({
        node: String
    });
      
    var nodeSchema = mongoose.Schema({
        node: String,
        childNodes: [childSchema]
    });
    
    var Node = mongoose.model('Node', nodeSchema);
    
    return Node;
};
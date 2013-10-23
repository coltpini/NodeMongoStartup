//node services
    module.exports = function(app){
    var mongoose = app.get('mongoose'),
        Node = app.get('Node');        
    
    app.get('/node', function(req, res){ 
        console.log('getting Nodes');
        Node.find(function(err, nodes){                   
            res.send(nodes);
        });    
    });
    
    app.get('/node/:id', function(req, res){
        var id = req.params.id;
        console.log('getting Node #' + id);
        Node.find({_id: id}, function(err, nodes){
            res.send(nodes);
        });
    });
    
    app.put('/node/:id', function(req, res){
        var node = req.body.node;
        var id = req.params.id;
        var cn = req.body.childNodes;
        console.log('updating node #' + id + " to: " + node + "with cns: " + cn);
        Node.findByIdAndUpdate(id, {node: node, childNodes: cn}, function(err, nodes){
            res.send(nodes);
        });
    });
    
    app.post('/node', function(req, res){
        var node = req.body.node;
        console.log('Creating new node: ' + node );
        var n = new Node({node: node});
        n.save(function(err,node){
            res.send(node);
        });
    });
    
    app.del('/node/:id', function(req, res){
        var id = req.params.id;
        console.log('deleting Node' + id );
        Node.remove({_id: id}, function(err){
            res.send(204);
        });
    }); 
};
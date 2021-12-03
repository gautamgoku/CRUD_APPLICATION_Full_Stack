const axios = require('axios');

exports.homeRoutes=(req,res)=>{
    axios.get('http://localhost:3000/api/users')
    .then(function(response){
        res.render('index', { users : response.data });
    })
    .catch(err =>{
        res.send(err);
    })
}


exports.add_user=(req,res)=>{
    res.render('add_user');
    
}


exports.update_user=(req,res)=>{
    
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
    .then(function(userdata){
        res.render("update_user", { user : userdata.data})
    })
    .catch(err =>{
        res.send(err);
    })
}



exports.search_user=(req,res)=>{
    axios.get('http://localhost:3000/api/users', { params : {author : req.query.author}})
    .then(function(userdata){
        res.render("search_user", { user : userdata.data})
    })
    .catch(err =>{
        res.send(err);
    })
    
}

exports.search_subject=(req,res)=>{
    axios.get('http://localhost:3000/api/users', { params : {subject : req.query.subject }})
    .then(function(userdata){
        res.render("search_subject", { user : userdata.data})
    })
    .catch(err =>{
        res.send(err);
    })
    
}


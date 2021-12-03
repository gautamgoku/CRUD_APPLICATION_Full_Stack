var Userdb = require('../model/model');

exports.create=(req,res)=>{

    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    const user =new Userdb({
        book: req.body.book,
        author : req.body.author,
        edition : req.body.edition,
        subject : req.body.subject,
        Status : req.body.Status,
    })

    user
        .save(user)
        .then(data => {
            // res.send(data)
            res.redirect('/add-user')
            
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });


}


exports.author=(req,res)=>{


    if(req.query.author){
        const author = req.query.author;

        Userdb.find({"author":req.query.author})
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found book with author "+ author})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving book with author " + author})
            })

    }else{
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }
    
}

exports.subject=(req,res)=>{


    if(req.query.subject){
        const subject = req.query.subject;

        Userdb.find({"subject":req.query.subject})
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found book with subject "+ subject})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving book with subject " + subject})
            })

    }else{
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }
    
}

exports.find=(req,res)=>{


    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
    
}




exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}





exports.delete=(req,res)=>{

    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
    
}



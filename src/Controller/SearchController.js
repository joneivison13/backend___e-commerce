const mongoose= require('mongoose')

module.exports = {
    index(req, res){
        const {local} =req.body
        const User = mongoose.model('User')

        User.findOne({email:local}).then(user => {
            res.send(user)
        }).catch(error => {
            res.status(401).send(error)
        })
        return res.send('')
    }
}
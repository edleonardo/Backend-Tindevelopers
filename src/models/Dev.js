const { Schema, model} = require('mongoose');

const devShema = new Schema ({
    name: {
        type: String,
        require: true     
    },
    user: {
        type: String,
        require: true
    },
    bio: String,
    avatar: {
        type: String,
        require: true
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes:[{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    matchs:[{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }]
}, {
    timestamps: true
});

module.exports = model('Dev', devShema);
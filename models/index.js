const Blog = require('./Blog');
const Comment = require('./Comment');
const User = require('./User');

Comment.belongsTo(Blog, {

    foreignKey: 'blog_id',
});

Blog.hasMany(Comment, {

    foreignKey: 'comment_id',
});

Blog.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Blog, {
    foreignKey: 'blog_id'
});

User.hasMany(Comment, {
    foreignKey: 'comment_id',

});

module.exports = {
    User,
    Blog,
    Comment,
};
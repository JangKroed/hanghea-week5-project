const { User, Post, Comment } = require('../models'); 

class CommentRepository {
    findComment = async (postId) =>{
        const comments = await Comment.findAll({where: { postId },   
            include: [{model: User,attributes: ["nickname"],},],
            order: [["createdAt", "DESC"]],
          });

        return comments;
    }

    findPostById = async (postId) => {
        console.log("코멘트 리포, 아이디로 포스트 찾기")
        const post = await Post.findByPk(postId);
        return post;
    };

    createComment = async (content, userId, postId) => {
        const createCommentData = await Comment.create({content, userId, postId});
        return createCommentData;
    }

    updateComment = async (commentId, content, userId) => {
        const commentAu = await Comment.findByPk(commentId);
        const commentAuId = commentAu.userId       
        if(userId !== commentAuId){
            return;
        }
        const updateCommentData = await Comment.update({content}, {where: {commentId}})
        return updateCommentData
    }

    deleteComment = async (commentId, userId) => {
        const commentAu = await Comment.findByPk(commentId); 
        const commentAuId = commentAu.userId   
        if(userId !== commentAuId){      
            return;
        }
            const updateCommentData = await Comment.destroy({where: {commentId}})
        return updateCommentData
    }

}

module.exports = CommentRepository ;
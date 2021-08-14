import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    
});

var PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;
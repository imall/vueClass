export default {
    getPosts:(state,posts)=>{state.posts=posts},
    insertPost:(state,post)=>{state.posts.unshift(post);},
    delete:(state,id)=>{state.posts=state.posts.filter((item) => item.id!==id);}
}
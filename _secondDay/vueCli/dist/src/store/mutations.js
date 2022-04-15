export default {
    getPosts:(state,posts)=>{state.posts=posts},
    insertPost:(state,post)=>{state.posts.unshift(post);},
    delete:(state,id)=>{state.posts=state.posts.filter((item) => item.id!==id);},
    updatePost: (state, post) => {
      const index = state.posts.findIndex(c => c.id === post.id)
      if (index !== -1) {
        state.posts.splice(index, 1, post)
      }
    },
    
}
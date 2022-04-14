export default {
  getPosts: (state, posts) => (state.posts = posts),
  insertPost: (state, post) => state.posts.unshift(post),
  deletePost: (state, id) => state.posts = state.posts.filter(c => c.id !== id),
  updatePost: (state, post) => {
    const index = state.posts.findIndex(c => c.id === post.id)
    if (index !== -1) {
      state.posts.splice(index, 1, post)
    }
  }

}

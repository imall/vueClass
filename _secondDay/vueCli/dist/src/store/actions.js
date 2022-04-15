import axios from 'axios';
export default {
    async getPostsAction({ commit }) {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
        commit('getPosts', response.data)
    },

    async addPostAction({ commit },post){
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts",post)
        commit("insertPost",response.data)
    },
    async removePostAction({ commit },id){
         await axios.delete("https://jsonplaceholder.typicode.com/posts/"+id)
        commit("delete",id)
    },
    async editPostAction({ commit }, post) {
        const response = await axios.put(
          `https://jsonplaceholder.typicode.com/Posts/${post.id}`,
          post
        );
        commit('updatePost', response.data)
      }

}
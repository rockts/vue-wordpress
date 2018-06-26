import axios from 'axios'

export const getInitialData = (context) => {
  axios.get('https://sandbox.lekee.cc/wp-json/wp/v2/posts')
    .then((response) => {
      context.commit('setInitialData', response)
      console.log(response)
    })
}

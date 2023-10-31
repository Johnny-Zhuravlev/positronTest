import { createStore } from 'vuex';
import shop from '@/api/shop';

export const useProductsStore = createStore({
  state: {
    items: [],
    cartTotalQuantities: 0,
    cartSum: 0,
    slides: []
  },
  mutations: {
    setProducts (state, products) {
      state.items = products
    },
    setSlides (state, slides) {
      state.slides = slides
    },
    // setBasketCount (state, getters) {
    //   state.basketCount = getters.totalBasketCount
    // },
    increment(state, i) {
      // const cartItem = state.products.find(item => item.id === product.id)
      // cartItem.quantity++
      state.items[i].quantity++;

      // cartItem.price = Number(cartItem.price) + Number(product.price)
    },
    decrement(state, i) {
      // const cartItem = state.products.find(item => item.id === product.id)
      // cartItem.quantity--
      state.items[i].quantity--;

      // cartItem.price = Number(cartItem.price) - Number(product.price)
    },
    remove(state, i) {
      state.items.splice(i, 1);
    }
  },
  actions: {
    getAllProducts ({commit}) {
      shop.getProducts(products => {
        commit('setProducts', products)
      })
    },
    getSlides ({commit}) {
      shop.getSlides(slides => {
        commit('setSlides', slides)
      })
    },
    increment ({ commit }, i) {
      // const cartItem = state.items.find(item => item.id === product.id)
      // cartItem.quantity += 1;

      commit('increment', i);
    },
    decrement ({ commit }, i) {
      // const cartItem = state.items.find(item => item.id === product.id)
      // cartItem.quantity -= 1;

      commit('decrement', i);
    },
    remove ({ commit }, i) {
      commit('remove', i);
    }
  },
  getters: {
    cartTotalPrice(state) {
      return state.items.reduce((total, product) => {
        return state.cartSum = total + Number(product.price) * product.quantity
      }, 0)
    }
  },
})
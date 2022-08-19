import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import footerReducer from './reducers/footerReducer'
import indexDataReducer from './reducers/indexDataReducer'
import productListReducer from './reducers/productListReducer'

import thunk from 'redux-thunk'

// redux持久化
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['indexDataReducer'], // 白名单，这里的reducer会持久化
}

// 合并reducer
const reducer = combineReducers({
  footerReducer, // 底部标签栏
  indexDataReducer, // 首页数据
  productListReducer, // 商品列表数据
})

const persistedReducer = persistReducer(persistConfig, reducer)

// // 线上环境使用正常的store，防止store在开发工具中暴露
// const store = createStore(persistedReducer, applyMiddleware(thunk))

// redux开发工具使用（仅开发）
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(persistedReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)))
let persistor = persistStore(store)

export { store, persistor }

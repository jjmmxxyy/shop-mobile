import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cityReducer'],
}

// 合并reducer
const reducer = combineReducers({})

const persistedReducer = persistReducer(persistConfig, reducer)

// const store = createStore(persistedReducer, applyMiddleware(thunk))

// redux开发工具使用（仅开发）
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(persistedReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)))
let persistor = persistStore(store)

export { store, persistor }

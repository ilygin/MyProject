import rootReducer from '../../src/reducers/';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

export default function configurateStore(initialState) {
    const store = createStore(rootReducer, applyMiddleware(
        thunkMiddleware, // позволяет нам отправлять функции
    ));

    if (module.hot) {
        module.hot.accept('../../src/reducers/', () => {
            const nextRootReducers = require('../../src/reducers/');
            store.replaceReducer(nextRootReducers);
        })
    }

    return store;
}
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {PersistGate} from 'redux-persist/lib/integration/react'

import App from './components/App'
import {store, persistor} from './store'

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

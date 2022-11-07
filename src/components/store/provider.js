import React from 'react'
import { Provider } from 'mobx-react'

const provider =
  (stores = {}) =>
  (WrappedComponent) =>
  (props) =>
    (
      <Provider {...stores}>
        <WrappedComponent {...props} />
      </Provider>
    )

export { provider }

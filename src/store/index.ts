const store = {
  state: {
    count: 0
  },
  setState (data: any) {
    store.state = {
      ...store.state,
      ...data
    }
    store.listeners.forEach((listener) => { if (!!listener && typeof listener === 'function') listener() })
  },
  listeners: new Set(),
  subscribe(callback: Function) {
    store.listeners.add(callback)
    return () => {
      store.listeners.delete(callback)
    }
  },
  getSnapshot:() => store.state
}

export default store
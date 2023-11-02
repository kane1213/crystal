const store = {
  state: {
    count: 0
  },
  setState (data: any) {
    store.state = {
      ...store.state,
      ...data
    }
  },
  listeners: new Set(),
  subscribe(callback: Function) {
    this.listeners.add(callback)
    return () => {
      this.listeners.delete(callback)
    }
  },
  getSnapshot() {
    return this.state
  }
}

export default store
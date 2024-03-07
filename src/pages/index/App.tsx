import store from '@/store'
import { useSyncExternalStore } from 'react'
export default () => {
  const storeData = useSyncExternalStore(store.subscribe, store.getSnapshot)

  return (
    <div className="flex justify-center items-center min-h-[98vh]">
      <div>
        <div className=" text-3xl">HOME({storeData.count})_2</div>
        <button
          onClick={() => {
            store.setState({ count: storeData.count + 1 })
          }}
          className="mt-2 bg-blue-800 text-white px-1 rounded"
        >
          ADD COUNT
        </button>
      </div>
    </div>
  )
}

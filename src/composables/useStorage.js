import { ref, watch } from 'vue'

export function useStorage(key, val = null) {
  let storedVal = read()

  if (storedVal) {
    val = ref(storedVal)
  } else {
    val = ref(val)

    write()
  }

  // watch the value and when it changes, write to local storage
  watch(val, write, {
    // if listening for change to particular property then use the following...
    deep: true,
  })

  function read() {
    return JSON.parse(localStorage.getItem(key))
  }

  // if value changes we call the 'write' function that writes value back to local storage
  function write() {
    // if value is empty string, remove item from local storage
    if (val.value === null || val.value === '') {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(val.value))
    }
  }

  return val
}

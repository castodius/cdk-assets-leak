const helper = {
  value: 1
}

const wrapper = {
  foo: helper
}

// prints 1
console.log(wrapper.foo.value)

const copy1 = Object.create(wrapper)
copy1.foo.value = 2

// prints 2
console.log(wrapper.foo.value)

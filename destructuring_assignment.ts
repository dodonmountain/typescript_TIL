// 비 구조화 할당
let person = {name: "Linus", age: 30}
let {name, age} = person // name = "Linus", age = 30

let array = [1, 2, 3, 4]
let [head, ...rest] = array // head = 1, rest = [2, 3, 4]

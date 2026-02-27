

import stadium from "./data.json"
import  template  from "./stadium.hbs"


const listRef = document.querySelector(".list")
listRef.innerHTML = template({stadium})
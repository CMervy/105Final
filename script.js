const list = [];
const listItems = document.getElementById(`List`)
const newItem = document.getElementById(`newitem`)
const addBtn = document.getElementById(`addbtn`)
const allBtn = document.getElementById(`ShowAll`)
const unpurchasedBtn = document.getElementById(`unpurchased`)
const purchasedBtn = document.getElementById(`purchased`)

function refreshList(filter = `all`){
    listItems.innerHTML = ``;

    list.forEach((item, index) => {
        if(filter === `unpurchased` && item.purchased) return;
        if(filter === `purchased` && !item.purchased) return;

        const li = document.createElement(`li`);
        li.textContent = item.name;
        if(item.purchased)
            li.classList.add(`purchased`);

        li.addEventListener(`click`, () =>{
            item.purchased = !item.purchased;
            refreshList(filter)
        })

        listItems.appendChild(li);
    })
}
addBtn.addEventListener(`click`, () => {
    const itemName = newItem.value.trim();
    if(itemName){
        list.push({name: itemName, purchased: false});
        newItem.value = ``
        refreshList();
    }
})
allBtn.addEventListener(`click`, () =>{
    refreshList(`all`)
})
unpurchasedBtn.addEventListener(`click`, () =>{
    refreshList(`unpurchased`)
})
purchasedBtn.addEventListener(`click`, () =>{
    refreshList(`purchased`)
})


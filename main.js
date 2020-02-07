let getSel = x => document.querySelector(x);

getSel('.btn-warning').addEventListener('click', function () {
    let text = getSel('.main-text').innerHTML;
    getSel('.edit-menu__area').innerHTML = text;
    getSel('.main-content__edit').style.display = 'block';
    getSel('.main-content__style').style.display = 'none';
})

//choose button edit or style
getSel('.btn-success').addEventListener('click', function () {
    let move = getSel('.edit-menu__area').value;
    getSel('.main-text').innerHTML = move;
})
getSel('.btn-primary').addEventListener('click', function () {
    getSel('.main-content__style').style.display = 'block';
    getSel('.main-content__edit').style.display = 'none';
})

//choose size in button style
let f2 = document.forms['f2'];
for (let i = 0; i < f2.length; i++) {
    f2.elements[i].addEventListener('click', function () {
        let change = this.value;
        getSel('.main-text').style.fontSize = change;
    })
}

//choose font family in button style
getSel('#options').addEventListener('change', function () {
    getSel('.main-text').style.fontFamily = this.value;
    console.log(this.value);
})

//choose colors of text and background color in button style
getSel('.btn-secondary').addEventListener('click', function () {
    getSel('.main-content__colors-group').style.display = 'flex';
    for (let i = 0; i < getSel('.main-content__colors-group').children.length; i++) {
        getSel('.main-content__colors-group').children[i].onclick = function () {
            getSel('.main-text').style.color = this.className;
            getSel('.main-content__colors-group').style.display = 'none';
        }
    }
})

getSel('.btn-info').addEventListener('click', function () {
    getSel('.main-content__colors-group').style.display = 'flex';
    for (let i = 0; i < getSel('.main-content__colors-group').children.length; i++) {
        getSel('.main-content__colors-group').children[i].onclick = function () {
            getSel('.main-text').style.backgroundColor = this.className;
            getSel('.main-content__colors-group').style.display = 'none'
        }
    }
})

//choose bold and cursive in button style
let f3 = document.forms['f3'];
for(let i = 0; i < f3.elements.length; i++){
    f3.elements[i].addEventListener('click', function(){
        if(this.value === 'bold'){
            if(this.checked){
                getSel('.main-text').style.fontWeight = this.value;
            } else {
                getSel('.main-text').style.fontWeight = 'normal';
            }
        } else{
            if(this.checked){
                getSel('.main-text').style.fontStyle = this.value;
            } else {
                getSel('.main-text').style.fontStyle = 'normal';
            } 
        }
    })
}

//button add
getSel('.btn-danger').addEventListener('click', function(){
    getSel('.container__first').style.display = 'none';
    getSel('.main-content__add').style.display = 'block';
})

//choose table or list
let f4 = document.forms['f4'];
for(let i = 0; i < f4.elements.length; i++) {
    f4.elements[i].addEventListener('click', function () {
        if(this.value === 'table') {
            getSel('.add-table').style.display = 'block';
            getSel('.add-list').style.display = 'none'; 
        } else {
            getSel('.add-table').style.display = 'none';
            getSel('.add-list').style.display = 'block';
        }
    });
}

let valBorderStyle;
getSel('#type-border').addEventListener('change', function () {
    valBorderStyle = this.value; 
});
let valBorderColor;
getSel('#color-border').addEventListener('change', function () {
    valBorderColor = this.value;
});
let valLiStyle;
getSel('#type-list').addEventListener('change', function () {
   valLiStyle = this.value;
 });

getSel('.btn-create-table').addEventListener('click', function(){
    getSel('.container__first').style.display = 'block';
    getSel('.main-content__add').style.display = 'none';
    createTable(valBorderStyle, valBorderColor);
});
getSel('.btn-create-list').addEventListener('click', function(){
    getSel('.container__first').style.display = 'block';
    getSel('.main-content__add').style.display = 'none';
    createList(valLiStyle);
});


//create table
function createTable(brStyle, brColor) {
    let outerTable = document.createElement('div');
    let elTable = document.createElement('table');
    let countTr = getSel('#count-tr').value;
    let countTd = getSel('#count-td').value;
    let tr;
    let td;
    for (let i = 0; i < countTr; i++) {
        tr = document.createElement('tr');
        elTable.appendChild(tr);
        for(let j = 0; j < countTd; j++) {
            td = document.createElement('td');
            td.style.width = getSel('#width-td').value + 'px';
            td.style.height = getSel('#height-td').value + 'px';
            td.style.borderWidth = getSel('#width-border').value + 'px';
            td.style.borderStyle = brStyle; // brstyle
            td.style.borderColor = brColor; // brcolor
            td.innerText = 'TD';
            tr.appendChild(td);
        }
    }
    outerTable.appendChild(elTable);
    getSel('.edit-menu__area').appendChild(document.createTextNode(outerTable.innerHTML));
}
 
//create list
function createList(liStyle){
    let elList = document.createElement('ul');
    let countList = getSel('#count-li').value;
    let li;
    let outerList = document.createElement('div');
    for(let i = 0; i < countList; i++){
        li = document.createElement('li');
        li.style.listStyleType = liStyle;
        li.innerText = 'this is create List'
        elList.appendChild(li);
    }
    outerList.appendChild(elList);
    getSel('.edit-menu__area').appendChild(document.createTextNode(outerList.innerHTML));
}







   
function Movies(name , image,year){
    this.name=name;
    this.image=image;
    this.year=year;
    Movies.all.push(this);

}
Movies.all=[];
let form1 = document.getElementById('form1');
form1.addEventListener('submit',handleSubmit);

function handleSubmit(e){
    e.preventDefault();
    let name = e.target.name.value;
    let iamge = e.target.image.value;
    let year = e.target.year.value;
    new Movies(name , image , year);
    setData();
    render();
}
function setData (){
    localStorage.setItem('walaa',JSON.stringify(Movies.all));
}

function getData(){
    let data = JSON.parse(localStorage.getItem('walaa')) || [];
    if (data){
        Movies.all=[];
        for (let i =0 ; i<data.length ; i++){
            new Movies(data[i].name, data[i].image , data[i].year );
        }
    }
    render ();
}
let table1 = document.getElementById('table1');

function render(){


    for (let i =0 ;i <Movies.all.length ;i++){
        let tr = document.createElement('tr');
        table1.appendChild(tr);
         let td = document.createElement('td');
         tr.appendChild(td);
         td.innerHTML= `<a onclick="deletRow(${i})">x</a>`;
          
         let td1= document.createElement('td');
         tr.appendChild(td1);
         td1.innerHTML= `<img src="./img/${Movies.all[i].image}" style='width:100px'>`;
        
         let td2=document.createElement('td');
         tr.appendChild(td2);
         td2.textContent=Movies.all[i].name;
         let td3=document.createElement('td');
         tr.appendChild(td3);
         td3.textContent=Movies.all[i].year;


    }
}

function deletRow(i){
    Movies.all.splice(i,1);
    setData();
    getData();
}
getData();
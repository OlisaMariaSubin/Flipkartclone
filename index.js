let arr = [
    {
        img_src:
           "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/e00302d428f5c7be.png?q=100",
        title:"Minutes",
        href:"",   
    },
    {
        img_src:
           "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100",
        title:"Mobiles",
        href:"",   
    },
    {
        img_src:
           "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/ff559cb9d803d424.png?q=100",
        title:"Fashion",
        href:"",   
    },
    {
        img_src:
           "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/af646c36d74c4be9.png?q=100",
        title:"Electronics",
        href:"",   
    },
    {
        img_src:
           "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/1788f177649e6991.png?q=100",
        title:"Home and Furniture",
        href:"",   
    },
    {
        img_src:
           "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/e90944802d996756.jpg?q=100",
        title:"TV &Appliances",
        href:"",   
    },
    {
        img_src:
           "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/3c647c2e0d937dc5.png?q=100",
        title:"Flight Bookings",
        href:"",   
    },
    {
        img_src:
           "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/b3020c99672953b9.png?q=100",
        title:"Beauty",
        href:"",   
    },
    {
        img_src:
           "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/e730a834ad950bae.png?q=100",
        title:"Grocery",
        href:"",   
    }
];

//let arr=[1,2,3,4,5];
//for(let i=0; i<arr.length; i++){
//    console.log(arr[i]);
//}

arr.map((element)=>{
    let image = document.createElement('img');
    image.src = element.img_src;

     let title = document.createElement('p');
     title.innerHTML = element.title;

     let box = document.createElement('div');
     box.append(image,title);

     document.getElementById("categories").append(box);
})


let a = document.getElementById("categories");
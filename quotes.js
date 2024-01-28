
let reviews = [
    {
        img : "https://i.pinimg.com/736x/da/85/62/da85621518cf93a6dde90221a36f5515--grim-reaper-hats.jpg",

        name : "Goblin",

        job : "Guardian",

        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat blanditiis dignissimos ipsa consequuntur tenetur non earum deserunt quam quaerat reiciendis? Necessitatibus exercitationem cumque ex tempore architecto cum ipsam debitis."
    },
    {
        img : "https://1.bp.blogspot.com/-55PNSSXdjc8/Xqfze8AsDoI/AAAAAAAAPJI/pNYZwKO5urkXc27feGA3RpN0-iCBMP-AwCLcBGAsYHQ/s1600/Goblin%2Blessons%2Bin%2Bphotography%2B450%2Bpx%2Bshooting%2Bagainst%2Bthe%2Blight%2Bbokeh.jpg",

        name : "Eun tak",

        job : "Student",

        description : "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.."
    },
    {
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1657vM_yoideLjhaG4ntgdoAKuWiIjfG8wLsD_3lrZYt_MZDXptdbpYRqc7IHjXBpbz8&usqp=CAU",

        name : "Grim Reaper",

        job : "uhh wanna make a guess?",

        description : "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },
    {
        img : "https://m.media-amazon.com/images/M/MV5BNzYwNDM4MTAtYmY1MC00NjIxLTgyMjMtOTRjZDkzZGE2MzkwXkEyXkFqcGdeQXVyNDY5MjMyNTg@._V1_.jpg",

        name : "Sunny",

        job : "The Boss",

        description : "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    },
    {
        img: "https://i.pinimg.com/originals/6d/26/c0/6d26c0d714086ec6e1a2e91487e225d4.jpg",

        name : "Deok hwa",

        job : "Being the smart one",

        description: "Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz."
    }
]

const leftbtn = document.querySelector(".left");
const rightbtn = document.querySelector(".right");

const image = document.querySelector(".aimage");
const h4El = document.querySelector("h4");
const h5El = document.querySelector("h5")
const pEl  = document.querySelector("p")

let count = 0;

console.log(image)

leftbtn.addEventListener("click",()=>{
    count--;
    if(count==-1)count=reviews.length;
    
    changer();
   

})

rightbtn.addEventListener("click", ()=>{
    count++;
    if(count==reviews.length)count=0;
    changer();
})

function changer(){
    image.style.backgroundImage = "url(" + reviews[count].img + ")";
    h4El.innerText = reviews[count].name;
    h5El.innerText = reviews[count].job;
    pEl.innerText = reviews[count].description;
}
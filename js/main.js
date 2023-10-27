var update= document.getElementById("sec2")
var row= document.getElementById("row")
var menu =[];


var hotel=[{ 
			img:"image/1.webp",
			id:1,
			name:"Guest Hotel",
			chef:"South Indian, North Indian",
			icon:"bi bi-star-fill px-2",
			rating:"4.3",
			time:"31",
			amt:"560",
			view:"QUICK VIEW"
			
			
			},
			{ 
			img:"image/2.webp",
			id:2,
			name:"SS Muslim Briyani",
			chef:"Chinese,South Indian",
			icon:"bi bi-star-fill px-2",
			rating:"4.0",
			time:"34",
			amt:"650",
			view:"QUICK VIEW"
			},
			{ 
			img:"image/3.webp",
			id:3,
			name:"Briyaniwala",
			chef:"Briyani,South Indian",
			icon:"bi bi-star-fill px-2",
			rating:"3.5",
			time:"31",
			amt:"700",
			view:"QUICK VIEW",
			},
			{ 
			img:"image/4.jfif",
			id:4,
			name:"Chai King",
			chef:"Beverages,Snacks,Bakery",
			icon:"bi bi-star-fill px-2",
			rating:"4.4",
			time:"31",
			amt:"150",
			view:"QUICK VIEW",
			},
			{ 
			img:"image/5.jfif",
			id:5,
			name:"Dhinna Hotel",
			chef:"Beverages, South Indian",
			icon:"bi bi-star-fill px-2",
			rating:"3.6",
			time:"26",
			amt:"250",
			view:"QUICK VIEW",
			},
			{ 
			img:"image/6.jfif",
			id:6,
			name:"Meat and Eat",
			chef:"Indian",
			icon:"bi bi-star-fill px-2",
			rating:"4.1",
			time:"48",
			amt:"100",
			view:"QUICK VIEW",			
			},
			{ 
			img:"image/7.jfif",
			id:7,
			name:"Saravana Hotel",
			chef:"South Indian, North Indian",
			icon:"bi bi-star-fill px-2",
			rating:"4.0",
			time:"51",
			amt:"250",
			view:"QUICK VIEW",
			},
			{ 
			img:"image/8.jfif",
			id:8,
			name:"Syed Hotel",
			chef:"Indian",
			icon:"bi bi-star-fill px-2",
			rating:"3.5",
			time:"42",
			amt:"400",
			view:"QUICK VIEW",
			},
			]
			
	// muthu(hotel)		
			
function muthu(add){

add.map((e) => {


var column= document.createElement("div")
column.setAttribute("class","col-lg-3 col-md-4 col-sm-12 col-12 hhh mb-3")
// column.setAttribute("onclick","next()")
column.style.position="relative"

var imagediv= document.createElement("div")
imagediv.setAttribute("class","img1 p-2 mt-3")
// imagediv.setAttribute("style","mt-3")

var image= document.createElement("img")
image.setAttribute("src",e.img)
image.setAttribute("class","simg")
image.style.width="100%"

var iconDiv= document.createElement("div")
iconDiv.setAttribute("class","description")


var hotelname= document.createElement("h5")
hotelname.setAttribute("class","mt-2 sname")
hotelname.innerHTML=e.name

var varient= document.createElement("p")
varient.innerHTML=e.chef

var social= document.createElement("div")
social.setAttribute("class","d-flex justify-content-between social-icon text-center")

var stardiv= document.createElement("div")
stardiv.setAttribute("class","d-flex social-icon text-white")

var anger= document.createElement("i")
anger.setAttribute("class",e.icon)




var anger1= document.createElement("span")
anger1.setAttribute("class","px-1")
anger1.innerHTML=e.rating
anger1.setAttribute("style","font-size:14px")

var anger2= document.createElement("span")
anger2.innerHTML=e.time+" min"
anger2.setAttribute("style","font-size:14px")

var anger3= document.createElement("span")
anger3.innerHTML=e.amt +" For Two"
anger3.setAttribute("style","font-size:14px")

var lastdiv= document.createElement("div")
lastdiv.setAttribute("class","text-center border-top view-hover")

var adddiv = document.createElement("div")
adddiv.setAttribute("class","text-center")

var addcard = document.createElement("button")
addcard.innerHTML="ADD TO CART"
addcard.setAttribute("onclick",`card(${e.id})`)
addcard.setAttribute("class","border-0 mt-4")
addcard.setAttribute("style","color:white;background-color:#17e11c;padding:0px 5px;")

var quick= document.createElement("span")
quick.innerHTML=e.view
quick.setAttribute("class","fw-bold")
quick.setAttribute("style","font-size:12px; padding-bottom:10px; display:inline-block; color:blue;")

if(e.rating>=4){
	anger1.setAttribute("style","background-color:green")
	anger.setAttribute("style","font-size:14px; background-color:green")
}
else if(e.rating>2&&e.rating<4){
	anger1.setAttribute("style","background-color:orange")
	anger.setAttribute("style","font-size:14px; background-color:orange")
}
	
			  

row.append(column)
column.append(imagediv,lastdiv)
imagediv.append(image)
imagediv.append(iconDiv)
iconDiv.append(hotelname,varient,social,adddiv)
social.append(stardiv,anger2,anger3)
stardiv.append(anger,anger1)
lastdiv.append(quick)
// social.append(adddiv)
adddiv.append(addcard)
})

}

//arrow method and function method difference 

//arrow method

// function rating1(){
   // let md= hotel.sort((a, b) => b.rating - a.rating);
   // row.innerHTML=""
   // console.log(md)
   // muthu(hotel)
// }	


//function method

muthu(hotel)

function rating1(){
  let md= hotel.sort(function(a, b){
	  return b.rating - a.rating
   })
   row.innerHTML=""
   console.log(md)
   muthu(hotel)
}	




function price1(){
   hotel.sort((a, b) => a.amt - b.amt);
   row.innerHTML=""
   // console.log(md)
   muthu(hotel)
	
	
}	

function price2(){
   hotel.sort((a, b) => b.amt - a.amt);
   row.innerHTML=""
   // console.log(md)
   muthu(hotel)
	
	
}	

function delivery(){
   let md= hotel.sort((a, b) => a.time - b.time);
   row.innerHTML=""
   console.log(md)
   muthu(hotel)
	
	
}	
function relavance(){
	 let md= hotel.sort(function(a, b){
	  return a.id - b.id
   })
   
    // let md= hotel.sort((a, b) => a.time + b.time);
   // let md= hotel.sort((a, b) => a.length+b.length);
   row.innerHTML=""
   // console.log(md)
   muthu(hotel)
   // console.log()
	
	
}	

function next(){
	location.href="secondpage.html"
}

let order=document.querySelector(".order")
let cardcount=document.querySelector(".cardcount")

    let sum=0
	let sum1=0
	let sum2=0
	let count=0	

	
function card(a,b){
	console.log(a,b)
	let total = document.querySelector(".total")
	
	if(menu.find((e)=>e.id==a)){
		alert("already add to card")
	}
	else{
		 let aa = hotel.find ((v,i)=>{
		 return v.id == a
	 })
	 
	 console.log(aa)
	 menu.push(aa)
	 // menu1.push(aa)
	 console.log(menu)
	 sum1+=parseInt(aa.amt)
	 total.innerHTML="Total Amount : "+ sum1
	 count++
	 cardcount.innerHTML=count
	 adding(aa)
	 del(aa.name,aa.amt)
	 inputt()
	}
	
}	
    



    let add = document.querySelector(".orderslist")
	// let addproduct = adding(menu)

	let div123 = document.createElement("div")
	add.append(div123)
	
	


function adding(e) {
		
		
		div123.innerHTML+=	
		
		`
		<div class="mt-3 row align-items-center add">		
			<div class="col-4">
				<img src="${e.img}" alt="" class="w-100">
			</div>
			<div class="col-4">
				<h6 class="name">${e.name}</h6>
				<h6 class="price">${e.amt}</h6>
			</div>
			<div class="col-2 px-0"><input type="number" value=1 class="w-100 addingItems"></div>
			<div class="col-2 px-0 text-center">
				<i  class="bi bi-trash3 fs-5 text-danger del" style="cursor: pointer;" ></i>
			</div>
		</div>`
	
	
}
del()
	
	
	
function del(){
	
		let dell =document.querySelectorAll(".del")
				dell.forEach((e)=>{
				e.addEventListener("click",RemoveItems)
			})
    
}



function RemoveItems(){
	console.log(this.parentElement)
	            let name = this.parentElement.parentElement.querySelector(".name").innerHTML
				let price = parseInt(this.parentElement.parentElement.querySelector(".price").innerHTML.replace("price",""))
				
				let a = this.parentElement.parentElement.querySelector(".addingItems").value

				
				let total = document.querySelector(".total")

				let PriceDel = menu.find((e)=>{
							return e.name==name
					})
					if (PriceDel) {
						sum2=price*parseInt(a)
						sum1=sum1-sum2
						total.innerHTML="Total Amount:"+sum1
						count--
						cardcount.innerHTML=count	
					}

	
	
	
	
	menu=menu.filter(e=>e.name!=name)
	this.parentElement.parentElement.remove()
	
}




function selectcard() {
			
				order.classList.remove("d-none")			
				order.classList.remove("disallow")
		}
		
		function orderclose() {
			order.classList.add("disallow")
		}
		
		
		
		function inputt(){
		let addingItems = document.querySelectorAll(".addingItems")
		console.log(addingItems)
			
			addingItems.forEach((input)=>{

				input.addEventListener("change",countaddCard)
			})
			

			function countaddCard() {

				if (this.value<1||isNaN(this.value)) {
					this.value=1
				}
				addindTotal()
			}


			function addindTotal() {
				sum=0		
				let adding = document.querySelectorAll(".add")
				let total = document.querySelector(".total")
				
				console.log(adding)

				adding.forEach((e)=>{
					
					let priceElement = e.querySelector(".price")
					console.log(priceElement)
					let price = parseInt(priceElement.innerHTML.replace("price",""))
					console.log(price)
					let a = e.querySelector(".addingItems").value
					console.log(a)
					sum+=price*parseInt(a)
					total.innerHTML="Total Amount "+sum
					sum1 = sum	
				})
					
				

			}
		}
var update= document.getElementById("sec1")
var row= document.getElementById("row")
var card= document.getElementById("card")

var hotel=[{ 
			icon:"bi bi-caret-up-square",
			icon1:"bi bi-star-fill ps-3",
			name:"Chicken Fried Rice",
			addicon:"bi bi-plus-square",
			add:"Add",
			addicon1:"bi bi-dash-square",
			amt:"150",
			
			},
			{ 
			icon:"bi bi-caret-up-square",
			icon1:"bi bi-star-fill ps-3",
			name:"Barbeque Chicken Full Combos",
			addicon:"bi bi-plus-square",
			add:"Add",
			addicon1:"bi bi-dash-square",
			amt:"670",
			
			},
			{ 
			icon:"bi bi-caret-up-square",
			icon1:"bi bi-star-fill ps-3",
			name:"Chinese Combo Meal",
			addicon:"bi bi-plus-square",
			add:"Add",
			addicon1:"bi bi-dash-square",
			amt:"580",
			
			},
			{ 
			icon:"bi bi-caret-up-square",
			icon1:"bi bi-star-fill ps-3",
			name:"Egg Biryani",
			addicon:"bi bi-plus-square",
			add:"Add",
			addicon1:"bi bi-dash-square",
			amt:"500",
			
			},
			{ 
			icon:"bi bi-caret-up-square",
			icon1:"bi bi-star-fill ps-3",
			name:"Paneer Tikka Masala",
			addicon:"bi bi-plus-square",
			add:"Add",
			addicon1:"bi bi-dash-square",
			amt:"650",
			
			}]
			

hotel.map((e) => {


var column= document.createElement("div")
column.setAttribute("class","col-lg-10 col-md-12 col-sm-12 col-12 hhh my-3 border-bottom border-top")

var icondiv= document.createElement("div")
icondiv.setAttribute("class","mt-2")

var icon= document.createElement("i")
icon.setAttribute("class",e.icon)

var icon1= document.createElement("i")
icon1.setAttribute("class",e.icon1)
icon1.setAttribute("style","color:orange")
icon1.innerHTML="Best Sellar"

var iconDiv2= document.createElement("div")
iconDiv2.setAttribute("class","d-flex justify-content-between")


var vname= document.createElement("h5")
vname.setAttribute("class","mt-2")
vname.innerHTML=e.name



var social= document.createElement("div")
social.setAttribute("class","d-flex justify-content-between social-icon fs-5")



var anger= document.createElement("i")
anger.setAttribute("class",e.addicon)
anger.setAttribute("onclick","addicon()")

var addicon1= document.createElement("i")
addicon1.setAttribute("class",e.addicon1)
addicon1.setAttribute("onclick","addicon1()")


var anger1= document.createElement("span")
anger1.setAttribute("class","px-1")
anger1.innerHTML=e.add

var amt= document.createElement("p")
amt.innerHTML=e.amt
			  

row.append(column)
column.append(icondiv,iconDiv2,amt)
icondiv.append(icon,icon1)
iconDiv2.append(vname,social)
social.append(anger,anger1,addicon1)
})



let count=0
function addicon(){
	
      
		  count++
	  card.innerHTML=count
	  card.classList.remove("bi-wallet")
	  card.classList.add("px-2","text-white","bg-success","fs-5")
	 
}


function addicon1(){

	if(count>1){
      --count
	  card.innerHTML=count
	  
	}
	 else if(count==1){
		 --count
		 numm()
	 } 
}
	
	function numm(){
		card.classList.add("bi-wallet")
	  card.classList.remove("px-2","text-white","bg-success")
		card.innerHTML=""
	}
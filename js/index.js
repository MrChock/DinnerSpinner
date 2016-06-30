	var Main_Dish = ["Meat Loaf", "Steak", "Lau Lau", "Shou Chicken", 
"Grilled Salmon", "Shrimp Scampy Pasta", "Spinach", "Garlic", "Kalua Pig", "Olive"];

var Side_Dish = ["Rice", "Mash Potato", "Salad", "Grilled Vegies", 
"Poi", "Lomi Lomi Salmon", "Creamed Spinach", "Mac Salad", "Kalua Pig", "Olive"];


function pickTopping(){
	var Main_index = Math.floor(Math.random()*Main_Dish.length);
	var Side_index = Math.floor(Math.random()*Side_Dish.length);
	document.getElementById('MondayMain').innerHTML = "<h1>"+main_dish[Main_Dish]+" and "+
}


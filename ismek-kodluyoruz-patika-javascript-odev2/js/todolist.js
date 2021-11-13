var tasks=["3 Litre Su İç", "Ödevleri Yap", "En Az 3 Saat Kodlama Yap"];


//localStorage ilk kullanım çağırma

//başta temizlemesini istersek kullanabiliriz
//localStorage.clear();


//let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];


let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : tasks;
console.log(itemsArray);
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));
var sira=itemsArray.length;




$(document).ready(function () {
	// body...


$.each(itemsArray, function (index,item) {
	$("#listTodo").append(" <a href='#'' class='list-group-item list-group-item-action'><input type='checkbox' class='yapilacak'> "+(index+1)+" - "+item+" <span class='close' >x</span></a>");
	
});


})

$("#task").on("keydown",function (event) {
	if(event.keyCode == 13){
		sira++;
		$("#listTodo").append(" <a href='#'' class='list-group-item list-group-item-action'><input type='checkbox' class='yapilacak'> "+(sira)+" - "+$(this).val()+" <span class='close' >x</span></a>");
		//$(this).val("");
                itemsArray.push($(this).val());
  localStorage.setItem('items', JSON.stringify(itemsArray));
                   }
	})


$("#listTodo").on('click', '.yapilacak',function () {
	var satir = $(this).closest("a");
	$(this).removeClass("yapilacak");     
	$(this).addClass("yapilmis");     
	$("#listDone").append(satir);
});

$("#listDone").on('click', '.yapilmis',function () {
	var satir = $(this).closest("a");
	$(this).removeClass("yapilmis");     
	$(this).addClass("yapilacak");     
	$("#listTodo").append(satir);
});

$("#listDone, #listTodo").on('click', '.close',function () {
	var satir = $(this).closest("a");
	$(satir).remove();
});
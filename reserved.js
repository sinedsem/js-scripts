var jQueryScript = document.createElement('script'); jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'); document.head.appendChild(jQueryScript);

let r = [];
$.each($('div.item-info small'), function() {
	const text = $(this).text();
	if (text.indexOf('Индекс') == 0) {
		r.push(text.substring(8));
	}
});
"['" + r.join("', '") + "']";



let items = [];
let sum = 0;
let returned = 0;
$.each($("div.active div.list-item"), function() {
	const id = $(this).find(".prod-name .small").text();
	const price = parseInt($(this).find(".prod-sum-price .price")[0].childNodes[0].textContent.replace(/[^\d]/,''));
	if (items.indexOf(id) !== -1){
		sum += price;
		// console.log(price);
		returned++;
	}
});
console.log(sum);
returned;

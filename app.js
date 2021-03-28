$(document).ready(function () {
	$('nav').slideDown(300);

	$.get('https://fakestoreapi.com/products', function (data) {
		console.log(data[0].title);
		for (var i = 0; i < data.length; i++) {
			if (data[i].category === 'men clothing') {
				console.log('hello');
				$('#mensCategory').append(`
                    <p id='productId'> ${data[i].id} </p>
                    <p id='productTitle'> ${data[i].title} </p>
                    <p id='productDescription'> ${data[i].description} </p>
                    <img src='${data[i].image}'>
                    <div>
                        <form class='form'>
                            <input type="number" class="itemQuantity" name="tentacles" min="0" max="100" placeholder='0'>
                            <button id='addToCart' type='submit'>Add To Cart</button>
                        </form>
                        <p id='productPrice'> $${data[i].price} </p>
                    </div>
                    <hr />
                `);
			} else if (data[i].category === 'women clothing') {
				console.log('hello');
				$('#womensCategory').append(`
                    <p id='productId'> ${data[i].id} </p>
                    <p id='productTitle'> ${data[i].title} </p>
                    <p id='productDescription'> ${data[i].description} </p>
                    <img src='${data[i].image}'>
                    <div>
                        <form class='form'>
                            <input type="number" class="itemQuantity" name="tentacles" min="0" max="100" placeholder='0'>
                            <button class='addToCart' type='submit'>Add To Cart</button>
                        </form>
                        <p id='productPrice'> $${data[i].price} </p>
                    </div>
                    <hr />
                `);
			} else if (data[i].category === 'jewelery') {
				console.log('hello');
				$('#jeweleryCategory').append(`
                    <p id='productId'> ${data[i].id} </p>
                    <p id='productTitle'> ${data[i].title} </p>
                    <p id='productDescription'> ${data[i].description} </p>
                    <img src='${data[i].image}'>
                    <div>
                        <form class='form'>
                            <input type="number" class="itemQuantity" name="tentacles" min="0" max="100" placeholder='0'>
                            <button class='addToCart' type='submit'>Add To Cart</button>
                        </form>
                        <p id='productPrice'> $${data[i].price} </p>
                    </div>
                    <hr />
                `);
			} else if (data[i].category === 'electronics') {
				console.log('hello');
				$('#electronicCategory').append(`
                    <p id='productId'> ${data[i].id} </p>
                    <p id='productTitle'> ${data[i].title} </p>
                    <p id='productDescription'> ${data[i].description} </p>
                    <img src='${data[i].image}'>
                    <div>
                        <form class='form'>
                            <input type="number" class="itemQuantity" name="tentacles" min="0" max="100" placeholder='0'>
                            <button class='addToCart' type='submit'>Add To Cart</button>
                        </form>
                        <p id='productPrice'> $${data[i].price} </p>
                    </div>
                    <hr />
                `);
			}
		}

		$('#addToCart').click(function () {
			$('.form').submit(function () {
				var quantity = $('.itemQuantity').val();
				$('#totalAmount').html(`$${data[0].price * quantity}  `);
				return false;
			});
		});

		var IdAndPrice = []; // getting the ID and Price of the item

		$.get('https://fakestoreapi.com/products', function (data) {
			for (var i = 0; i < data.length; i++) {
				var x = data[i].id;
				var y = data[i].price;
				var xy = [x, y];
				IdAndPrice.push(xy);
			}
		});

		console.log(IdAndPrice);

		$('#mensTab').click(function () {
			$('#womensCategory').hide();
			$('#jeweleryCategory').hide();
			$('#electronicCategory').hide();
			$('#mensCategory').show();
		});
		$('#womensTab').click(function () {
			$('#mensCategory').hide();
			$('#jeweleryCategory').hide();
			$('#electronicCategory').hide();
			$('#womensCategory').show();
		});
		$('#jeweleryTab').click(function () {
			$('#womensCategory').hide();
			$('#mensCategory').hide();
			$('#electronicCategory').hide();
			$('#jeweleryCategory').show();
		});
		$('#electronicTab').click(function () {
			$('#womensCategory').hide();
			$('#jeweleryCategory').hide();
			$('#mensCategory').hide();
			$('#electronicCategory').show();
		});
		$('#backToTop').click(function () {
			$('html, body').animate({ scrollTop: 0 }, 300);
		});
	});
});

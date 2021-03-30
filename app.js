$(document).ready(function () {
	$('nav').slideDown(300);

	$.get('https://fakestoreapi.com/products', function (data) {
		console.log(data[0].title);
		for (var i = 0; i < data.length; i++) {
			if (data[i].category === 'men clothing') {
				console.log('hello');
				$('#mensCategory').append(`
                    <p id='productTitle'> ${data[i].title} </p>
                    <p id='productDescription'> ${data[i].description} </p>
                    <img src='${data[i].image}'>
                    <div>
                        <form class='form'>
                            <input type="number" id='input${data[i].id}' class="itemQuantity" name="tentacles" min="0" max="100" placeholder='0'>
                            <button id='${data[i].id}' type='submit'>Add To Cart</button>
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
                            <input type="number" id='input${data[i].id}' class="itemQuantity" name="tentacles" min="0" max="100" placeholder='0'>
                            <button id='${data[i].id}' type='submit'>Add To Cart</button>
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
                            <input type="number" id='input${data[i].id}' class="itemQuantity" name="tentacles" min="0" max="100" placeholder='0'>
                            <button id='${data[i].id}' type='submit'>Add To Cart</button>
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
                            <input type="number" id='input${data[i].id}' class="itemQuantity" name="tentacles" min="0" max="100" placeholder='0'>
                            <button id='${data[i].id}' type='submit'>Add To Cart</button>
                        </form>
                        <p id='productPrice'> $${data[i].price} </p>
                    </div>
                    <hr />
                `);
			}
		}

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
		$.get('https://fakestoreapi.com/products', function (data) {
			$('#1').click(function () {
				$('form').submit(function () {
					var quantity = $('#input1').val();
					$('#totalAmount').html(`$${data[0].price * quantity}  `);
					return false;
				});
			});
			$('#2').click(function () {
				$('form').submit(function () {
					var quantity = $('#input2').val();
					$('#totalAmount').html(`$${data[1].price * quantity}  `);
					return false;
				});
			});
			$('#3').click(function () {
				$('form').submit(function () {
					var quantity = $('#input3').val();
					$('#totalAmount').html(`$${data[2].price * quantity}  `);
					return false;
				});
			});
			$('#4').click(function () {
				$('form').submit(function () {
					var quantity = $('#input4').val();
					$('#totalAmount').html(`$${data[3].price * quantity}  `);
					return false;
				});
			});
			$('#5').click(function () {
				$('form').submit(function () {
					var quantity = $('#input5').val();
					$('#totalAmount').html(`$${data[4].price * quantity}  `);
					return false;
				});
			});
			$('#6').click(function () {
				$('form').submit(function () {
					var quantity = $('#input6').val();
					$('#totalAmount').html(`$${data[5].price * quantity}  `);
					return false;
				});
			});
			$('#7').click(function () {
				$('form').submit(function () {
					var quantity = $('#input7').val();
					$('#totalAmount').html(`$${data[6].price * quantity}  `);
					return false;
				});
			});
			$('#8').click(function () {
				$('form').submit(function () {
					var quantity = $('#input8').val();
					$('#totalAmount').html(`$${data[7].price * quantity}  `);
					return false;
				});
			});
			$('#9').click(function () {
				$('form').submit(function () {
					var quantity = $('#input9').val();
					$('#totalAmount').html(`$${data[8].price * quantity}  `);
					return false;
				});
			});
			$('#10').click(function () {
				$('form').submit(function () {
					var quantity = $('#input10').val();
					$('#totalAmount').html(`$${data[9].price * quantity}  `);
					return false;
				});
			});
			$('#11').click(function () {
				$('form').submit(function () {
					var quantity = $('#input11').val();
					$('#totalAmount').html(`$${data[10].price * quantity}  `);
					return false;
				});
			});
			$('#12').click(function () {
				$('form').submit(function () {
					var quantity = $('#input12').val();
					$('#totalAmount').html(`$${data[11].price * quantity}  `);
					return false;
				});
			});
			$('#13').click(function () {
				$('form').submit(function () {
					var quantity = $('#input13').val();
					$('#totalAmount').html(`$${data[12].price * quantity}  `);
					return false;
				});
			});
			$('#14').click(function () {
				$('form').submit(function () {
					var quantity = $('#input14').val();
					$('#totalAmount').html(`$${data[13].price * quantity}  `);
					return false;
				});
			});
			$('#15').click(function () {
				$('form').submit(function () {
					var quantity = $('#input15').val();
					$('#totalAmount').html(`$${data[14].price * quantity}  `);
					return false;
				});
			});
			$('#16').click(function () {
				$('form').submit(function () {
					var quantity = $('#input16').val();
					$('#totalAmount').html(`$${data[15].price * quantity}  `);
					return false;
				});
			});
			$('#17').click(function () {
				$('form').submit(function () {
					var quantity = $('#input17').val();
					$('#totalAmount').html(`$${data[16].price * quantity}  `);
					return false;
				});
			});
			$('#18').click(function () {
				$('form').submit(function () {
					var quantity = $('#input18').val();
					$('#totalAmount').html(`$${data[17].price * quantity}  `);
					return false;
				});
			});
			$('#19').click(function () {
				$('form').submit(function () {
					var quantity = $('#input19').val();
					$('#totalAmount').html(`$${data[18].price * quantity}  `);
					return false;
				});
			});
			$('#20').click(function () {
				$('form').submit(function () {
					var quantity = $('#input20').val();
					$('#totalAmount').html(`$${data[19].price * quantity}  `);
					return false;
				});
			});
		});

		$('#totalAmount');

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

// Aeslink-ii
// by Cyra

// Starts AESLINK-II //
console.log('Initialize...');

$('#edit_button').on('click', ()=>{
	let right = $('#edit_menu').css('right');
	if (right == '-336px') {
		$('#edit_menu').css('right','16px');
		$('#edit_button').attr('open',true);

	} else if (right == '16px') {
		$('#edit_menu').css('right','-336px');
		$('#edit_button').attr('open',false);
	}

});
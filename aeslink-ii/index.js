// Aeslink-ii
// by Cyra

console.log('Initialize...');
$('#edit_menu').css('right','-336px')

$('#edit_button').on('click', ()=>{
	let right = $('#edit_menu').css('right');
	if (right == '-336px') {
		$('#edit_menu').css('right','16px');
	} else if (right == '16px') {
		$('#edit_menu').css('right','-336px');
	}
});
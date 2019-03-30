$( document ).ready(function() {

		$('#editor').on('keyup', function() {



		});

});

function language_type(a) {
	switch(a) {
	    case 1:
	        return "javascript";
	        break;

	    case 2:
	        return "php";
	        break;

	    case 3:
	        return "c_cpp";
	        break;

	    case 4:
	        return "java";
	        break;

	    case 5:
	        return "python";
	        break;

	    case 6:
	        return "c_cpp";
	        break;

	    default:
	        //return "plaintext";
	        break;
	}
}


$('#select_graph').on('change', function() {
		var editor = ace.edit("editor");
		var lang = this.value;
		var exist_codes = document.getElementById("exist_codes");

		$.ajax({
			url: 'php/get_codes.php',
			dataType: 'text',
			type: 'post',
			contentType: 'application/x-www-form-urlencoded',
			data: { language: lang },
			success: function( data, textStatus, jQxhr ){
				exist_codes.innerHTML = `
					<option value="0">Select Existing Codes</option>
					` + data;
			},
			error: function( jqXhr, textStatus, errorThrown ) {
			    console.log( errorThrown );
			}
		});

		var get_exist_id = $("#exist_codes").value;

		if (get_exist_id == 0) {
			//$('#save').prop("disabled", false);
		} else {
			$('#save').prop("disabled", false);
		}

});

$('#exist_codes').on('change', function() {
		var cid = this.value;
		var title_html = document.getElementById("title");
		title = this.options[this.selectedIndex].text;
		
		if (!(this.value == 0)) {
			title_html.value = title;
		} else {
			title_html.value = "";
		}

		$.ajax({

			url: 'php/get_code_content.php',
			dataType: 'text',
			type: 'post',
			contentType: 'application/x-www-form-urlencoded',
			data: { code_id : cid },
			success: function( data, textStatus, jQxhr ){
				var editor = ace.edit("editor");
				editor.setValue(data);

			},
			error: function( jqXhr, textStatus, errorThrown ) {
			    //console.log( errorThrown );
			}
		});

		if (this.value != 0) {
			$('#save').prop("disabled", true);
			$('#update').prop("disabled", false);
			$('#delete').prop("disabled", false);
		} else {
			$('#save').prop("disabled", false);
			$('#update').prop("disabled", true);
			$('#delete').prop("disabled", true);
		}


});

$('#update').on('click', function() {
		var id = $('#exist_codes').val();
		var title = $('#title').val();
		var editor = ace.edit("editor");
		var editor_val = editor.getValue();
		var exist_ = document.getElementById('exist_codes');

		$.ajax({
			url: 'php/update.php',
			dataType: 'text',
			type: 'post',
			contentType: 'application/x-www-form-urlencoded',
			data: { cid: id, t: title, code: editor_val },
			success: function( data, textStatus, jQxhr ){
				if (data.includes('success')) {
					alert('Code Updated Successfully');
					//$("#body").load('index.html');
					exist_.options[exist_.selectedIndex].text = title;
				} else {
					alert('Error: Unable to update the code...');
					//console.log(data);
				}


			},
			error: function( jqXhr, textStatus, errorThrown ) {
			    console.log( errorThrown );
			}
		});

});

$('#save').on('click', function() {
		var title = $('#title').val();
		var editor = ace.edit("editor");
		var editor_val = editor.getValue();
		var lang = $('#select_graph').val();

		$.ajax({
			url: 'php/save.php',
			dataType: 'text',
			type: 'post',
			contentType: 'application/x-www-form-urlencoded',
			data: { t: title, code: editor_val, language: lang},
			success: function( data, textStatus, jQxhr ){
				if (data.includes('success')) {
					alert('Code Saved Successfully');
     				$("#body").load('index.html');
				} else {
					alert('Error: Unable to save the code...');
					//console.log(data+ "  lang: "+ lang);
				}


			},
			error: function( jqXhr, textStatus, errorThrown ) {
			    console.log( errorThrown );
			}
		});

});


$('#delete').on('click', function() {
		var id = $('#exist_codes').val();

		$.ajax({
			url: 'php/delete.php',
			dataType: 'text',
			type: 'post',
			contentType: 'application/x-www-form-urlencoded',
			data: { cid: id },
			success: function( data, textStatus, jQxhr ){
				if (data.includes('success')) {
					alert('Code Deleted Successfully');
					$("#body").load('index.html');
				} else {
					alert('Error: Unable to delete the code...');
					//console.log(data);
				}


			},
			error: function( jqXhr, textStatus, errorThrown ) {
			    console.log( errorThrown );
			}
		});

});

$('#truncate').on('click', function() {
		var choice = confirm("Are you sure that you want to empty the database?");
		
		if (choice == true) {
			$.ajax({
				url: 'php/truncate.php',
				type: 'post',
				success: function( data, textStatus, jQxhr ){
					if (data.includes('success')) {
						alert('Truncate Successful');
						$("#body").load('index.html');
					} else {
						alert('Error: Unable to truncate the database...');
						//console.log(data);
					}


				},
				error: function( jqXhr, textStatus, errorThrown ) {
				    console.log( errorThrown );
				}
			});

		}


});

(function() {			
	// Get images														
	var $imgs = $('.list a');
	// Get user input 							
	var $search = $('#search');
				
	var saved = [];		

	// For each image													
	$imgs.each(function() {		
		// Add object to the saved array
		saved.push({
			// With this image															
			element: this,							
			// Images's alt text in lowercase					
			text: this.title.trim().toLowerCase()			
		});
	});

	// Declare function called filter() 
	function filter() {				
		// Get query										
		var query = this.value.trim().toLowerCase();
		
		// For each entry in saved array, allow image
		saved.forEach(function(img) {		
				// Set index to 0						
				var index = 0;	
				// If there is some query text												
				if (query) {							
					// Find if query text is in there							
					index = img.text.indexOf(query);			
				}

				// Show / hide
				img.element.style.visibility = index === -1 ? 'hidden' : '';

		});
	}

	// If browser supports input event
	if ('oninput' in $search[0]) {
		// Use input event to call filter()								
		$search.on('input', filter);		
		// Otherwise						
	} else {									
		// Use keyup event to call filter()									
		$search.on('keyup', filter);								
	}																				
}());
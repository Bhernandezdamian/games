window.addEventListener('load', function() {
	// Get the iframe element
	var iframe = document.querySelector('iframe');

	// Resize the iframe when the window is resized
	window.addEventListener('resize', function() {
		// Set the height of the iframe to match the height of its content
		iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
	});
});








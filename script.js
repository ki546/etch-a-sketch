$(document).ready(function(){

	/* Create default sketch sheet */
	var defaultSquares = 10;
	var sheetSize = 460;
	createSheet(defaultSquares, sheetSize);

	/* When click on "New Grid" button */
	/** Clear current sheet, prompt user to input new sheet size, create new sheet with user size **/
	$("#newSheet").click(function(){
		createSheet(prompt("How many squares across?"),sheetSize);
		});
		
}); 

/* Function that changes square to black */
function squareBlack(currentSquare){
	$(currentSquare).css('background-color','black');
}

/* Function that changes square to white */
function squareWhite(currentSquare){
	$(currentSquare).css('background-color','#bfbfbf');
} 

/* Function that creates a new sheet */
function createSheet(nSquares, padLength){
	/* Remove any existing grid */
	$(".row").fadeOut('slow');
	$(".row").remove();

	/* Square length is the total length divide by number of squares */
	var length = (padLength/nSquares);
	var squareLength = length + "px";

	/* Add rows */
	for( var i = 0; i < nSquares; i++ )
		$("#container").append("<div class='row'></div>");	

	/* Set square height */
	$('.row').css('height',squareLength);

	/* Add columns */
	for( var i = 0; i < nSquares; i++)
		$('.row').append("<div></div>");

	/* Set square size */
	$('.row > div').css('height',squareLength);
	$('.row > div').css('width',squareLength);

	/* Turn on sketching */
	sketch();
}

/* Function that turns sketching on for new sheets */
function sketch(){
	/* When mouse enters a square, leave it a different color. */
	$(".row > div").hover( 
		function(){
			squareBlack(this);
		}, 
		function(){
			squareWhite(this); 
		});
}
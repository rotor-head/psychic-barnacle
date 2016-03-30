// Original author 
$(document).ready(function(){
var qIndex;
// I need to redirect the user to the quote they want to read completely, as in Twitter it was truncated.
var parameter = {};// This is a very useful function to get the URL parameters. I found it @ http://snipplr.com/view/19838/get-url-parameters/
function getUrlParams() { 
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(param,i,value) {
parameter[i] = value;
});
return parameter;
}
var myResult = getUrlParams()["id"];
if (!isNaN(myResult) && (myResult >= 0) && (myResult < quotations.length)) // In this way I avoid errors due to non-handled parameters.
{	
        qIndex = myResult;

		$('#forQuotation').text(quotations[qIndex].quotation);
		$('#forAuthor').text(quotations[qIndex].author);
		
		$('#quoteGen').click( function(){
		qIndex = Math.floor(Math.random()*quotations.length);

			$('#forQuotation').text(quotations[qIndex].quotation);
			$('#forAuthor').text(quotations[qIndex].author);
});

}
else
{


		qIndex = Math.floor(Math.random()*quotations.length);

		$('#forQuotation').text(quotations[qIndex].quotation);
		$('#forAuthor').text(quotations[qIndex].author);
	
		$('#quoteGen').click( function(){
		qIndex = Math.floor(Math.random()*quotations.length);

			$('#forQuotation').text(quotations[qIndex].quotation);
			$('#forAuthor').text(quotations[qIndex].author);
});


}

	$('#twitterBt').click( function(){
		var forTweet = quotations[qIndex].quotation + " (" + quotations[qIndex].author + ") @grafercode";
		var newTweet = "http://twitter.com/home/?status=" + forTweet; 
		
		if (forTweet.length < 141)
		{
			window.open(newTweet, "_blank");
			
		}
		else // If my quote and specifications is longer than 140 chars, it will be truncated
		{
			var forTweet1 = "";
			var i = 0;
			var tempArr = quotations[qIndex].quotation.split(" ");
			while(forTweet1.length < 60)  
			 {
				 forTweet1 = forTweet1 + tempArr[i] + " "; // In this way the truncated will end with a whole word.
				 i++;
			 }
			 var newTweet1 = "http://twitter.com/home/?status=" + forTweet1.slice(0,-1) + "... Continue reading @ http://grafercode.com?id=" + qIndex + " (" + quotations[qIndex].author + ") @grafercode" ; // slice(0, -1) just to take of the last blank space before adding ...
			
			window.open(newTweet1, "_blank");
		}
		
		
});

});

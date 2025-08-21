$("#referValue").on('click', function () {
	var htm=''
		+'<div class="table-container">'
		+'  <table class="table table-bordered " >'
		+' <thead>'
		+'    <tr style="background-color:#333;color:#fff;">'
			+'      <th>ELEMENT</th>'
			+'     <th>VALUE</t>'

			+' </tr>'
		+'   </thead>'
		+'   <tbody>'
		
		
		MasterJson.forEach(function (item, index) {
		    console.log(`Object ${index + 1}:`);
		    Object.keys(item).forEach(function (key) {
		    	
		    	htm+='    <tr>'
					+'      <td>'+key+'</td>'
					+'     <td>'+item[key]+'</td>'

					+' </tr>'
	
		    });
		});
		htm+='  </tbody>'
		+'  </table>'
		$("#referTable").html(htm);
		
});
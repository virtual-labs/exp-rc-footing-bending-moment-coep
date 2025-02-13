var workingPVal,workingMVal,concreteGrade,steelGrade,bcVal,dcVal,sbcVal,effVal;
var jsonArray=[];
concreteGrade=0;
steelGrade=0;

function ConfigrationPage(){

var selection =''
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Enter working load(P) : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<input type="number" id="workingPVal" style= "width:100%;"  class=" form-control marginBottom input-field"   >'
	   +'</div>'
	   +'</div>'
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Enter working Moment(M) : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<input type="number" id="workingMVal" style= "width:100%;"  class=" form-control marginBottom input-field"   >'
	   +'</div>'
	   +'</div>'
	   +  '<div class="row"  >'
		 +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Grade of Concrete f<sub>ck</sub>(N/mm<sup>2</sup>) : </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf marginBottom input-field" id="concreteGrade"  style="height:auto; " >'
	   +'<option value="0">--- Select grade of concrete --- </option>'
	   +'<option value="20" >M20  </option>'
	   +'<option value="25" >M25  </option>'
	   +'<option value="30" >M30  </option>'
	   +'<option value="35" >M35  </option>'
	   +'<option value="40" >M40  </option>'
	   +'<option value="45" >M45  </option>'
	   +'<option value="50" >M50  </option>'
	   +'<option value="55" >M55  </option>'
	   +'<option value="60" >M60  </option>'
	   +'<option value="65" >M65  </option>'
	   +'<option value="70" >M70  </option>'
	   +'<option value="75" >M75  </option>'
	   +'<option value="80" >M80  </option>'		    
	   +'</select>'
	   +'</div>'
	   +'</div>'
	   + '<div class="row"  >'
	    +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Grade of Steel f<sub>y</sub>(N/mm<sup>2</sup>) : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control selectConf marginBottom input-field" id="steelGrade"  style="height:auto; "  >'
	   +'<option value="0">--- Select grade of steel --- </option>'
	   +'<option value="250" >Fe250  </option>'
	   +'<option value="415" >Fe415  </option>'
	   +'<option value="500" >Fe500  </option>'
	   +'</select>'	   
	   +'</div>'
	   +'</div>'
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Size of column b<sub>c</sub>(mm) : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<input type="number" id="bcVal" style= "width:100%;"  class=" form-control marginBottom input-field"   >'
	   +'</div>'
	   +'</div>'
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom"> d<sub>c</sub>(mm) : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<input type="number" id="dcVal" style= "width:100%;"  class=" form-control marginBottom input-field"   >'
	   +'</div>'
	   +'</div>'
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom"> SBC of Soil(kN/m<sup>2</sup>) : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<input type="number" id="sbcVal" style= "width:100%;"  class=" form-control marginBottom input-field"   >'
	   +'</div>'
	   +'</div>'
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom"> Effective cover d<sup>'+"'"+'</sup>(mm) : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<input type="number" id="effVal" style= "width:100%;"  class=" form-control marginBottom input-field"   >'
	   +'</div>'
	   +'</div>'
	   +'<div class="row" id="levelDiv1" >'
	   +'<div class="col-sm-12">'	   
//	   +'	<div class="alert alert-info">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="NextLevel1" >NEXT LEVEL</button>'
//	  +'	</div>'  	   	 
  	   +'</div>'	   
  	   +'</div>'
	   $("#page1Div2").html(selection);

$("#workingMVal").on("change", function () {
	
	workingMVal= $(this).val();
	let value =workingMVal;
    
    let minValue = 100;  // Set your minimum value
    let maxValue = 3000; // Set your maximum value
  

    // Check if input contains alphabets
    if (/[^0-9]/.test(value)) {
    	$(this).val("");
    	toastr.info("Only numbers allowed!");
    } 
    // Check for negative values
    else if (value.startsWith("-")) {
    	$(this).val("");
    	toastr.info("Negative values are not allowed!");
    } 
    // Check min and max value
    else if (value !== "" && (parseInt(value) < minValue || parseInt(value) > maxValue)) {
    	$(this).val("");
    	toastr.info("Value must be between "+minValue+" and "+maxValue);
    }

});
$("#workingPVal").on("change", function () {
	
	workingPVal= $(this).val();
	let value =workingPVal;
    
    let minValue = 100;  // Set your minimum value
    let maxValue = 3000; // Set your maximum value
  

    // Check if input contains alphabets
    if (/[^0-9]/.test(value)) {
    	$(this).val("");
    	toastr.info("Only numbers allowed!");
    } 
    // Check for negative values
    else if (value.startsWith("-")) {
    	$(this).val("");
    	toastr.info("Negative values are not allowed!");
    } 
    // Check min and max value
    else if (value !== "" && (parseInt(value) < minValue || parseInt(value) > maxValue)) {
    	$(this).val("");
    	toastr.info("Value must be between "+minValue+" and "+maxValue);
    }

});


$("#concreteGrade").on("change", function () {
	
	concreteGrade= $(this).val();
	let value =concreteGrade;
   // Check if input contains alphabets
    if (value==0) {
    	toastr.info("Select concreteGrade");
    } 
    

});

$("#steelGrade").on("change", function () {
	
	steelGrade= $(this).val();
	let value =steelGrade;
   // Check if input contains alphabets
    if (value==0) {
    	toastr.info("Select steelGrade");
    } 
    

});
$("#bcVal").on("change", function () {
	
    bcVal= $(this).val();
	let value =bcVal;
    
    let minValue = 200;  // Set your minimum value
    let maxValue = 1000; // Set your maximum value
  

    // Check if input contains alphabets
    if (/[^0-9]/.test(value)) {
    	$(this).val("");
    	
    	toastr.info("Only numbers allowed!");
    } 
    // Check for negative values
    else if (value.startsWith("-")) {
    	$(this).val("");
    	toastr.info("Negative values are not allowed!");
    } 
    // Check min and max value
    else if (value !== "" && (parseInt(value) < minValue || parseInt(value) > maxValue)) {
    	$(this).val("");
    	toastr.info("Value must be between "+minValue+" and "+maxValue);
    }

});

$("#dcVal").on("change", function () {
	
	  dcVal= $(this).val();
		let value =dcVal;
    let minValue = 200;  // Set your minimum value
    let maxValue = 1000; // Set your maximum value
  

    // Check if input contains alphabets
    if (/[^0-9]/.test(value)) {
    	$(this).val("");
    	toastr.info("Only numbers allowed!");
    } 
    // Check for negative values
    else if (value.startsWith("-")) {
    	$(this).val("");
    	toastr.info("Negative values are not allowed!");
    } 
    // Check min and max value
    else if (value !== "" && (parseInt(value) < minValue || parseInt(value) > maxValue)) {
    	$(this).val("");
    	toastr.info("Value must be between "+minValue+" and "+maxValue);
    }

});
$("#sbcVal").on("change", function () {
	
	  sbcVal= $(this).val();
		let value =sbcVal;
    let minValue = 150;  // Set your minimum value
    let maxValue = 3300; // Set your maximum value
  

    // Check if input contains alphabets
    if (/[^0-9]/.test(value)) {
    	$(this).val("");
    	toastr.info("Only numbers allowed!");
    } 
    // Check for negative values
    else if (value.startsWith("-")) {
    	$(this).val("");
    	toastr.info("Negative values are not allowed!");
    } 
    // Check min and max value
    else if (value !== "" && (parseInt(value) < minValue || parseInt(value) > maxValue)) {
    	$(this).val("");
    	toastr.info("Value must be between "+minValue+" and "+maxValue);
    }

});
$("#effVal").on("change", function () {
	
	  effVal= $(this).val();
		let value =effVal;
    let minValue = 50;  // Set your minimum value
    let maxValue = 75; // Set your maximum value
  

    // Check if input contains alphabets
    if (/[^0-9]/.test(value)) {
    	$(this).val("");
    	toastr.error("Only numbers allowed!");
    } 
    // Check for negative values
    else if (value.startsWith("-")) {
    	$(this).val("");
    	toastr.error("Negative values are not allowed!");
    } 
    // Check min and max value
    else if (value !== "" && (parseInt(value) < minValue || parseInt(value) > maxValue)) {
    	$(this).val("");
    	toastr.info("Value must be between "+minValue+" and "+maxValue);
    }

});

$("#NextLevel1").click(function(){
	
		let allFilled = true;
	    $(".input-field").each(function () {
	        if ($(this).val().trim() === "" ||concreteGrade==0||steelGrade==0) {
	            allFilled = false;
	        }
	    });

	    if (!allFilled) {
	    	toastr.info("All fields must be filled!");
	    } else {
	    	
//	        $("#error-msg").text(""); // Clear error message
//	       toastr.info("All fields are filled. Proceeding.");

	    	$("#page1").prop("hidden",true);
	    	$("#referValue").prop("disabled",false);
	    	$("#page2").prop("hidden",false);
	    
	        tempMasterJson = {
	    			"Working Load(P)":workingPVal,
	    			"Working Moment(M)":workingMVal,
	    			"Grade of concrete f<sub>ck</sub>(N/mm<sup>2</sup>)":concreteGrade,
	    			"Grade of Steel f<sub>y</sub>(N/mm<sup>2</sup>)":steelGrade,
	    			"Size of column b<sub>c</sub>(mm)":bcVal,
	    			"d<sub>c</sub>(mm)":dcVal,
	    			"SBC of Soil(N/mm<sup>2</sup>)":sbcVal,
	    			"Effective Cover(mm)":effVal,
	    			};
	    	jsonArray.push(tempMasterJson);
	    	
	    	MasterJson=jsonArray;
	    	console.log(MasterJson);
	    	Calculation();
	    }
	
});
}
	
	
	
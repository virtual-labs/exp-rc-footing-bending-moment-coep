var safeWeightVal;

var calFactLoad;
var calMomentLoad;
var calSelfWeightFooting;
var calTotalLoad;
var calAreaFooting;
var calLengthFooting;
var calWeightFooting=0;
var lfVal;
var bfVal;
function Calculation(){
	
	calFactLoad=parseFloat(workingPVal)*1.5;
	calMomentLoad=parseFloat(workingMVal)*1.5;
	var htm=''
		 +'<div class="row" >'
		   +'<div class="col-sm-12">'	   
		   +'	<div class="alert alert-primary">'
	 	   +' 		<strong class="" id=""><center>Factored load(Pu) :'+calFactLoad+'</center></strong> '
		   +'	</div>'  	   	 
		   +'</div>'	   
		   +'</div>'
		   +'<div class="row" >'
		   +'<div class="col-sm-12">'	   
		   +'	<div class="alert alert-primary">'
	 	   +' 		<strong class="" id=""><center>Factored Moment(Mu) :'+calMomentLoad+'</center></strong> '
		   +'	</div>'  	   	 
		   +'</div>'	   
		   +'</div>'
		   +'<div class="row" >'
		   +'<div class="col-sm-12">'	   
		   +'	<div class="alert alert-primary">'
	 	   +' 		<strong class="" id=""><center>Load from column(kN) :'+workingPVal+'</center></strong> '
		   +'	</div>'  	   	 
		   +'</div>'	   
		   +'</div>'
		   +'<div class="row">'
		   +'<div class="col-sm-6">'
		   +'<label class="labelstyle marginBottom">Calculate Self weight of footing(%) : </label>'
		   +'</div>'
		   +'<div class="col-sm-6">'
		   +'<input type="number" id="safeWeightVal" style= "width:100%;"  class=" form-control marginBottom input-field"   >'
		   +'</div>'
		   +'</div>'
		   +'<div class="row" id="selfWeightFootingDiv" hidden>'
		   +'<div class="col-sm-12">'	   
		   +'	<div class="alert alert-primary">'
	 	   +' 		<strong class="" id="selfWeightFooting"></strong> '
		   +'	</div>'  	   	 
		   +'</div>'	   
		   +'</div>'
		   +'<div class="row" id="totalLoadDiv" hidden>'
		   +'<div class="col-sm-12">'	   
		   +'	<div class="alert alert-primary">'
	 	   +' 		<strong class="" id="totalLoad"></strong> '
		   +'	</div>'  	   	 
		   +'</div>'	   
		   +'</div>'

		   +'<div class="row calRowBorder" id="areaFootingDiv" hidden >'
		   +'<div class="col-sm-5">'
		   +'<label class="labelstyle ">Area of footing(A<sub>f</sub>)m<sup>2</sup> : </label>'
		   +'</div>'	    
		   +'<div class="col-sm-4">'
		   +'<input type="number" id="areaFootingVal" style= "width:100%;"  class="form-control" >'
		   +'</div>'
		   +'<div class="col-sm-3" id="">'
		   +'<button type="button" class="btn btn-danger btnDesign" style = "width:100%;" id="areaFootingSubmit" data-toggle="modal" data-target="#ModalAreaFooting" >SUBMIT</button>'
		   +'</div>'	     
		   +'</div>'
		   
//		   +'<div class="row" id="lengthFootingDiv" hidden>'
//		   +'<div class="col-sm-12">'	   
//		   +'	<div class="alert alert-primary">'
//	 	   +' 		<strong class="" id="lengthFooting"></strong> '
//		   +'	</div>'  	   	 
//		   +'</div>'	   
//		   +'</div>'
		   +'<div class="row" id="lengthFootingDiv" hidden>'
		   +'<div class="col-sm-6">'
		   +'<label class="labelstyle marginBottom">Length of footing (L<sub>f</sub>)m : </label>'
		   +'</div>'
		   +'<div class="col-sm-6">'
		   +'<input type="number" id="lfVal" style= "width:100%;"  class=" form-control marginBottom input-field"   >'
		   +'</div>'
		   +'</div>'
		   +'<div class="row" id="weightFootingDiv" hidden>'
		   +'<div class="col-sm-12">'	   
		   +'	<div class="alert alert-primary">'
	 	   +' 		<strong class="" id="weightFooting"></strong> '
		   +'	</div>'  	   	 
		   +'</div>'	   
		   +'</div>'
		   +' <!-- The Modal -->'
		   +' <div class="modal fade" id="ModalAreaFooting">'
		   +'   <div class="modal-dialog modal-xl">'
		   +'     <div class="modal-content">'
		       
		   +'       <!-- Modal Header -->'
		   +'       <div class="modal-header">'
		   +'         <h4 class="modal-title">Message Box</h4>'
		   +'        <button type="button" class="close" data-dismiss="modal">&times;</button>'
		   +'      </div>'
		         
		   +'     <!-- Modal body -->'
		   +'     <div class="modal-body" id="ModalBodyAreaFootingMsg">'
	       +'        Modal body..'
	       +'      </div>'
		         
	       +'      <!-- Modal footer -->'
	       +'      <div class="modal-footer">'
	       +'        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'
	       +'      </div>'
		         
	       +'     </div>'
	       +'   </div>'
	       +'  </div>'
	       +'<div class="row" id="levelDiv2" hidden>'
		   +'<div class="col-sm-12">'	   
//		   +'	<div class="alert alert-info">'
		   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="NextLevel2" >NEXT LEVEL</button>'
//		  +'	</div>'  	   	 
	  	   +'</div>'	   
	  	   +'</div>'
		   $("#page2Div2").html(htm);
	
		   $("#safeWeightVal").on("change", function () {
				
			   safeWeightVal= $(this).val();
				let value =safeWeightVal;
			    let minValue = 10;  // Set your minimum value
			    let maxValue = 15; // Set your maximum value
			   // Check if input contains alphabets
			    if (/[a-zA-Z]/.test(value)) {
			        $(this).val("");
			        toastr.info("Characters are not allowed! Only numbers.");
			    }
			    // Check for negative values
			    else if (value.startsWith("-")) {
			    	$(this).val("");
			    	toastr.info("Negative values are not allowed!");
			    } 
			    // Check min and max value
			    else if (value !== "" && (parseInt(value) < minValue || parseInt(value) > maxValue)) {
			    	toastr.info("Value must be between "+minValue+" and "+maxValue);
			    }
			    else
			    	{
			    	$("#selfWeightFootingDiv,#totalLoadDiv,#areaFootingDiv").prop("hidden",false);
			    	$("#safeWeightVal").prop("disabled",true);
			    	calSelfWeightFooting=parseFloat(parseFloat(workingPVal)*parseFloat(safeWeightVal)/100);
			    	calTotalLoad=parseFloat(calSelfWeightFooting+parseFloat(workingPVal));
			    	calAreaFooting=parseFloat(parseFloat(calTotalLoad)/parseFloat(sbcVal));
			    
			    	$("#selfWeightFooting").html("<center>Self weight of footing(kN) :"+calSelfWeightFooting+"</center>");
			    	$("#totalLoad").html("<center>Total Load(kN) :"+calTotalLoad+"</center>");
			    	
//			    	$("#lengthFooting").html("<center>Length of footing(L<sub>f</sub>)m :"+calLengthFooting+" Remaining Formula</center>");
			    	
//			    	$("#weightFooting").html("<center></center>");
			    	}

			});
		   var id1=0;
			
			$("#areaFootingSubmit").click(function(){		
				
				 areaFooting=$("#areaFootingVal").val();
				 console.log("areaFooting "+areaFooting);
				 
				 var temp2=parseFloat(calTotalLoad)/parseFloat(sbcVal);
				 calAreaFooting=temp2.toFixed(2);
				
				 if(areaFooting==""){			
					$("#ModalBodyAreaFootingMsg").html("<b class='boldTextRed'>Enter numeric value ");
				}else{
					if (id1 <= 2) {
						if (areaFooting==calAreaFooting) {					
							
							id1=0;		
//							findMainSteel(spacingCal1,spacingCal2,300);
							 $("#areaFootingVal,").prop("disabled",true);
							 $("#lengthFootingDiv,#weightFootingDiv").prop("hidden",false);
							 $("#ModalBodyAreaFootingMsg").html("<b class='boldTextBlue'>Go to next level");
						}	
						else
							{
							$("#ModalBodyAreaFootingMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");		
							}
					} else if (id1 == 3){
						if (areaFooting==calAreaFooting) {					
							id1=0;		
							 $("#areaFootingVal,#areaFootingSubmit").prop("disabled",true);
							 $("#lengthFootingDiv").prop("hidden",false);
							 $("#ModalBodyAreaFootingMsg").html("<b class='boldTextBlue'>Go to next level");
						}	
						else{
							$("#ModalBodyAreaFootingMsg").html('<img src="images/area_fotting.png" class="img-fluid">');
						}
					} else {
						areaFooting =parseFloat($("#areaFootingVal").val());

						if (areaFooting==calAreaFooting)  {					
							id1=0;
							 $("#areaFootingVal,#areaFootingSubmit").prop("disabled",true);
							 $("#lengthFootingDiv").prop("hidden",false);
							 $("#ModalBodyAreaFootingMsg").html("<b class='boldTextBlue'>Go to next level");
						} else {
							$("#ModalBodyAreaFootingMsg").html("<b class='boldTextBlue'>Correct Answer "+calAreaFooting);
						}
					}
					id1++;
					}	 
			});
			$("#lfVal").on("change", function () {
				
				lfVal= $(this).val();
				let value =lfVal;
			    let lowerLimit=parseFloat(Math.sqrt(parseFloat(calAreaFooting)));
			    let temp=parseFloat(calAreaFooting)*1.5;
			    let upperLimit=parseFloat(Math.sqrt(temp));
//			    let convertedAreaFooting=temp2.toFixed(2);
				console.log("lowerLimit "+lowerLimit);
				console.log("upperLimit "+upperLimit);
			     // Set your minimum value
			   // Check if input contains alphabets
			    if (/[a-zA-Z]/.test(value)) {
			        $(this).val("");
			        toastr.info("Characters are not allowed! Only numbers.");
			    }
			    // Check for negative values
			    else if (value.startsWith("-")) {
			    	$(this).val("");
			    	toastr.info("Negative values are not allowed!");
			    } 
			    // Check min and max value
			    else if (lfVal>=lowerLimit && lfVal<=upperLimit) {
			 
			    	calWeightFootingTemp=parseFloat(calAreaFooting/lfVal);
			    	calWeightFooting=calWeightFootingTemp.toFixed(2);
			    	$("#lfVal").prop("disabled",true);
			    	 $("#weightFootingDiv,#levelDiv2").prop("hidden",false);
			    	 $("#weightFooting").html("<center>Width of footing(B<sub>f</sub>)m :"+calWeightFooting+" </center>");
			    	 bfVal=calWeightFooting;
			    	
			    }
			    else
			    	{
			    	$(this).val("");
			    	toastr.info("Value must be  between &#8730;(A<sub>f</sub>) and &#8730;(A<sub>f</sub>*1.5)");
			    	}

			});
			$("#NextLevel2").click(function(){
				
			    	$("#page2").prop("hidden",true);
			    	$("#page3").prop("hidden",false);
			    	tempMasterJson = {
			    			"Factored load(Pu)":calFactLoad,
			    			"Moment Load(Mu)":calMomentLoad,
			    			"Load from column(kN)":workingPVal,
			    			"Self weight of footing(%) ":calSelfWeightFooting,
			    			"Weight of footing(kN) ":safeWeightVal,
			    			"Total Load":calTotalLoad,
			    			"Area Footing":calAreaFooting,
			    			"Length Footing(L<sub>f</sub>)":lfVal,
			    			"Weight Footing(B<sub>f</sub>)":calWeightFooting,
			    	
			    			};
			    	jsonArray.push(tempMasterJson);
			    	MasterJson=jsonArray;
			    	console.log(MasterJson);
			    	Calculation2();
		});
}
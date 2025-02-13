
var maxSigma,minSigma,faceSigma;
var  L;
function Calculation2(){
	$("#page3Div1").html("<img src='images/longershorter.png' class='img-fluid'>");
	
	
	var htm=''
		 +'<div class="row" id="" >'
		   +'<div class="col-sm-12 steel" style="background-color:#0a4a54;">'	   
//		   +'	<div class="alert alert-success">'
	 	   +' 		<span class="" id=""><center>Net upward soil pressure along longer direction</center></span> '
//		   +'	</div>'  	   	 
		   +'</div>'
		   +'</div>'
		   +'<div class="row calRowBorder" id=""  >'
		   +'<div class="col-sm-5">'
		   +'<label class="labelstyle ">&#963; MAX(kN/m<sup2></sup>): </label>'
		   +'</div>'	    
		   +'<div class="col-sm-4">'
		   +'<input type="number" id="maxVal" style= "width:100%;"  class="form-control" >'
		   +'</div>'
		   +'<div class="col-sm-3" id="">'
		   +'<button type="button" class="btn btn-danger btnDesign" style = "width:100%;" id="maxSubmit" data-toggle="modal" data-target="#ModalMax" >SUBMIT</button>'
		   +'</div>'	     
		   +'</div>'
		   +'<div class="row calRowBorder" id="minDiv"  hidden >'
		   +'<div class="col-sm-5">'
		   +'<label class="labelstyle ">&#963; MIN(kN/m<sup2></sup>) : </label>'
		   +'</div>'	    
		   +'<div class="col-sm-4">'
		   +'<input type="number" id="minVal" style= "width:100%;"  class="form-control" >'
		   +'</div>'
		   +'<div class="col-sm-3" id="">'
		   +'<button type="button" class="btn btn-danger btnDesign" style = "width:100%;" id="minSubmit" data-toggle="modal" data-target="#ModalMin" >SUBMIT</button>'
		   +'</div>'	     
		   +'</div>'
		   +'<div class="row" id="sigmaCompareDiv" hidden>'
		   	   
		   +'</div>'
		   +'<div class="row" id="shorterDiv" hidden >'
		   +'<div class="col-sm-12 steel" style="background-color:#0a4a54;">'	   
//		   +'	<div class="alert alert-success">'
	 	   +' 		<span class="" id=""><center>Net upward soil pressure along shorter direction</center></span> '
//		   +'	</div>'  	   	 
		   +'</div>'
		   +'</div>'
		   +'<div class="row calRowBorder" id="shorterCalDiv" hidden >'
		   +'<div class="col-sm-5">'
		   +'<label class="labelstyle ">&#963;(kN/m<sup2></sup>): </label>'
		   +'</div>'	    
		   +'<div class="col-sm-4">'
		   +'<input type="number" id="shorterVal" style= "width:100%;"  class="form-control" >'
		   +'</div>'
		   +'<div class="col-sm-3" id="">'
		   +'<button type="button" class="btn btn-danger btnDesign" style = "width:100%;" id="shorterSubmit" data-toggle="modal" data-target="#ModalShorter" >SUBMIT</button>'
		   +'</div>'	     
		   +'</div>'
		   +'<div class="row" id="faceColDiv" hidden >'
		   +'<div class="col-sm-12 steel" style="background-color:#0a4a54;">'	   
//		   +'	<div class="alert alert-success">'
	 	   +' 		<span class="" id=""><center>Soil pressure at face of column &#963; face</center></span> '
//		   +'	</div>'  	   	 
		   +'</div>'
		   +'</div>'
		   +'<div class="row calRowBorder" id="FaceDiv" hidden >'
		   +'<div class="col-sm-5">'
		   +'<label class="labelstyle ">&#963;(kN/m<sup2></sup>): </label>'
		   +'</div>'	    
		   +'<div class="col-sm-4">'
		   +'<input type="number" id="faceVal" style= "width:100%;"  class="form-control" >'
		   +'</div>'
		   +'<div class="col-sm-3" id="">'
		   +'<button type="button" class="btn btn-danger btnDesign" style = "width:100%;" id="faceSubmit" data-toggle="modal" data-target="#ModalFace" >SUBMIT</button>'
		   +'</div>'	     
		   +'</div>'
		   +'<div class="row" id="levelDiv3" hidden>'
		   +'<div class="col-sm-12">'	   
//		   +'	<div class="alert alert-info">'
		   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="NextLevel3" >NEXT LEVEL</button>'
//		  +'	</div>'  	   	 
	  	   +'</div>'	   
	  	   +'</div>'
		   +' <!-- The Modal -->'
		   +' <div class="modal fade" id="ModalMax">'
		   +'   <div class="modal-dialog modal-xl">'
		   +'     <div class="modal-content">'
		       
		   +'       <!-- Modal Header -->'
		   +'       <div class="modal-header">'
		   +'         <h4 class="modal-title">Message Box</h4>'
		   +'        <button type="button" class="close" data-dismiss="modal">&times;</button>'
		   +'      </div>'
		   +'     <!-- Modal body -->'
		   +'     <div class="modal-body" id="maxMsg">'
	       +'        Modal body..'
	       +'      </div>'
		   +'      <!-- Modal footer -->'
	       +'      <div class="modal-footer">'
	       +'        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'
	       +'      </div>'
		   +'     </div>'
	       +'   </div>'
	       +'  </div>'
	       +' <!-- The Modal -->'
		   +' <div class="modal fade" id="ModalMin">'
		   +'   <div class="modal-dialog modal-xl">'
		   +'     <div class="modal-content">'
		       
		   +'       <!-- Modal Header -->'
		   +'       <div class="modal-header">'
		   +'         <h4 class="modal-title">Message Box</h4>'
		   +'        <button type="button" class="close" data-dismiss="modal">&times;</button>'
		   +'      </div>'
		         
		   +'     <!-- Modal body -->'
		   +'     <div class="modal-body" id="minMsg">'
	       +'        Modal body..'
	       +'      </div>'
		         
	       +'      <!-- Modal footer -->'
	       +'      <div class="modal-footer">'
	       +'        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'
	       +'      </div>'
		         
	       +'     </div>'
	       +'   </div>'
	       +'  </div>'
	       +' <!-- The Modal -->'
		   +' <div class="modal fade" id="ModalShorter">'
		   +'   <div class="modal-dialog modal-xl">'
		   +'     <div class="modal-content">'
		       
		   +'       <!-- Modal Header -->'
		   +'       <div class="modal-header">'
		   +'         <h4 class="modal-title">Message Box</h4>'
		   +'        <button type="button" class="close" data-dismiss="modal">&times;</button>'
		   +'      </div>'
		         
		   +'     <!-- Modal body -->'
		   +'     <div class="modal-body" id="shorterMin">'
	       +'        Modal body..'
	       +'      </div>'
		         
	       +'      <!-- Modal footer -->'
	       +'      <div class="modal-footer">'
	       +'        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'
	       +'      </div>'
		         
	       +'     </div>'
	       +'   </div>'
	       +'  </div>'
	       +' <!-- The Modal -->'
		   +' <div class="modal fade" id="ModalFace">'
		   +'   <div class="modal-dialog modal-xl">'
		   +'     <div class="modal-content">'
		       
		   +'       <!-- Modal Header -->'
		   +'       <div class="modal-header">'
		   +'         <h4 class="modal-title">Message Box</h4>'
		   +'        <button type="button" class="close" data-dismiss="modal">&times;</button>'
		   +'      </div>'
		   +'     <!-- Modal body -->'
		   +'     <div class="modal-body" id="faceMsg">'
	       +'        Modal body..'
	       +'      </div>'
		   +'      <!-- Modal footer -->'
	       +'      <div class="modal-footer">'
	       +'        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'
	       +'      </div>'
		   +'     </div>'
	       +'   </div>'
	       +'  </div>'
	      
		   $("#page3Div2").html(htm);
	 var id2=0;
		
		$("#maxSubmit").click(function(){		
			
			maxVal=$("#maxVal").val();
			console.log("maxVal "+maxVal);
			var temp=parseFloat(bfVal)*Math.pow(parseFloat(lfVal),2);
			var temp1=parseFloat(temp/6);
			var temp2=parseFloat(calMomentLoad/temp1);
			
			var temp3=parseFloat(bfVal)*parseFloat(lfVal);
			var temp5=parseFloat(calFactLoad/temp3);
			
			maxSigmaTemp=temp5+temp2;
			maxSigma=maxSigmaTemp.toFixed(2);
			 if(maxVal==""){			
				$("#maxMsg").html("<b class='boldTextRed'>Enter numeric value ");
			}else{
				if (id2 <= 2) {
					if (maxVal==maxSigma) {					
						id2=0;
						 $("#maxSubmit,#maxVal").prop("disabled",true);
						 $("#minDiv").prop("hidden",false);
						 $("#maxMsg").html("<b class='boldTextBlue'>Go to next level");
					}	
					else
						{
						$("#maxMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");		
						}
				} else if (id2 == 3){
					if (maxVal==maxSigma) {					
						id2=0;		
						id2=0;
						 $("#maxSubmit,#maxVal").prop("disabled",true);
						 $("#minDiv").prop("hidden",false);
						 $("#maxMsg").html("<b class='boldTextBlue'>Go to next level");
					}	
					else{
						$("#maxMsg").html('<img src="images/sigmaplus.png" class="img-fluid">');
					}
				} else {
					maxVal =parseFloat($("#maxVal").val());

					if (maxVal==maxSigma)  {					
						id2=0;
						 $("#maxSubmit,#maxVal").prop("disabled",true);
						 $("#minDiv").prop("hidden",false);
						 $("#maxMsg").html("<b class='boldTextBlue'>Go to next level");
					} else {
						$("#maxMsg").html("<b class='boldTextBlue'>Correct Answer "+maxSigma);
					}
				}
				id2++;
				}	 
		});
var id3=0;
		
		$("#minSubmit").click(function(){		
			
			minVal=$("#minVal").val();
			console.log("minVal "+maxVal);
			var temp=parseFloat(bfVal)*Math.pow(parseFloat(lfVal),2);
			var temp1=parseFloat(temp/6);
			var temp2=parseFloat(calMomentLoad/temp1);
			
			var temp3=parseFloat(bfVal)*parseFloat(lfVal);
			var temp5=parseFloat(calFactLoad/temp3);
			
			minSigmaTemp=temp5-temp2;
			minSigma=minSigmaTemp.toFixed(2);
		
			 if(minVal==""){			
				$("#minMsg").html("<b class='boldTextRed'>Enter numeric value ");
			}else{
				if (id3 <= 2) {
					if (minVal==minSigma) {					
						
						id3=0;		
//						findMainSteel(spacingCal1,spacingCal2,300);
						$("#minSubmit,#minVal").prop("disabled",true);
						 $("#sigmaCompareDiv").prop("hidden",false);
						 $("#minMsg").html("<b class='boldTextBlue'>Go to next level");
					}	
					else
						{
						$("#minMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");		
						}
				} else if (id3 == 3){
					if (minVal==minSigma) {					
						id3=0;	
						$("#minSubmit,#minVal").prop("disabled",true);
						$("#sigmaCompareDiv").prop("hidden",false);
						compareSigma();
						 $("#minMsg").html("<b class='boldTextBlue'>Go to next level");
					}	
					else{
						$("#minMsg").html('<img src="images/sigmaminus.png" class="img-fluid">');
					}
				} else {
					minVal =parseFloat($("#minVal").val());

					if (minVal==minSigma)  {					
						id3=0;
						$("#minSubmit,#minVal").prop("disabled",true);
						$("#sigmaCompareDiv").prop("hidden",false);
						compareSigma();
						 $("#minMsg").html("<b class='boldTextBlue'>Go to next level");
					} else {
						$("#minMsg").html("<b class='boldTextBlue'>Correct Answer "+minSigma);
					}
				}
				id3++;
				}	 
		});
		function compareSigma()
		{
//			if(parseFloat(maxSigma)>parseFloat(sbcVal)){
//				
//				$("#sigmaCompare").html("");
//				var htm='<div class="col-sm-12">'	   
//				   +'	<div class="alert alert-danger">'
//			 	   +' 		<strong class="" id="sigmaCompare"><center>Max Sigma Value </center>'
//			 	    +'</strong> '
//				   +'	</div>'  
//				   +'<button class="btn btn-danger glyphicon glyphicon-refresh" id="refreshBtn" style="float:right"><i style="font-size:24px" >Refresh</i></button>'
//				 	
//				   +'</div>'
//				   $("#sigmaCompareDiv").html(htm);
//			}
//			else{
				var htm='<div class="col-sm-12">'	   
					   +'	<div class="alert alert-primary">'
				 	   +' 		<strong class="" id="sigmaCompare"><center>Max SBC Value</center></strong> '
				 	     +'	</div>'  	   	 
					   +'</div>'
					   $("#sigmaCompareDiv").html(htm);
				$("#shorterDiv,#shorterCalDiv").prop("hidden",false);
				
//			}
			
			 $("#refreshBtn").click(function(){
			        location.reload();
			    });
			
		}
var id4=0;
		
		$("#shorterSubmit").click(function(){		
			
			shorterVal=$("#shorterVal").val();
			console.log("shorterVal "+shorterVal);

			var temp1=parseFloat(bfVal)*parseFloat(lfVal);
			var temp2=parseFloat(calFactLoad)/temp1;
			var sigmaTemp=temp2.toFixed(2);
			var sigmaVal=sigmaTemp;
			 if(shorterVal==""){			
				$("#shorterMin").html("<b class='boldTextRed'>Enter numeric value ");
			}else{
				if (id4 <= 2) {
					if (shorterVal==sigmaVal) {					
						
						id4=0;	
						$("#faceColDiv,#FaceDiv").prop("hidden",false);
						$("#shorterSubmit,#shorterVal").prop("disabled",true);
						 $("#shorterMin").html("<b class='boldTextBlue'>Go to next level");
					}	
					else
						{
						$("#shorterMin").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");		
						}
				} else if (id4 == 3){
					if (shorterVal==sigmaVal) {					
						id4=0;	
						
						$("#faceColDiv,#FaceDiv").prop("hidden",false);
						$("#shorterSubmit,#shorterVal").prop("disabled",true);
//						compareSigma();
						 $("#shorterMin").html("<b class='boldTextBlue'>Go to next level");
					}	
					else{
						$("#shorterMin").html('<img src="images/sigma.png" class="img-fluid">');
					}
				} else {
					shorterVal =parseFloat($("#shorterVal").val());

					if (shorterVal==sigmaVal)  {					
						id4=0;
						
						$("#faceColDiv,#FaceDiv").prop("hidden",false);
						$("#shorterSubmit,#shorterVal").prop("disabled",true);
//						compareSigma();
						 $("#shorterMin").html("<b class='boldTextBlue'>Go to next level");
					} else {
						$("#shorterMin").html("<b class='boldTextBlue'>Correct Answer "+sigmaVal);
					}
				}
				id4++;
				}	 
		});
		 var id5=0;
			
			$("#faceSubmit").click(function(){		
				
				faceVal=$("#faceVal").val();
				console.log("faceVal "+faceVal);
			     var TempL=parseFloat(parseFloat(lfVal)-parseFloat(parseFloat(bcVal)*0.001)/2);
				  L=TempL.toFixed(2);
				  var temp1=(L+parseFloat(parseFloat(bcVal)*0.001));
				  var temp2=parseFloat(maxSigma-minSigma/parseFloat(lfVal));
				  var temp3=parseFloat(minSigma+temp2*temp1);
				  faceSigma=temp3.toFixed(2);
				 if(faceVal==""){			
					$("#faceMsg").html("<b class='boldTextRed'>Enter numeric value ");
				}else{
					if (id5 <= 2) {
						if (faceVal==faceSigma) {					
							id5=0;		
							 $("#faceSubmit,#faceVal").prop("disabled",true);
							 $("#levelDiv3").prop("hidden",false);
						     $("#faceMsg").html("<b class='boldTextBlue'>Go to next level");
						}	
						else
							{
							$("#maxMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");		
							}
					} else if (id5 == 3){
						if (faceVal==faceSigma) {					
							id5=0;		
							 $("#faceSubmit,#faceVal").prop("disabled",true);
							 $("#levelDiv3").prop("hidden",false);
						  $("#faceMsg").html("<b class='boldTextBlue'>Go to next level");
						}	
						else{
							$("#faceMsg").html('<img src="images/sigmaplus.png" class="img-fluid">');
						}
					} else {
						faceVal =parseFloat($("#faceVal").val());
						
						if (faceVal==faceSigma)  {					
							id5=0;
							 $("#faceSubmit,#faceVal").prop("disabled",true);
							 $("#levelDiv3").prop("hidden",false);
							$("#faceMsg").html("<b class='boldTextBlue'>Go to next level");
						} else {
							$("#faceMsg").html("<b class='boldTextBlue'>Correct Answer "+faceSigma);
						}
					}
					id5++;
					}	 
			});
}
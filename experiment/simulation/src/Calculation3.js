var bendingMomentLF,B;
function Calculation3(){
	$("#page4Div2").html("<img src='images/longershorter.png' class='img-fluid'>");
	

	var htm=''
		+'<div class="row" id="" >'
		   +'<div class="col-sm-12 steel" style="background-color:#0a4a54;">'	   
//		   +'	<div class="alert alert-success">'
	 	   +' 		<span class="" id=""><center>Bending moment along Lf : Mu<sub>x</sub></center></span> '
//		   +'	</div>'  	   	 
		   +'</div>'
		   +'</div>'
		   +'<div class="row calRowBorder" id=""  >'
		   +'<div class="col-sm-5">'
		   +'<label class="labelstyle ">Mu<sub>x</sub>: </label>'
		   +'</div>'	    
		   +'<div class="col-sm-4">'
		   +'<input type="number" id="muxVal" style= "width:100%;"  class="form-control" >'
		   +'</div>'
		   +'<div class="col-sm-3" id="">'
		   +'<button type="button" class="btn btn-danger btnDesign" style = "width:100%;" id="muxSubmit" data-toggle="modal" data-target="#ModalMux" >SUBMIT</button>'
		   +'</div>'	     
		   +'</div>'
		   +'<div class="row calRowBorder" id="MuyDiv" hidden >'
		   +'<div class="col-sm-5">'
		   +'<label class="labelstyle ">Mu<sub>y</sub>: </label>'
		   +'</div>'	    
		   +'<div class="col-sm-4">'
		   +'<input type="number" id="muyVal" style= "width:100%;"  class="form-control" >'
		   +'</div>'
		   +'<div class="col-sm-3" id="">'
		   +'<button type="button" class="btn btn-danger btnDesign" style = "width:100%;" id="muySubmit" data-toggle="modal" data-target="#ModalMuy" >SUBMIT</button>'
		   +'</div>'	     
		   +'</div>'
		   
		   +' <!-- The Modal -->'
		   +' <div class="modal fade" id="ModalMux">'
		   +'   <div class="modal-dialog modal-xl">'
		   +'     <div class="modal-content">'
		       
		   +'       <!-- Modal Header -->'
		   +'       <div class="modal-header">'
		   +'         <h4 class="modal-title">Message Box</h4>'
		   +'        <button type="button" class="close" data-dismiss="modal">&times;</button>'
		   +'      </div>'
		   +'     <!-- Modal body -->'
		   +'     <div class="modal-body" id="muxMsg">'
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
		   +' <div class="modal fade" id="ModalMuy">'
		   +'   <div class="modal-dialog modal-xl">'
		   +'     <div class="modal-content">'
		       
		   +'       <!-- Modal Header -->'
		   +'       <div class="modal-header">'
		   +'         <h4 class="modal-title">Message Box</h4>'
		   +'        <button type="button" class="close" data-dismiss="modal">&times;</button>'
		   +'      </div>'
		   +'     <!-- Modal body -->'
		   +'     <div class="modal-body" id="muyMsg">'
	       +'        Modal body..'
	       +'      </div>'
		   +'      <!-- Modal footer -->'
	       +'      <div class="modal-footer">'
	       +'        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'
	       +'      </div>'
		   +'     </div>'
	       +'   </div>'
	       +'  </div>'
	       $("#page4Div2").html(htm);
	 var id6=0;
		
		$("#muxSubmit").click(function(){		
			
			muxVal=$("#muxVal").val();
			console.log("muxVal "+muxVal);
			let bTemp=parseFloat(2*(L/3));
			let bTemp1=parseFloat(0.5*(maxSigma-faceSigma)*parseFloat(bcVal)*L);
			let bTemp2=parseFloat(faceSigma*L*parseFloat(bcVal))*L;
			bendingMomentLFTemp=parseFloat(bTemp2+bTemp1*bTemp);
			bendingMomentLF=bendingMomentLFTemp.toFixed(2);
		
			 if(muxVal==""){			
				$("#muxMsg").html("<b class='boldTextRed'>Enter numeric value ");
			}else{
				if (id6 <= 2) {
					if (muxVal==bendingMomentLF) {					
						id6=0;
						 $("#muxSubmit,#muxVal").prop("disabled",true);
						 $("#MuyDiv").prop("hidden",false);
						 $("#muxMsg").html("<b class='boldTextBlue'>Go to next level");
					}	
					else
						{
						$("#muxMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");		
						}
				} else if (id6 == 3){
					if (muxVal==bendingMomentLF) {					
						id6=0;		
						 $("#muxSubmit,#maxVal").prop("disabled",true);
						 $("#MuyDiv").prop("hidden",false);
						 $("#muxMsg").html("<b class='boldTextBlue'>Go to next level");
					}	
					else{
						$("#muxMsg").html('<img src="images/face.png" class="img-fluid">');
					}
				} else {
					muxVal =parseFloat($("#muxVal").val());

					if (muxVal==bendingMomentLF)  {					
						id6=0;
						 $("#muxSubmit,#muxVal").prop("disabled",true);
						 $("#MuyDiv").prop("hidden",false);
						 $("#muxMsg").html("<b class='boldTextBlue'>Go to next level");
					} else {
						$("#muxMsg").html("<b class='boldTextBlue'>Correct Answer "+bendingMomentLF);
					}
				}
				id6++;
				}	 
		});
var id7=0;
		
		$("#muySubmit").click(function(){		
			
			muyVal=$("#muyVal").val();
			console.log("muyVal "+muyVal);
			B=parseFloat(bfVal-dcVal)/2;
			let bTemp1=parseFloat(Math.pow(B,2)/2);
			
			let bTemp2=parseFloat(parseFloat(faceSigma)*parseFloat(lfVal)*bTemp1);
			
			bendingMomentBF=bTemp2.toFixed(2);
		
			 if(muyVal==""){			
				$("#muyMsg").html("<b class='boldTextRed'>Enter numeric value ");
			}else{
				if (id7 <= 2) {
					if (muyVal==bendingMomentBF) {					
						id7=0;
						 $("#muySubmit,#muyVal").prop("disabled",true);
						 $("#MuyDiv").prop("hidden",false);
						 $("#muyMsg").html("<b class='boldTextBlue'>Go to next level");
					}	
					else
						{
						$("#muyMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");		
						}
				} else if (id7 == 3){
					if (muyVal==bendingMomentBF) {					
						id7=0;		
						 $("#muySubmit,#mayVal").prop("disabled",true);
						 $("#MuyDiv").prop("hidden",false);
						 $("#muyMsg").html("<b class='boldTextBlue'>Go to next level");
					}	
					else{
						$("#muyMsg").html('<img src="images/face.png" class="img-fluid">');
					}
				} else {
					muxVal =parseFloat($("#muyVal").val());

					if (muxVal==bendingMomentBF)  {					
						id7=0;
						 $("#muySubmit,#muyVal").prop("disabled",true);
						 $("#MuyDiv").prop("hidden",false);
						 $("#muyMsg").html("<b class='boldTextBlue'>Go to next level");
					} else {
						$("#muyMsg").html("<b class='boldTextBlue'>Correct Answer "+bendingMomentBF);
					}
				}
				id7++;
				}	 
		});
}
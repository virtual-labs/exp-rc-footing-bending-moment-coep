var conVal;
var steelVal;
var len;
var pre;  
var colSize ;
var d_val ; 
var sbc_val;
var eCover_val;
//var ArrayJson=[];
//var InputValMasterJson={};

var modelHtm =  ' <!-- Modal -->'
				+ '<div class="modal fade" id="myModal" role="dialog">'
				+ ' <div class="modal-dialog modal-md">'
				+ '    <div class="modal-content">'
				+ '     <div class="modal-header">'				
				+ '       <h4 class="modal-title">Message box</h4>'
				+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
				+ '     </div>'
				+ '     <div class="modal-body">'
				+ '       <p id="modelMsg"></p>'
				+ '     </div>'
				+ '     <div class="modal-footer">'
				+ '       <button type="button" class="btn btn-danger" id = "nextPage" data-dismiss="modal" >Okay</button>'
				+ '     </div>'
				+ '   </div>'
				+ ' </div>'
				+ '</div>';

var selection ='<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Enter Working Load (P) : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<input type="number" id="presText" style= "width:100%;"  class=" form-control marginBottom"  >'
	   +'</div>'
	    
	
//	   +'<div class="col-sm-4" id="buttonDiv">'
//	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="subPre" data-toggle="modal" data-target="#myModal" ><b>SUBMIT</b></button>'
//	   +'</div>'
	   +'</div>'
	     
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Grade of Concrete f<sub>ck</sub> (N/mm<sup>2</sup>) : </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-3">'
	   +'<select  class="form-control selectConf marginBottom" id="concreteGrade" " style="height:auto; " disabled>'
	   +'<option value="0">--- Select grade of concrete --- </option>'
	   +'<option value="10" >M10  </option>'
	   +'<option value="15" >M15  </option>'
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
	   
	   
	   +'<div class="col-sm-3" id="concreteLabel" hidden>'
       +'<label class="labelstyle spanMsg " >&nbsp;f<sub>ck</sub> : <label id = "relTemp" class="labelstyle spanMsg ">'+conVal+'</label>   </label>'
//	   +'<span id = "relTemp1" class="labelstyle spanMsg">'+steelVal+' </span>'
	   +'</div>'
	   
	   
//	   +'<div class="col-sm-3" id="concreteLabel" hidden>'
////	   +'<label class="labelstyle marginBottom " style="margin-top:-5px;">  </label>'
//	   +'<span id = "relTemp" class="labelstyle spanMsg"> f<sup>ck</sup>'+conVal+' </span>'
//	   +'</div>'
	   +'</div>'
	   	   
	   + '<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Grade of Steel f<sub>y</sub> (N/mm<sup>2</sup>) : </label>'
	   +'</div>'	   
	   +'<div class="col-sm-3">'
	   +'<select  class="form-control selectConf marginBottom" id="steelGrade" " style="height:auto; " disabled>'
	   +'<option value="0">--- Select grade of steel --- </option>'
	   +'<option value="250" >Fe250  </option>'
	   +'<option value="415" >Fe415  </option>'
	   +'<option value="500" >Fe500  </option>'	  
	   +'</select>'	   
	   +'</div>'
	   
	   
	    +'<div class="col-sm-3" id="steelLabel" hidden>'
       +'<label class="labelstyle spanMsg" >&nbsp;f<sub>y</sub> :<label id = "relTemp1" class="labelstyle spanMsg"> '+steelVal+' </label>   </label>'
//	   +'<span id = "relTemp1" class="labelstyle spanMsg">'+steelVal+' </span>'
	   +'</div>'
	   
	   
//	   +'<div class="col-sm-3" id="steelLabel" hidden>'
//	   +'<span id = "relTemp1" class="labelstyle spanMsg">'+steelVal+' </span>'
//	   +'</div>'
	   +'</div>'
	   

	   
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">Size of column b (mm) : </label>'
	   +'</div>'	    
	   +'<div class="col-sm-6">'
	   +'<input type="number" id="columnSize" style= 10px;width:100%;" placeholder="Enter Value" class=" form-control marginBottom" disabled>'
	   +'</div>'	     
	   +'</div>'
	     
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom"> D (mm)  : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<input type="number" id="d" style= 10px;width:100%;" placeholder="Enter Value" class=" form-control marginBottom" disabled>'
	   +'</div>'	     
	   +'</div>'	
	   
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label class="labelstyle marginBottom">SBC (kN/m<sup>2</sup>) : </label>'
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<input type="number" id="sbc" style= 10px;width:100%;" placeholder="Enter Value" class=" form-control marginBottom" disabled>'
	   +'</div>'	     
	   +'</div>'
	   
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +"<label class='labelstyle marginBottom'>Effective Cover d'(mm) : </label>"
	   +'</div>'
	   +'<div class="col-sm-6">'
	   +'<input type="number" id="effectiveCover" style= 10px;width:100%;" placeholder="Enter Value" class=" form-control marginBottom" disabled>'
	   +'</div>'	     
	   +'</div>'
//
//	  +'<div class="row calRowBorder" id="r7" >'
//	   
//	   //+' <div class="">
//   	   +'  <div class="col-sm-4" >'
//   	   +'  <input type="number" id="BfVal"  placeholder="Enter Value for Lf"  class=" form-control txtstyle" >'	   
//	   +'  </div>'
//	   +'  <div class="col-sm-4">'
//   	   +'  <input type="number" id="BfVal"  placeholder="Enter Value for Bf" class=" form-control txtstyle" >'
//   	   +'  </div>'
//   	   +'<div class="col-sm-4" id="buttonDiv">'
//	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="footingAreaSub" data-toggle="modal" data-target="#myModal" ><b>CHECK ANSWER</b></button>'
//	   +'</div>'	  
//	 +' </div>'

	   +'<div class="row">'
	   +'<div class="col-sm-12">'
	   +'<button type="button" style="padding: 10px; "  class="btn btn-danger btnStyle" id="checkConfg"  data-toggle="modal" data-target="#myModal"  disabled><b>NEXT LEVEL </b></button>'
	   +'</div>'
	   +'</div>'
	   
	   + modelHtm
	   $("#main-div-conf").html(selection);
	   
//	   $("#procedure").click(function(){
//		modelImg = '<img src="images/typesOfSupports.png" class="img-responsive" alt="Cinque Terre">'
//		$(".modal-header").html("Reference Table");
//			$(".modal-header").css("background","#23435c");
//			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
//			$("#MsgModal").html(modelImg);
//	});
	   

	
	$("#presText").change(function(){
		
		$("body").css("padding","0px 0px 0px 0px");	
		pre = $("#presText").val();
		console.log("p vale"+pre);
		if(pre == ""){
			
			alert("Please Enter Value ");
			//$("#modelMsg").html("<b class='boldTextRed'>Please Enter Value</b>");
		}else {
			pre = parseFloat($("#presText").val());
				if(pre <= 0){
				
				alert("Enter Appropraite Value");		
				
				}else{
				$("#concreteGrade").prop("disabled",false);
				$("#AnswerVal").text(pre);
				//alert("Correct Value");
				
				}
		}
	});
	 
	$("#concreteGrade").change(function(){
		$("body").css("padding","0px 0px 0px 0px");	
		conVal = $("#concreteGrade").val();
          if(conVal<=0){
			$("#modelMsg").html("<b class='boldTextRed'>Select Appropraite Value</b>");
			//alert("Select Appropraite Values");
    	  }else{
			$("#presText").prop("disabled",true);
			//$('#subPre').prop("disabled",true);	
			$("#concreteGrade").prop("disabled",true);
			$("#steelGrade").prop("disabled",false);	
			$("#concreteLabel").prop("hidden",false);	
			
			$("#relTemp").text(conVal+"Mpa");
			$("#FootingA").text(conVal+"Mpa");
		  }        
	});
	
	$("#steelGrade").change(function(){
		$("body").css("padding","0px 0px 0px 0px");	
		steelVal = $("#steelGrade").val();
		if(steelVal<=0){
			$("#modelMsg").html("<b class='boldTextRed'>Select Appropraite Value</b>");
			//alert("Select Appropraite Values");
		}else{
		  //$("#steelGrade").prop("disabled",true);
		  $("#steelLabel").prop("hidden",false);	
		  $("#relTemp1").text(steelVal+"Mpa");
 		  $("#steelGrade").prop("disabled",true);
		  $("#columnSize").prop("disabled",false);
		 
		}
		
		
	});
	
	
	$("#columnSize").change(function(){
			$("body").css("padding","0px 0px 0px 0px");	
		 colSize = $("#columnSize").val();
		if(colSize <= 0){
//			$("#modelMsg").html("<b class='boldTextRed'>Select Appropraite Value</b>");
			alert("Enter Appropraite Value");
		}else{
		  $("#columnSize").prop("disabled",true);
		   $("#d").prop("disabled",false);
		 
		}
	});
	
	
	
	$("#d").change(function(){
			$("body").css("padding","0px 0px 0px 0px");	
		d_val = $("#d").val();
		if(d_val <= 0){
//			$("#modelMsg").html("<b class='boldTextRed'>Select Appropraite Value</b>");
			alert("Enter Appropraite Value");
		}else{		  
		  $("#d").prop("disabled",true);
		  $("#sbc").prop("disabled",false);		 
		  
		}
	});
	 
	
	
	$("#sbc").change(function(){
			$("body").css("padding","0px 0px 0px 0px");	
		sbc_val = $("#sbc").val();
		if(sbc_val <= 0){
//			$("#modelMsg").html("<b class='boldTextRed'>Select Appropraite Value</b>");
			alert("Enter Appropraite Value");
		}else{
			$("#sbc").prop("disabled",true);
		  	$("#effectiveCover").prop("disabled",false);		 
		  	
		}
	});
   
   
   $("#effectiveCover").change(function(){
		$("body").css("padding","0px 0px 0px 0px");	
		eCover_val = $("#effectiveCover").val();
		console.log("effectiveCover="+effectiveCover);
		if(eCover_val >= 50){
			
		  $("#effectiveCover").prop("disabled",true);		 
		  $("#checkConfg").prop("disabled",false); 

		}else{
		  //			$("#modelMsg").html("<b class='boldTextRed'>Select Appropraite Value</b>");
			alert("Enter Appropraite Value Which is Greaterthan 50");
		}
	});


   $("#checkConfg").click(function(){
	
	$("#canvas-div").html('');
	$("#main-div-conf").html('');
	$("#centerText1").html('');
	$("#centerText2").html('');
		$("body").css("padding","0px 0px 0px 0px");	
	FootingAnim(pre,conVal,steelVal,colSize,d_val,sbc_val,eCover_val);
	Page2Configurations(pre,conVal,steelVal,colSize,d_val,sbc_val,eCover_val);	
	 //	$("#nextLevelForConfig").prop("disabled",false);
   		$("#modelMsg").html("<b class='boldTextGreen'>Configured Successfully</b>");
  
});

 


	
	
	
	
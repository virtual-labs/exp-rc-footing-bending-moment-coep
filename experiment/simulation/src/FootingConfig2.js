


var workingLoadValue2; 
var concreteValue2; 
var steelValue2;
var colSizeValue2 ;
var dValue2 ; 
var SBCValue2;
var eCover_value2;

var pu_corr;
var loadFromCol_val;
var Persentage_corr;
var selfWt_corr;
var addLoad2;
var  Mu_corr;
var FArea_corr;
var LfValue;
var BfValue;
var wuCorr;
						
var ArrayJson=[];
var InputValMasterJson={};

function Page2Configurations(pre,conVal,steelVal,colSize,d_val,sbc_val,eCover_val){
//$("#canvas-div").html('');	
   
   workingLoadValue2 = parseFloat(pre);
	console.log("workingLoadValue2 =  "+pre);
   
   concreteValue2 =parseFloat(conVal);
   	console.log("concreteValue2 =  "+conVal);
   
   steelValue2 =parseFloat(steelVal);
   	console.log("steelValue2 =  "+steelVal);
  
   colSizeValue2 = parseFloat(colSize);
   	console.log("colSizeValue2 =  "+colSize);
   
   dValue2 = parseFloat(d_val);
   	console.log("dValue2 =  "+d_val);
  
  SBCValue2 =parseFloat(sbc_val);
   		console.log("SBCValue2 =  "+sbc_val);
   
   eCover_value2=parseFloat(eCover_val);
   	console.log("eCover_value2 =  "+eCover_value2);
   
   
    $("#centerText1").html('CONFIGURATION');
    $("#centerText2").html('FOOTING TOP VIEW'); 

		

			
		
		var modelHtm1 =  ' <!-- Modal -->'
				+ '<div class="modal fade" id="myModal" role="dialog">'
				+ ' <div class="modal-dialog modal-md">'
				+ '    <div class="modal-content">'
				+ '     <div class="modal-header">'				
				+ '       <h4 class="modal-title" >Message box</h4>'
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

var selection1 ='<div class="row">'
	   +'<div class="col-sm-6">'
	   +' <div class="alert alert-info">'
   	   +' <strong class="labelstyleInfo "><center>SBC = '+SBCValue2+' kN/m<sup>2</sup></center></strong> '
  	   +'</div>'
  	   +'</div>'
	   +'<div class="col-sm-6">'
	   +' <div class="alert alert-info">'
	   +' <strong class="labelstyleInfo "><center>P = '+workingLoadValue2+' kN</center></strong> '	   
	   +'</div>'
	   +'</div>'
	   +'</div>'
		


	   +'<div class="row calRowBorder" id="r1">'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Ultimate/Factored Load Pu : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="puText" style= "padding: 10px;width:100%;"  class=" form-control "  >'
	   +'</div>'	    
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="subPu" data-toggle="modal" data-target="#myModal" ><b>CHECK ANSWER</b></button>'
	   +'</div>'
	   +'</div>'
	   
	   +'<div class="row calRowBorder" id="r2" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Load from column (kN) : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="loadFromCol" style= 10px;width:100%;"  class=" form-control " disabled>'
	   +'</div>'
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="subLfromColumn" data-toggle="modal" data-target="#myModal" disabled ><b>CHECK ANSWER</b></button>'
	   +'</div>'	     
	   +'</div>'
	   
	   +'<div class="row calRowBorder" id="r3" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Percentage Value to Calculate Self Wt of Footing(%): </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number"  id="perdentageVal" style= 10px;width:100%;"  class=" form-control " disabled>'
	   +'</div>'
	    +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="subPersentage" data-toggle="modal" data-target="#myModal" disabled ><b>CHECK ANSWER</b></button>'
	   +'</div>'		     
	   +'</div>'
	   
	   +'<div class="row calRowBorder" id="r4" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Self weight of Footing (kN) :</label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="ValueOfSelfWt" style= 10px;width:100%;"  class=" form-control " disabled>'
	   +'</div>'
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="selfWtSub" data-toggle="modal" data-target="#myModal" disabled ><b>CHECK ANSWER</b></button>'
	   +'</div>'	     
	   +'</div>'
	   
	
	   +'<div class="row calRowBorder" id="r5" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Total Load (kN) : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="totalLoad" style= 10px;width:100%;"  class=" form-control " disabled>'
	   +'</div>'
	    +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="totalLoadSub" data-toggle="modal" data-target="#myModal" disabled ><b>CHECK ANSWER</b></button>'
	   +'</div>'	     
	   +'</div>'
	   
	   +'<div class="row calRowBorder"  id="r6" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle marginBottom">Enter Value for m<sub>x</sub> (N m) : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number"  id="mxVal" style= 10px;width:100%;"  class=" form-control marginBottom" disabled>'
	   +'</div>'	     
	   +'</div>'
	   
	   +'<div class="row calRowBorder"  id="r7" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle marginBottom">Calculate M<sub>u</sub> (N m) : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="MuVal " style= 10px;width:100%;"  class=" form-control marginBottom" disabled>'
	   +'</div>'
	    +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="MuSub" data-toggle="modal" data-target="#myModal" disabled ><b>CHECK ANSWER</b></button>'
	   +'</div>'	     
	   +'</div>'
	   
	   +'<div class="row calRowBorder" id="r8" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Area of Footing A<sub>f</sub> (m<sup>2</sup>) : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="footingArea" style= 10px;width:100%;"  class=" form-control " disabled>'
	   +'</div>'
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="footingAreaSub" data-toggle="modal" data-target="#myModal" ><b>CHECK ANSWER</b></button>'
	   +'</div>'	     
	   +'</div>'
	   
	   
	   
	   	   
	  
//	   +'<div class="row calRowBorder" id="r7" hidden >'
//	   +'<div class="col-sm-2">'
//	   +'<label class="txtstyle ">Calculate L<sub>f</sub> & B<sub>f</sub> :</label>'
//	   +'</div>'
//	   +'<div class="col-sm-2">'
//	   +'<input type="number" id="LfVal" "  class=" form-control txtstyle" >'
//	   +'</div>'
//	   +'<div class="col-sm-1">'
//	   +'<label class="symbolstyle " id="symbol1">&times;</label>'
//	   +'</div>'
//	   +'<div class="col-sm-2">'
//	   +'<input type="number" id="BfVal"   class=" form-control txtstyle" >'
//	   +'</div>'
//	    +'<div class="col-sm-1">'
//	   +'<label class="symbolstyle2 "  id="symbol2">&gE;</label>'
//	   +'</div>'
//	   +'<div class="col-sm-2">'
//	   +'<label class="labelstyle "  id="FootingA">'+FArea_corr+'</label>'
//	   +'</div>'
//	   +'<div class="col-sm-2" id="buttonDiv">'
//	   +'<button type="button"   class="btn btn-danger  txtstyle"  id="SubLfBf" data-toggle="modal" data-target="#myModal" ><b>SUBMIT</b></button>'	
//	   +'</div>'     
//	   +'</div>'

//	+'<div class="row calRowBorder" id="r7" hidden>'
//	   
//	   //+' <div class="">
//   	   +'  <div class="col-sm-4" >'
//   	   +'  <input type="number" id="LfVal"  placeholder="Enter Value for Lf"  class=" form-control txtstyle" >'	   
//	   +'  </div>'
//	   +'  <div class="col-sm-4">'
//   	   +'  <input type="number" id="BfVal"  placeholder="Enter Value for Bf" class=" form-control txtstyle" >'
//   	   +'  </div>'
//   	   +'<div class="col-sm-4" id="buttonDiv">'
//	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="footingAreaSub" data-toggle="modal" data-target="#myModal" ><b>CHECK ANSWER</b></button>'
//	   +'</div>'
//   	   
//   	  
//	 +' </div>'
	   
	   +'<div class="row calRowBorder" id="r9" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Enter Value for L<sub>f</sub> : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="lfAns" style= 10px;width:100%;"  class=" form-control " disabled>'
	   +'</div>'
//	   +'<div class="col-sm-3" id="buttonDiv">'
//	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="lfAnsSub" data-toggle="modal" data-target="#myModal" ><b>CHECK ANSWER</b></button>'
//	   +'</div>'	     
	   +'</div>'
	   
	   
	    +'<div class="row calRowBorder" id="r10" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Enter Value for B<sub>f</sub> : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="bfAns" style= 10px;width:100%;"  class=" form-control " disabled>'
	   +'</div>'
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="bfAnsSub" data-toggle="modal" data-target="#myModal" ><b>CHECK ANSWER</b></button>'
	   +'</div>'	     
	   +'</div>'
	   

	
//	   +'<div class="row" style="margin:10px;padding:10px;" id="formulaRow" >'
//	   +'<div class="col-sm-1">'
//	   +'</div>' 
//	   +'<div class="col-sm-3" style="background-color:#d1cbcb;">'
//	   +'<br>'
//	   +' <strong  style="font-size:20px;">Aspect Ratio : </strong> '
//	   +'<br>'
//	   +'<br>'
//	   +'</div>'
//	   +'<div class="col-sm-3" style="background-color:#d1cbcb;" >' 
//	   +'<img  src="images/LfBfValueFormula.png"  id="formula" class="img-responsive"  width="100" height="40">'
//	   +'</div>'
//	   +'<div class="col-sm-4" style="background-color:#d1cbcb;">'
//	   +'<br>'
//	   +'<strong  style="color:red;font-size:20px;" id="formulaText"></strong> '
//	   +'<br>'  
//	   +'</div>'
//	   +'<div class="col-sm-1">'
//	   +'</div>'
//	   +'</div>'  
	  
	  
	   +'<div class="row calRowBorder" id="r11" hidden>'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Soil Pressure  : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="WuVal" style= 10px;width:100%;"  class=" form-control " disabled>'
	   +'</div>'
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="SubWu" data-toggle="modal" data-target="#myModal" ><b>CHECK ANSWER</b></button>'
	   +'</div>'	     
	   +'</div>'
	  
	   +'<div class="row" id="r12" hidden>'
	   +'<div class="col-sm-12">'
	   +'<button type="button" style="padding: 10px;"  class="btn btn-danger btnStyle" id="nextLevelPg2"  data-toggle="modal" data-target="#myModal"  disabled ><b>NEXT LEVEL</b></button>'
	   +'</div>'
	   +'</div>'
		

	   + modelHtm1
	   $("#main-div-conf").html(selection1);




   var pu_val; 
  
   var id=0;
    console.log("uLoad="+pu_corr);
	$("#subPu").click(function(){	
		 var puAns = workingLoadValue2 * 1.5;
   		 var pu_corr111=puAns.toFixed(2);
   		 pu_corr=parseFloat(pu_corr111);
	 	 $("body").css("padding","0px 0px 0px 0px");
		 pu_val =$("#puText").val();	
		if(pu_val==""){
			
			$("#modelMsg").html("<b class='boldTextRed'>Enter numeric value ");
		}else{
			if (id <= 2) {
				if (pu_val == pu_corr) {
					
					id=0;
					//addToMasterJSON();
					$("#loadFromCol").prop("disabled",false);
					$("#subLfromColumn").prop("disabled",false);
					$("#r2").prop("hidden",false);
					$("#puText").prop("disabled",true);
					$("#subPu").prop("disabled",true);
					toastr.success("Correct Answer");
				} else if (pu_val != pu_corr) {
					$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");
					
				}
			} else if (id == 3){
				$("#modelMsg").html("<b class='boldTextBlue'>Formula :  P X 1.5  </b><br> <p>Here, P = "+workingLoadValue2+"</p> ");
			} else {
				pu_val =parseFloat($("#puText").val());
//				flow = flowAns.toFixed(2);
				if (pu_val == pu_corr) {
					
					//addToMasterJSON();
					
					$("#loadFromCol").prop("disabled",false);
					$("#subLfromColumn").prop("disabled",false);
					$("#r2").prop("hidden",false);
					$("#puText").prop("disabled",true);
					$("#subPu").prop("disabled",true);
					id=0;
					toastr.success("Correct Answer");
				} else {
					$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +pu_corr+'</b>');
				}
			}
			id++;
		}

	 
	});


	//var loadFromCol_val ;
	$("#subLfromColumn").click(function(){
		$("body").css("padding","0px 0px 0px 0px");
		loadFromCol_val = $("#loadFromCol").val();	
		console.log("loadFromCol_val= "+loadFromCol_val);
		if(loadFromCol_val==""){
			$("#modelMsg").html("<b class='boldTextRed'>Enter numeric value ");
		}else{
			if (id <= 2) {
				if (loadFromCol_val == workingLoadValue2) {
					//$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
					
					//addToMasterJSON();
					//$("#loadFromCol").val('');
					$("#perdentageVal").prop("disabled",false);
					$("#subPersentage").prop("disabled",false);
					$("#r3").prop("hidden",false);
					$("#loadFromCol").prop("disabled",true);
					$("#subLfromColumn").prop("disabled",true);
					id=0;
					toastr.success("Correct Answer");
				} else if (loadFromCol_val != workingLoadValue2) {
					$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");
					
				}
			} else if (id == 3){
				$("#modelMsg").html("<b class='boldTextBlue'>Note :Value of Load from column is same As Value of Working Load. </b>");
			} else {
				loadFromCol_val =parseFloat($("#loadFromCol").val());
//				flow = flowAns.toFixed(2);
				if (loadFromCol_val == workingLoadValue2) {
					//$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
					//addToMasterJSON();
					//$("#loadFromCol").val('');
					$("#perdentageVal").prop("disabled",false);
					$("#subPersentage").prop("disabled",false);
					$("#r3").prop("hidden",false);
					$("#loadFromCol").prop("disabled",true);
					$("#subLfromColumn").prop("disabled",true);
					id=0;
					toastr.success("Correct Answer");
				} else {
					$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +workingLoadValue2+'</b>');
				}
			}
			id++;
		}
	
	
	});
	
	
	var persentage;
	//var Persentage_corr ;
	var SWPersent_Val;
	$("#subPersentage").click(function(){
			$("body").css("padding","0px 0px 0px 0px");	
		persentage= $("#perdentageVal").val();
		if(persentage==""){
			$("#modelMsg").html("<b class='boldTextRed'>Enter numeric value </b>");	
//			alert("Please Enter Value");
		}else{
			persentage=parseFloat($("#perdentageVal").val());
			
			 if(persentage>=10 && persentage<=100){		
				SWPersent_Val=persentage;		
				$("#ValueOfSelfWt").prop("disabled",false);
				$("#selfWtSub").prop("disabled",false);
				$("#r4").prop("hidden",false);
				console.log("persentage = "+persentage+" % ,  SWPersent_Val = "+SWPersent_Val);
				$("#perdentageVal").prop("disabled",true);
				$("#subPersentage").prop("disabled",true);												
				toastr.success("Correct Answer");	
			}else{
//				alert("Enter Appropraite Value (10-100)");
				$("#modelMsg").html("<b class='boldTextRed'>Enter Appropraite Value (10-100)</b>");
			}
	 }	
	});
	
	
	
	console.log("SWPersent_Val = "+SWPersent_Val);
	
	
	console.log("Persentage_corr = "+Persentage_corr);
	var selfWt_val;
	//var selfWt_corr;
	console.log("selfWt_corr="+selfWt_corr);
	
	$("#selfWtSub").click(function(){
		PersentAns=SWPersent_Val/100;
		Persentage_corr=PersentAns.toFixed(2);
		selfWtAns=Persentage_corr*workingLoadValue2;
		selfWt_corr111=selfWtAns.toFixed(2);
		selfWt_corr=parseFloat(selfWt_corr111);
		$("body").css("padding","0px 0px 0px 0px");
		selfWt_val = $("#ValueOfSelfWt").val();
		if(selfWt_val==""){
			$("#modelMsg").html("<b class='boldTextRed'>Enter numeric value ");
		}else{
			if (id <= 2) {
				if (selfWt_val == selfWt_corr) {
					//$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
					
					//addToMasterJSON();
					//$("#ValueOfSelfWt").val('');
					
					$("#totalLoad").prop("disabled",false);
					$("#totalLoadSub").prop("disabled",false);
					$("#r5").prop("hidden",false);
					$("#ValueOfSelfWt").prop("disabled",true);
					$("#selfWtSub").prop("disabled",true);
					id=0;
					toastr.success("Correct Answer");
				} else if (selfWt_val != selfWt_corr) {
					$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");
					
				}
			} else if (id == 3){
				$("#modelMsg").html("<b class='boldTextBlue'>Formula : P &times; ("+persentage+"/100)</b>");
			} else {
				selfWt_val = parseFloat($("#ValueOfSelfWt").val());
//				flow = flowAns.toFixed(2);
				if (selfWt_val == selfWt_corr) {
					//$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
					//addToMasterJSON();
					//$("#ValueOfSelfWt").val('');
					$("#totalLoad").prop("disabled",false);
					$("#totalLoadSub").prop("disabled",false);
					$("#r5").prop("hidden",false);
					$("#ValueOfSelfWt").prop("disabled",true);
					$("#selfWtSub").prop("disabled",true);
					id=0;
					toastr.success("Correct Answer");
				} else {
					$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +selfWt_corr+'</b>');
				}
			}
			id++;
		}
	});
	
	var TotalLoad_corr=0;
	console.log("var TotalLoad_corr = "+TotalLoad_corr);
	var id;
	var TLoad;
	$("#totalLoadSub").click(function(){
			TotalLoad_corrAns= parseFloat(selfWt_corr) + parseFloat(loadFromCol_val);
			TotalLoad_corr111=TotalLoad_corrAns.toFixed(2);
			TotalLoad_corr=parseFloat(TotalLoad_corr111);
			console.log("TotalLoad_corr("+TotalLoad_corr+") = "+selfWt_corr+" + "+loadFromCol_val);
			addLoad2= selfWt_corr + workingLoadValue2;
			console.log("selfWt_corr = "+selfWt_corr);
			console.log("addLoad2 = "+addLoad2);
		$("body").css("padding","0px 0px 0px 0px");
		TLoad = $("#totalLoad").val();
		console.log("TLoad = "+TLoad);
		if(TLoad==""){
			$("#modelMsg").html("<b class='boldTextRed'>Enter numeric value ");
		}else{
			if (id <= 2) {
				if (TLoad == addLoad2) {
					//$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
					
					//addToMasterJSON();
					//$("#totalLoad").val('');
					$("#footingArea").prop("disabled",false);
			  		$("#footingAreaSub").prop("disabled",false);
			  		$("#r6").prop("hidden",false);
			  		$("#totalLoad").prop("disabled",true);
					$("#totalLoadSub").prop("disabled",true);
					id=0;
					toastr.success("Correct Answer");
				} else if (TLoad != addLoad2) {
					$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");
					
				}
			} else if (id == 3){
				$("#modelMsg").html("<b class='boldTextBlue'>Formula : Total Load = Load From Column + Self Weight of Footing Load</b>");
			} else {
				TLoad = parseFloat($("#totalLoad").val());
				console.log("TLoad 3attempt = "+TLoad);
//				flow = flowAns.toFixed(2);
				if (TLoad == addLoad2) {
					//$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
					//addToMasterJSON();
					
					//$("#totalLoad").val('');
					$("#footingArea").prop("disabled",false);
			  		$("#footingAreaSub").prop("disabled",false);
			  		$("#r6").prop("hidden",false);
			  		$("#totalLoad").prop("disabled",true);
					$("#totalLoadSub").prop("disabled",true);	
					id=0;				
					toastr.success("Correct Answer");
				} else {
					$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +TotalLoad_corr+'</b>');
				}
			}
			id++;
		}
	});
	
	
//	MuSub MuVal 
//	mxVal
	var MxIO;
	$("#mxVal").change(function(){
		
		$("body").css("padding","0px 0px 0px 0px");	
		MxIO = $("#mxVal").val();
		console.log("p vale"+MxIO);
		if(MxIO == ""){
			
			alert("Please Enter Value ");
			//$("#modelMsg").html("<b class='boldTextRed'>Please Enter Value</b>");
		}else {
			MxIO = parseFloat($("#presText").val());
				if(MxIO <= 0){
				
				alert("Enter Appropraite Value");		
				
				}else{
					$("#r7").prop("hidden",false);
					$("#MuVal").prop("disabled",false);
					$("#MuSub").prop("disabled",false);
					$("#mxVal").prop("disabled",true);
				//alert("Correct Value");
				
				}
		}
	});
		
	
	
	var MuValIO;
	
    
	$("#MuSub").click(function(){	
//		 var MuAns = MxIO * 1.5;  
		 Mu_corr=MxIO * 1.5;
//   		 Mu_corr=parseFloat(MuAns);
	 	 $("body").css("padding","0px 0px 0px 0px");
		 MuValIO =$("#MuVal").val();	
		if(MuValIO==""){
			
			$("#modelMsg").html("<b class='boldTextRed'>Enter numeric value ");
		}else{
			if (id <= 2) {
				if (MuValIO == Mu_corr) {
					
					//addToMasterJSON();
					$("#r8").prop("hidden",false);
					$("#footingArea").prop("disabled",false);
			  		$("#footingAreaSub").prop("disabled",false);
					$("#MuVal").prop("disabled",true);
					$("#MuSub").prop("disabled",true);
						id=0;
					toastr.success("Correct Answer");
				} else if (MuValIO != Mu_corr) {
					$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");
					
				}
			} else if (id == 3){
				$("#modelMsg").html("<b class='boldTextBlue'>Formula : m<sub>x</sub> X 1.5  </b><br> <p>Here, P = "+MxIO+"</p> ");
			} else {
				MuValIO =parseFloat($("#MuVal").val());
//				flow = flowAns.toFixed(2);
				if (MuValIO == Mu_corr) {
					
					//addToMasterJSON();
					$("#r8").prop("hidden",false);
					$("#footingArea").prop("disabled",false);
			  		$("#footingAreaSub").prop("disabled",false);
					$("#MuVal").prop("disabled",true);
					$("#MuSub").prop("disabled",true);
					id=0;
					toastr.success("Correct Answer");
				} else {
					$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +Mu_corr+'</b>');
				}
			}
			id++;
		}

	 
	});

	
	var id1=0;		
	//var FArea_corr;
	var FArea_val;
	$("#footingAreaSub").click(function(){
		FArea_corrAns=addLoad2/SBCValue2;	
		FArea_corr111=	FArea_corrAns.toFixed(2);
		FArea_corr=parseFloat(FArea_corr111);
		console.log("FArea_corr"+FArea_corr);
		$("body").css("padding","0px 0px 0px 0px");
		FArea_val=$("#footingArea").val();
		if(FArea_val==""){
			$("#modelMsg").html("<b class='boldTextRed'>Enter numeric value ");
		}else{
			if (id1 <= 2) {
				if (FArea_val == FArea_corr) {
					//$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
					
					//addToMasterJSON();
			  		$("#FootingA").text(FArea_corr);
			  		$("#r9").prop("hidden",false);
			  		$("#lfAns").prop("disabled",false);
			  		//$("#BfVal").prop("disabled",false);
					//$("#SubLfBf").prop("disabled",false);					
					$("#footingArea").prop("disabled",true);
			  		$("#footingAreaSub").prop("disabled",true);	
			  		id1=0;
					toastr.success("Correct Answer");
				} else if (FArea_val != FArea_corr) {
					$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");
					
				}
			} else if (id1 == 3){
				$("#modelMsg").html("<b class='boldTextBlue'>Formula : Area of Footing Required = Total Load / SBC </b>");
			} else {
				FArea_val=parseFloat($("#footingArea").val());
				//FArea_val = FArea_val.toFixed(2);
				if (FArea_val == FArea_corr) {
					//$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
					//addToMasterJSON();
					
					//$("#totalLoad").val('');
					$("#FootingA").text(FArea_corr);
			  		$("#r9").prop("hidden",false);
			  		$("#lfAns").prop("disabled",false);
			  		//$("#BfVal").prop("disabled",false);
					//$("#SubLfBf").prop("disabled",false);					
					$("#footingArea").prop("disabled",true);
			  		$("#footingAreaSub").prop("disabled",true);		
			  		id1=0;								
					toastr.success("Correct Answer");
				} else {
					$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +FArea_corr+'</b>');
				}
			}
			id1++;
		}		
							
	});
	
	 
	 var MulLfBf;
	 
	$("#lfAns").change(function(){
	  LfValue=$("#lfAns").val();
	  if(LfValue==""){
			$("#modelMsg").html("<b class='boldTextRed'>Enter Numeric Value ");
		}else{
			LfValue=parseFloat($("#lfAns").val());
			$("#r10").prop("hidden",false);
			 $("#bfAnsSub").prop("disabled",false);
			  $("#bfAns").prop("disabled",false);
			
		}
	  
	});
	
		
//	$("#BfVal").change(function(){
//	  BfValue=$("#BfVal").val();
//	  
//	  if(BfValue==""){
//			$("#modelMsg").html("<b class='boldTextRed'>Enter Numeric Value ");
//		}else{
//			BfValue=parseFloat($("#BfVal").val());
//			MulLfBf=LfValue*BfValue;
//			console.log("MulLfBf = "+MulLfBf);
//			console.log("LfValue = "+LfValue+", BfValue = "+BfValue);
//			//LfBfValue(LfValue,BfValue);	
//		}
//	 });
	
	
	$("#bfAnsSub").click(function(){
		
		$("body").css("padding","0px 0px 0px 0px");
		BfValue=$("#bfAns").val();
		MulLfBf=LfValue*BfValue;
//		MulLfBf=LfValue*BfValue;
//		console.log("MulLfBf ("+MulLfBf+') = LfValue ('+LfValue+') * BfValue('+BfValue+')');
		if(BfValue==""){
			$("#modelMsg").html("<b class='boldTextRed'>Enter numeric value ");
		}else{
			if (id <= 2) {
				if (MulLfBf >= FArea_corr) {
					//$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
					
					//addToMasterJSON();
					//$("#totalLoad").val(''); 
					$("#r11").prop("hidden",false);  
					$("#WuVal").prop("disabled",false);
			  		$("#SubWu").prop("disabled",false);			  		
			  		$("#lfAns").prop("disabled",true);
			  		$("#bfAns").prop("disabled",true);
					$("#bfAnsSub").prop("disabled",true);
					id=0;
					
					toastr.success("Correct Answer");
					LfBfValue(LfValue,BfValue);	
				} else if (MulLfBf < FArea_corr) {
					$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");
					
				}
			} else if (id == 3){
				$("#modelMsg").html("<b class='boldTextBlue'>Note : L<sub>f</sub> &times; B<sub>f</sub>  >= A<sub>f</sub></b> ");
			} else {
				BfValue=parseFloat($("#bfAns").val());
				MulLfBf=LfValue*BfValue;
				console.log("MulLfBf ("+MulLfBf+') = LfValue ('+LfValue+') * BfValue('+BfValue+')');
//				flow = flowAns.toFixed(2);
				if (MulLfBf >= FArea_corr) {
					//$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
					//addToMasterJSON();
					
					//$("#totalLoad").val('');
					$("#r11").prop("hidden",false);  
					$("#WuVal").prop("disabled",false);
			  		$("#SubWu").prop("disabled",false);			  		
			  		$("#lfAns").prop("disabled",true);
			  		$("#bfAns").prop("disabled",true);
					$("#bfAnsSub").prop("disabled",true);
					id=0;	
							
					toastr.success("Correct Answer");
					LfBfValue(LfValue,BfValue);	
				} else {
					$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +FArea_corr+'</b>');
				}
			}
			id++;
		}
		
		
		
	});
	
	var Mcal;
	//var wuCorr;
	var WuValue;
	$("#SubWu").click(function(){
		Mcal=workingLoadValue2/FArea_corr;	
		wuCorrAns=1.5*Mcal;
		wuCorr111=	wuCorrAns.toFixed(2);
		wuCorr=parseFloat(wuCorr111);
		$("body").css("padding","0px 0px 0px 0px");
		WuValue=$("#WuVal").val();
		if(WuValue==""){
			$("#modelMsg").html("<b class='boldTextRed'>Enter numeric value ");
		}else{
			if (id <= 2) {
				if (WuValue == wuCorr) {
					//$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
					
					//addToMasterJSON();
			  		//$("#FootingA").text(FArea_corr);
			  		$("#r12").prop("hidden",false);
			  		$("#nextLevelPg2").prop("disabled",false);					
					$("#WuVal").prop("disabled",true);
			  		$("#SubWu").prop("disabled",true);
			  		id=0;
			  		soilPressure(WuValue);
					toastr.success("Correct Answer");
				} else if (WuValue != wuCorr) {
					$("#modelMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try again.</b> ");
					
				}
			} else if (id == 3){
				$("#modelMsg").html("<b class='boldTextBlue'>Formula : 1.5 &times; P / A<sub>f</sub> </b> <br>Here, P = "+workingLoadValue2+" <br> A<sub>f</sub> = "+FArea_corr+" ");
			} else {
				WuValue=parseFloat($("#WuVal").val());
//				flow = flowAns.toFixed(2);
				if (WuValue == wuCorr) {
					//$("#modelMsg").html("<b class='boldTextGreen'>Correct Answer</b>");
					//addToMasterJSON();
					
					//$("#totalLoad").val('');
					$("#r12").prop("hidden",false);
			  		$("#nextLevelPg2").prop("disabled",false);					
					$("#WuVal").prop("disabled",true);
			  		$("#SubWu").prop("disabled",true);
			  		id=0;
			  		soilPressure(WuValue);									
					toastr.success("Correct Answer");
				} else {
					$("#modelMsg").html("<b class='boldTextBlue'>Correct Answer is  " +wuCorr+'</b>');
				}
			}
			id++;
		}		
							
	});
	
	
	
		
//	$("#checkConfigPg2").click(function(){
//			$("body").css("padding","0px 0px 0px 0px");	
//				$("#footingArea").prop("disabled",true);
//				$("#footingAreaSub").prop("disabled",true);
//				$("#nextLevelPg2").prop("disabled",false);
//				
//	});
	
	
	$("#nextLevelPg2").click(function(){
			$("body").css("padding","0px 0px 0px 0px");	
			$("#main-div-conf").html('');
			$("#centerText2").html('');
			
				//$("#checkConfigPg2").prop("disabled",true);
			//Page3Configurations(pre,conVal,steelVal,colSize,d_val,sbc_val,eCover_value2,LfValue,BfValue,wuCorr);
			$("#modelMsg").html("<b class='boldTextGreen'>Configured Successfully</b>");	
	});

}	








  



	
function addToP2MasterJSON(){
	                  tempJson={};	
						tempJson.pre=pre;
						tempJson.conVal = conVal;
						tempJson.steelVal = steelVal;						
						tempJson.colSize = colSize;
						tempJson.d_val = d_val;
						tempJson.sbc_val = sbc_val;		
						tempJson.eCover_value2 = eCover_value2;						
						
						tempJson.pu_corr = pu_corr;
						tempJson.loadFromCol_val = loadFromCol_val;
						tempJson.Persentage_corr = Persentage_corr;
						tempJson.selfWt_corr = selfWt_corr;
						tempJson.addLoad2 = addLoad2;
						tempJson.FArea_corr = FArea_corr;
						tempJson.LfValue = LfValue;
						tempJson.BfValue = BfValue;
						tempJson.wuCorr = wuCorr;
						
						
						ArrayJson.push(tempJson);
						InputValMasterJson.demo = ArrayJson;
						console.log(InputValMasterJson);
//						tableCreateFlow(CalculateFMasterJson);

}



	
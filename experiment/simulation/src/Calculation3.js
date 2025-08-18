var bendingMomentLF,B;
function Calculation3(){
	$("#page4Div1").html("<img src='images/finalImg.png' class='img-fluid'>");
	

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
		   +'<label class="labelstyle ">Mu<sub>x</sub> (Nmm): </label>'
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
		   +'<label class="labelstyle ">Mu<sub>y</sub> (Nmm): </label>'
		   +'</div>'	    
		   +'<div class="col-sm-4">'
		   +'<input type="number" id="muyVal" style= "width:100%;"  class="form-control" >'
		   +'</div>'
		   +'<div class="col-sm-3" id="">'
		   +'<button type="button" class="btn btn-danger btnDesign" style = "width:100%;" id="muySubmit" data-toggle="modal" data-target="#ModalMuy" >SUBMIT</button>'
		   +'</div>'	     
		   +'</div>'
		   
		   +'<div class="row calRowBorder" id="astx" hidden >'
		   
		   +'<div class="col-sm-5">'
		   +'<label class="labelstyle ">Ast<sub>x</sub> (mm<sup>2</sup>): </label>'
		   +'</div>'	    
		   +'<div class="col-sm-4">'
		   +'<input type="number" id="astxVal" style= "width:100%;"  class="form-control" >'
		   +'</div>'
		   +'<div class="col-sm-3" id="">'
		   +'<button type="button" class="btn btn-danger btnDesign" style = "width:100%;" id="astxSubmit" data-toggle="modal" data-target="#ModalMuy" >SUBMIT</button>'
		   +'</div>'	     
		   +'</div>'
		   +'<div class="row calRowBorder" id="asty" hidden >'
		   
		   +'<div class="col-sm-5">'
		   +'<label class="labelstyle ">Ast<sub>y</sub> (mm<sup>2</sup>): </label>'
		   +'</div>'	    
		   +'<div class="col-sm-4">'
		   +'<input type="number" id="astyVal" style= "width:100%;"  class="form-control" >'
		   +'</div>'
		   +'<div class="col-sm-3" id="">'
		   +'<button type="button" class="btn btn-danger btnDesign" style = "width:100%;" id="astySubmit" data-toggle="modal" data-target="#ModalMuy" >SUBMIT</button>'
		   +'</div>'	     
		   +'</div>'
		   
		   +'<div class="row" id="phase3" hidden >'
		   +'<div class="col-sm-6">'
		  
		  +'<div class="col-sm-12">'
		   +'<div class="alert alert-success alert-dismissible" id="" >'
		   +' <strong id="phase3Text" class="" style="font-size:20px;" > </strong> '
			 +'</div>'
		   +'</div>'
		  
		   +'</div>'
		   +'<div class="col-sm-6">'
		  
		  +'<div class="col-sm-12">'
		   +'<div class="alert alert-success alert-dismissible" id="" >'
		   +' <strong id="phase3Text1" class="" style="font-size:20px;"> </strong> '
			 +'</div>'
		   +'</div>'
		  
		   +'</div>'
		   +'</div>'
		   
		   +'<div class="row" id="phase4" hidden>'
		   +'<div class="col-sm-6">'
		   +'<div class="col-sm-12">'
		   +'<div class="alert alert-success alert-dismissible" id="" >'
		   +' <strong id="phase4Text" class="" style="font-size:20px;"> </strong> '
		   +'</div>'  
		   +'</div>'
		   +'</div>'  
		   +'<div class="col-sm-6">'
		   +'<div class="col-sm-12">'
		   +'<div class="alert alert-success alert-dismissible" id="" >'
		   +' <strong id="phase4Text1" class="" style="font-size:20px;"> </strong> '
		   +'</div>'  
		   +'</div>'
		   +'</div>'
		 
		   +'</div>'
		   + '<div class="row" id="dimeter" hidden>'
		   +'<div class="col-sm-6">'
		   +'<div class="col-sm-6">'
		   +'<label class="labelstyle marginBottom">Bar diameter &#8960;(mm)</label>'
		   +'</div>'
		   +'<div class="col-sm-6">'
		   +'<select  class="form-control selectConf marginBottom" id="bar"  style="height:auto; "  >'
		   +'<option value="0">--- Select bar diameter(mm) --- </option>'
		   +'<option value="12" >12  </option>'
		   +'<option value="16" >16  </option>'
		   +'<option value="20" >20  </option>'
		   +'<option value="25" >25  </option>'
		   +'<option value="32" >32  </option>'
		   +'</select>'	   
		   +'</div>'
		   +'</div>'
		   +'<div class="col-sm-6">'
		   +'<div class="col-sm-6">'
		   +'<label class="labelstyle marginBottom">Bar diameter &#8960;(mm)</label>'
		   +'</div>'
		   +'<div class="col-sm-6">'
		   +'<select  class="form-control selectConf marginBottom" id="bar1"  style="height:auto; "  disabled>'
		   +'<option value="0">--- Select bar diameter(mm) --- </option>'
		   +'<option value="12" >12  </option>'
		   +'<option value="16" >16  </option>'
		   +'<option value="20" >20  </option>'
		   +'<option value="25" >25  </option>'
		   +'<option value="32" >32  </option>'
		   +'</select>'	   
		   +'</div>'
		   +'</div>'
		   +'</div>'
		   +'</div>'
		   
			+'<div class="row" id="spacingBarDiv" hidden >'
			 +'<div class="col-sm-6">'
			   +'<div class="col-sm-12">'
			   +'<div class="alert alert-success alert-dismissible" id="" >'
			   +' <strong id="spacingbarText" class="" style="font-size:20px;"> </strong> '
			   +'</div>'  
			   +'</div>'
			   +'</div>'
			   +'<div class="col-sm-6" id="subspacingBarDiv" hidden>'
			   +'<div class="col-sm-12">'
			   +'<div class="alert alert-success alert-dismissible" id="" >'
			   +' <strong id="spacingbarText12" class="" style="font-size:20px;"> </strong> '
			   +'</div>'
			   +'</div>'
			   +'</div>'
			  
			   +'</div>'
			   
			   +'<div class="row" id="spacing" hidden >'
			   
			  
			   +'<div class="col-sm-6">'
			   +'<div class="col-sm-12">'
			   +'<div class="alert alert-success alert-dismissible" id="" >'
			   +' <strong id="spacingbarText1" class="" style="font-size:20px;"> </strong> '
			   +'</div>'
			   +'</div>'
			   +'</div>'
			   +'<div class="col-sm-6" id="subspacingBarDiv1" hidden>'
			   +'<div class="col-sm-12">'
			   +'<div class="alert alert-success alert-dismissible" id="" >'
			   +' <strong id="spacingbarText13" class="" style="font-size:20px;"> </strong> '
			   +'</div>'
			   +'</div>'
			   +'</div>'
			  
			   +'</div>'
			   
			   +'<div class="row" id="complete" hidden >'
			  
			  
			   +'<div class="col-sm-12">'
			   +'<div class="alert alert-info alert-dismissible" id="" >'
			   +' <strong id="completeText" class="" style="font-size:20px;"><center>Experiment Completed successfully.</center> </strong> '
			   +'</div>'
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
						$("#muxMsg").html("<b class='boldTextBlue'>Correct Answer "+bendingMomentLF+" (Nmm)");
					}
				}
				id6++;
				}	 
		});
var id7=0;
var muy=0;
		
		$("#muySubmit").click(function(){		
			
			muyVal=$("#muyVal").val();
			console.log("muyVal "+muyVal);
			B=parseFloat(bfVal-dcVal)/2;
			let bTemp1=parseFloat(Math.pow(B,2)/2);
			
			let bTemp2=parseFloat(parseFloat(faceSigma)*parseFloat(lfVal)*bTemp1);
			
			bendingMomentBF=bTemp2.toFixed(2);
			muy=bendingMomentBF;
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
						 $("#astx").prop("hidden",false);
						 $("#muyMsg").html("<b class='boldTextBlue'>Go to next level");
					}	
					else{
						$("#muyMsg").html('<img src="images/face.png" class="img-fluid">');
					}
				} else {
					muyVal =parseFloat($("#muyVal").val());

					if (muyVal==bendingMomentBF)  {					
						id7=0;
						 $("#muySubmit,#muyVal").prop("disabled",true);
						 $("#astx").prop("hidden",false);
						 $("#muyMsg").html("<b class='boldTextBlue'>Go to next level");
					} else {
						$("#muyMsg").html("<b class='boldTextBlue'>Correct Answer "+bendingMomentBF+" (Nmm)");
					}
				}
				id7++;
				}	 
		});
		 var id8=0;
		 var outast=0;
			$("#astxSubmit").click(function(){
				  console.log(" in ast btn");
					
						
						flow=parseFloat($("#astxVal").val());
						 const fck =  MasterJson[0]["Grade of concrete f<sub>ck</sub>(N/mm<sup>2</sup>)"];
					      const fy =  MasterJson[0]["Grade of Steel f<sub>y</sub>(N/mm<sup>2</sup>)"];
					      console.log("Grade of fck:", fck);
					      console.log("Grade of Steel:", fy);

					      const Mu = parseFloat(bendingMomentLF); // Convert kN·m to N·mm
					      const b = 1000;
					      const d = parseFloat(MasterJson[0]['Depth of footing d<sub>c</sub>(mm)']);

					      console.log(" fck "+fck);
					      console.log(" fy "+fy);
					      console.log(" mu "+Mu);
					      console.log(" b "+b);
					      console.log(" d "+d);
					      
					      if (fck && fy && Mu && b && d) {
					        const denominator = fck * b * d * d;
					        const innerTerm = 1 - ((4.6 * Mu) / denominator);

					        if (innerTerm < 0) {
					        	$("#muyMsg").html("Invalid input (negative square root)");
					          
					        }

					        const sqrtTerm = Math.sqrt(innerTerm);
					        const bracket = 1 - sqrtTerm;
					         const ast = (0.5 * fck / fy) * bracket * b * d;
					        outast=ast.toFixed(2);
					        console.log("ast "+ast);
					        
					        $("#muyMsg").html(ast.toFixed(2));
					      } else {
					    	  $("#muyMsg").html("Please enter all values");
					      }
						  if(flow==""){

							$("#muyMsg").html("<b >Enter numeric value.</b> ");
						}
						else
							{
								if (id8 <= 3) {
									if (outast == flow) {
										id8=0;
										
										$("#nextLevelModel,#asty").prop("hidden",false);
										$("#astxSubmit,#astxVal").prop("disabled",true);
										$("#btnModal").prop("hidden",true);
										Astmin();
										
									} else if (outast != flow) {
										 $("#muyMsg").css("color", "red");
//									alert("Entered value is incorrect.Try it again... ");
									$("#muyMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try it again.</b>");
									
									}
								} else if (id8 == 4) {
									 $("#muyMsg").css("color", "blue");
									$("#muyMsg").html("<b>Formula :<img src='images/astx.png'></b>");
									
									
								} else {
									flow = parseFloat($("#astxVal").val());

									if (outast == flow) {
										id8=0;
									
										$("#nextLevelModel,#asty").prop("hidden",false);
										$("#astxSubmit,#astxVal").prop("disabled",true);
										$("#btnModal").prop("hidden",true);
										Astmin();
										

									} else {

										 $("#muyMsg").css("color", "green");
										$("#muyMsg").html("<b class='boldTextblue'>Correct Answer is " + outast+' mm<sup>2</sup></b>');
									}
								}
								id8++;
					} 
					  });
			var astmin;
			var finalAst;
			function Astmin()
			{
				console.log("Ast min");	
				var fe=MasterJson[0]["Grade of Steel f<sub>y</sub>(N/mm<sup>2</sup>)"];
					var consVal;
					var  b = 1000;
				     var D = parseFloat(MasterJson[0]['Depth of footing d<sub>c</sub>(mm)']);

				if(fe==250){
					astmin=parseFloat(0.15/100)*b*D;
					$('#phase3Text').html("<center>Ast<sub>x</sub> ="+astmin+"</center>");
					
				}
				else if(fe==415 || fe==500)
					{
					astmin=parseFloat(0.12/100)*b*D;
					$('#phase3Text').html("<center>Ast<sub>x</sub> ="+astmin+"</center>");
				
					}
				if(outast>astmin)
					{
					$('#phase4Text').html("<center>Consider Ast ="+outast+"</center>");
					finalAst=outast;
					}
				else
				{
					$('#phase4Text').html("<center>Consider Ast ="+astmin+"</center>");
					finalAst=astmin;
					}
				
				 $("#muyMsg").html("<b>Go to next level</b>");
			}
			 $("#bar").change(function(){
				 $("#bar").prop("disabled",true);
				 $("#bar1").prop("disabled",false);
				 $("#spacingBarDiv,#spacing").prop("hidden",false);
					var bar1=parseInt($("#bar").val());
					var astbar=parseFloat((3.14/4)*bar1*bar1);
					
					$('#spacingbarText').html("<center>Ast &#8960; ="+astbar.toFixed(2)+"</center><br><center>Now calculate spacing formula:(1000*ast &#8960/Consider ast)</center><br>");
					var spacing=parseFloat((1000*astbar)/finalAst);
					let lower10 = Math.floor(spacing / 10) * 10;  // 190
					if(parseInt(lower10)>=300)
					$('#spacingbarText1').html("<center>Hence, "+bar1+" mm diameter bars are to be provided at 300 mm spacing to meet the required reinforcement criteria.</center>");
					else
						$('#spacingbarText1').html("<center>Hence, "+bar1+" mm diameter bars are to be provided at "+lower10+" mm spacing to meet the required reinforcement criteria.</center>");	
					
					console.log("astbar "+astbar);	
					console.log("spacing "+spacing);	
				});
			 
			 var id9=0;
			 var outast1=0;
				$("#astySubmit").click(function(){
					  console.log(" in ast btn");
						
							
							  flow=parseFloat($("#astyVal").val());
							  const fck =  MasterJson[0]["Grade of concrete f<sub>ck</sub>(N/mm<sup>2</sup>)"];
						      const fy =  MasterJson[0]["Grade of Steel f<sub>y</sub>(N/mm<sup>2</sup>)"];
						      console.log("Grade of fck:", fck);
						      console.log("Grade of Steel:", fy);

						      const Mu = parseFloat(muy); // Convert kN·m to N·mm
						      const b = 1000;
						      const d = parseFloat(MasterJson[0]['Depth of footing d<sub>c</sub>(mm)']);

						      console.log(" fck "+fck);
						      console.log(" fy "+fy);
						      console.log(" mu "+Mu);
						      console.log(" b "+b);
						      console.log(" d "+d);
						      
						      if (fck && fy && Mu && b && d) {
						        const denominator = fck * b * d * d;
						        const innerTerm = 1 - ((4.6 * Mu) / denominator);

						        if (innerTerm < 0) {
						        	$("#muyMsg").html("Invalid input (negative square root)");
						          
						        }

						        const sqrtTerm = Math.sqrt(innerTerm);
						        const bracket = 1 - sqrtTerm;
						         const ast = (0.5 * fck / fy) * bracket * b * d;
						        outast1=ast.toFixed(2);
						        console.log("ast "+ast);
						        
						        $("#muyMsg").html(ast.toFixed(2));
						      } else {
						    	  $("#muyMsg").html("Please enter all values");
						      }
							  if(flow==""){

								$("#muyMsg").html("<b >Enter numeric value.</b> ");
								
							}
							else
								{
									if (id9 <= 3) {
										if (outast1 == flow) {
											id9=0;
											
											$("#nextLevelModel,#phase3,#phase4,#dimeter").prop("hidden",false);
											$("#astySubmit,#astyVal").prop("disabled",true);
											$("#btnModal").prop("hidden",true);
											AstminFun();
											
										} else if (outast1 != flow) {
											 $("#muyMsg").css("color", "red");
//										alert("Entered value is incorrect.Try it again... ");
										$("#muyMsg").html("<b class='boldTextRed'>Entered value is incorrect.Try it again.</b>");
										
										}
									} else if (id9 == 4) {
										 $("#muyMsg").css("color", "blue");
										$("#muyMsg").html("<b>Formula :<img src='images/asty.png'></b>");
										
										
									} else {
										flow = parseFloat($("#astyVal").val());

										if (outast1 == flow) {
											id9=0;
										
											$("#nextLevelModel,#phase3,#phase4,#dimeter").prop("hidden",false);
											$("#astySubmit,#astyVal").prop("disabled",true);
											$("#btnModal").prop("hidden",true);
											AstminFun();
											

										} else {

											 $("#muyMsg").css("color", "green");
											$("#muyMsg").html("<b class='boldTextblue'>Correct Answer is " + outast1+' mm<sup>2</sup></b>');
										}
									}
									id9++;
						
								} 
						  });
				var astmin1;
				var finalAst1;
				function AstminFun()
				{
					console.log("Ast min");	
					var fe=MasterJson[0]["Grade of Steel f<sub>y</sub>(N/mm<sup>2</sup>)"];
						var consVal;
						var  b = 1000;
					     var D = parseFloat(MasterJson[0]['Depth of footing d<sub>c</sub>(mm)']);

					if(fe==250){
						astmin1=parseFloat(0.15/100)*b*D;
						$('#phase3Text1').html("<center>Ast<sub>y</sub> ="+astmin1+"</center>");
						
					}
					else if(fe==415 || fe==500)
						{
						astmin1=parseFloat(0.12/100)*b*D;
						$('#phase3Text1').html("<center>Ast<sub>y</sub> ="+astmin1+"</center>");
					
						}
					if(outast1>astmin1)
						{
						$('#phase4Text1').html("<center>Consider Ast ="+outast1+"</center>");
						finalAst1=outast1;
						}
					else
					{
						$('#phase4Text1').html("<center>Consider Ast ="+astmin1+"</center>");
						finalAst1=astmin1;
						}
					 $("#dimeter").prop("hidden",false);
					 $("#muyMsg").html("<b>Go to next level</b>");
				}
				 $("#bar1").change(function(){
					 $("#bar1").prop("disabled",true);
					 $("#subspacingBarDiv,#subspacingBarDiv1").prop("hidden",false);
						var bar=parseInt($("#bar1").val());
						var astbar=parseFloat((3.14/4)*bar*bar);
						
						$('#spacingbarText12').html("<center>Ast &#8960; ="+astbar.toFixed(2)+"</center><br><center>Now calculate spacing formula:(1000*ast &#8960/Consider ast)</center><br>");
						var spacing=parseFloat((1000*astbar)/finalAst1);
						let lower10 = Math.floor(spacing / 10) * 10;  // 190
						if(parseInt(lower10)>=300)
						$('#spacingbarText13').html("<center>Hence, "+bar+" mm diameter bars are to be provided at 300 mm spacing to meet the required reinforcement criteria.</center>");
						else
							$('#spacingbarText13').html("<center>Hence, "+bar+" mm diameter bars are to be provided at "+lower10+" mm spacing to meet the required reinforcement criteria.</center>");	
						
						$("#complete").prop("hidden",false);
						console.log("astbar "+astbar);	
						console.log("spacing "+spacing);	
					});
}
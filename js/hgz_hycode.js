
var hystrVar = "";
    hystrVar += "<div  class=\"aui_state_box\"><div class=\"aui_state_box_bg\"></div>";
    hystrVar += "<div class=\"aui_outer aui_alert\" id=\"drag_con\">";
    hystrVar += "<table class=\"aui_border aui_hybox\" style=\"border:2px solid #8a9499;\">";
   hystrVar += "<tbody>";
    hystrVar += "<tr>";
    hystrVar += "	<td class=\"aui_c\">";
    hystrVar += "		<div class=\"aui_inner\">";
    hystrVar += "			<table class=\"aui_dialog\">";
    hystrVar += "			<tbody>";
    hystrVar += "			<tr>";
    hystrVar += "				<td class=\"aui_main\" style=\"width: auto; height: auto;\">";
    hystrVar += "					<div class=\"aui_content\" style=\"padding: 10px 25px;\">";
    hystrVar += "						<div class=\"items jquery-localdata\">";
    hystrVar += "							<div style=\"height:400px\" class=\"item-table\">";
    hystrVar += "								<table style=\"width:700px;\" class=\"options-table\">";
    hystrVar += "								<tbody class=\"item-list\" >";
	var maxhy=znhycode;

for(var i in znhycode)
{
	var node="";
	for(var j in znhycode[i].maxhycode)
	{
		if(j!=znhycode[i].maxhycode.length-1){
		if(j%2==0)
		{
			node += "		<tr>";
    node += "			<td>";
    node += "				<label>";
    node += "				<input type=\"checkbox\"  name=\"item-list\" class=\"input-checkbox\" data-value=\""+znhycode[i].maxhycode[j].CodeValue+"\" data-name=\""+znhycode[i].maxhycode[j].CodeName+"\"  onclick=\"addhyitem(this)\">";
    node += znhycode[i].maxhycode[j].CodeName;
    node += "				</label>";
    node += "			</td>";
		}else
		{
			    node += "			<td>";
    node += "				<label>";
    node += "				<input type=\"checkbox\"  name=\"item-list\" class=\"input-checkbox\" data-value=\""+znhycode[i].maxhycode[j].CodeValue+"\" data-name=\""+znhycode[i].maxhycode[j].CodeName+"\" onclick=\"addhyitem(this)\">";
    node += znhycode[i].maxhycode[j].CodeName;
    node += "				</label>";
    node += "			</td>";
    node += "		</tr>";
			}
		}else
		{
			if(j/2==0)
		{
			node += "		<tr>";
    node += "			<td>";
    node += "				<label>";
    node += "				<input type=\"checkbox\"  name=\"item-list\" class=\"input-checkbox\" data-value=\""+znhycode[i].maxhycode[j].CodeValue+"\" data-name=\""+znhycode[i].maxhycode[j].CodeName+"\" onclick=\"addhyitem(this)\">";
    node += znhycode[i].maxhycode[j].CodeName;
    node += "				</label>";
    node += "			</td>";
	    node += "		</tr>";
		}else
		{
			    node += "			<td>";
    node += "				<label>";
    node += "				<input type=\"checkbox\"  name=\"item-list\" class=\"input-checkbox\" data-value=\""+znhycode[i].maxhycode[j].CodeValue+"\" data-name=\""+znhycode[i].maxhycode[j].CodeName+"\" onclick=\"addhyitem(this)\">";
    node += znhycode[i].maxhycode[j].CodeName;
    node += "				</label>";
    node += "			</td>";
    node += "		</tr>";
			}
			}
		
		}
	 hystrVar += "<tr>";
    hystrVar += "	<th width=\"150\">";
    hystrVar +=znhycode[i].CodeName;
    hystrVar += "	</th>";
    hystrVar += "	<td>";
    hystrVar += "		<table>";
    hystrVar += "		<tbody>";
	hystrVar+=node;
    hystrVar += "		</tbody>";
    hystrVar += "		</table>";
    hystrVar += "	</td>";
    hystrVar += "</tr>";	
	}
	
    hystrVar += "								</tbody>";
    hystrVar += "								</table>";
    hystrVar += "							</div>";
    hystrVar += "						</div>";
    hystrVar += "					</div>";
    hystrVar += "				</td>";
    hystrVar += "			</tr>";
    hystrVar += "			</tbody>";
    hystrVar += "			</table>";
    hystrVar += "		</div>";
    hystrVar += "	</td>";
    hystrVar += "</tr>";
    hystrVar += "</tbody> </table></div></div>";
var datainput=null;	
var zytype="";
function appendhybar(thiscon,type){
	datainput=thiscon;
	zytype=type;
	$('body').append(hystrVar);
}
//选择行业
function addhyitem(con){
	if(zytype=="duoxuan"){
	if($(con).prop("checked")==true)
	{
	}else
	{
		$(".sltnode-checkbox[data-value="+$(con).data("value")+"]").prop("checked",false);
		$(".sltnode-checkbox[data-value="+$(con).data("value")+"]").parent('label').remove();
		}
	}else
	{
		$(datainput).data("value",$(con).data("value"));
		$(datainput).val($(con).data("name"));
		$('.aui_state_box').remove();
	}
}


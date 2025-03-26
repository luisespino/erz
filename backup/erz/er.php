<!--
To change this template, choose Tools | Templates
and open the template in the editor.

-->

<?php
    $files = array();
    $directorio=opendir("xml");
    while ($archivo = readdir($directorio))
        if (($archivo != '.') and ($archivo != '..'))
            array_push($files,$archivo);
    closedir($directorio);
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>ERZ: Entity Relationship to Z Notation</title>
        <link rel="stylesheet" type="text/css" href="style.css" />
        <style type="text/css">
            .drag { border: 1px solid black;
                    min-height:20px; /*ff*/
                    min-width:20px; /*ff*/
                    height: auto !important; /*ie7 */
                    width: auto !important; /*ie7 */
                    background-color: rgb(240, 240, 240);
                    background-image: url("images/head.png");
                    background-repeat: no-repeat;
                    background-position: 0px 6px;
                    position: absolute;
                    padding: 0.5em;
                    margin: 0 0 0.5em 1.5em;
                    cursor: move;}
            .cmenu {margin: 0; padding: 0.3em; list-style-type: none; background-color: white;}
            .cmenu li:hover {}
            .cmenu hr {border: 0; border-bottom: 1px solid grey; margin: 3px 0px 3px 0px; width: 10em;}
            .cmenu a {border: 0 !important;}
            .cmenu a:hover {text-decoration: underline !important;}
            .cmenu .topSep {font-size: 90%; border-top: 1px solid gray; margin-top: 0.3em; padding-top: 0.3em;}

	.root {
		position:absolute;
		height:100px;
		width:150px;
		background-color:#F4F4F4;
		border:1px solid #333;
		}

	.handle {
		margin:2px;
		padding:2px;
		width:142px;
		color:white;
		background-color:navy;
		font-family:verdana, sans-serif;
		font-size:10px;
		}
        </style>
        <script type="text/javascript" src="jsSerial.js"></script>

        <script type="text/JavaScript">

            var parent = '';
            var child = '';
            var entities = [];
            var relations = [];
            var attributes = [];
            var cardParent = '';
            var cardChild = '';
            var drawOpen = false; // used for draw relations at end of load
            var filepass = '';

            function DialogBox(title, htmlContents,id) {
                CloseContext();

                var dialogBackground = document.createElement('div');
                var temporal = id;
                temporal = temporal;
                dialogBackground.className = "dialogBackground";
                dialogBackground.setAttribute("id", "dialogBackground");
                var dialogBox = document.createElement('div');
                dialogBox.className = "dialogBox";
                dialogBox.setAttribute("id", "dialogBox");
                // create contents of the dialog box
                var dialogBoxContents = "";
                dialogBoxContents += "<table width='100%'><tr>";
                dialogBoxContents += "<td width='100%'>" + title + "</td>";
                dialogBoxContents += "</tr>";
                dialogBoxContents += "<tr>";
                dialogBoxContents += "<td valign=\"middle\" align=\"center\">" + htmlContents + "</td>";
                dialogBoxContents += "</tr></table>";
                dialogBox.innerHTML = dialogBoxContents;
                document.body.appendChild(dialogBox);
                document.body.appendChild(dialogBackground);
                if (document.getElementById('entityId')) document.getElementById('entityId').value = id;
                if (document.getElementById('attributeSelect')){
                    var sel = document.getElementById('attributeSelect');
                    for(var i=0; i<attributes.length; i++){
                        if (attributes[i][0]==id) {
                            sel[sel.length] = new Option(attributes[i][1],attributes[i][1]);
                        }
                    }
                }
            }

            function closeDialogBox() {
                document.body.removeChild(document.getElementById('dialogBackground'));
                document.body.removeChild(document.getElementById('dialogBox'));
            }



            function showXML(location) {
                var dialogBackground = document.createElement('div');
                dialogBackground.className = "dialogBackground";
                dialogBackground.setAttribute("id", "dialogBackground");
                var dialogBox = document.createElement('div');
                dialogBox.className = "dialogBox";
                dialogBox.setAttribute("id", "dialogBox");
                // create contents of the dialog box
                var dialogBoxContents = "";
                dialogBoxContents += "<table  width='100%' height='100%'>";
                dialogBoxContents += '<tr style="height:90%;width:100%"><td><iframe src ='+location+' width="99%" height="100%"><p>Your browser does not support iframes.</p></iframe></td></tr>'
                dialogBoxContents += '<tr style="height:10%;width:100%"><td align=center><input type="button" value="Close" name="close" onclick="closeDialogBox();return false" /></td></tr>';
                dialogBoxContents += "</table>";
                dialogBox.innerHTML = dialogBoxContents;
                document.body.appendChild(dialogBox);
                document.body.appendChild(dialogBackground);

            }


            function attributeAdd() {
                attribute = [];
                attribute.push(document.getElementById('entityId').value);
                attribute.push(document.getElementById('attributeName').value);
                attribute.push(document.getElementById('attributeType').value);
                attribute.push(document.getElementById('attributeWidth').value);
                attribute.push(document.getElementById('attributeScale').value);
                attribute.push(document.getElementById('attributeNull').checked.toString());
                attribute.push(document.getElementById('attributeIdentity').checked.toString());
                attribute.push(document.getElementById('attributeSeed').value);
                attribute.push(document.getElementById('attributeIncrement').value);
                attribute.push(document.getElementById('attributePK').checked.toString());
                attributes.push(attribute);
                contentEntity(document.getElementById('entityId').value);
                closeDialogBox();
            }
            function attributeSaveEdit(){
                for(var i=0; i<attributes.length; i++){
                    //alert ('entro grabar');
                        if ((attributes[i][0]==document.getElementById('entityId').value) && (attributes[i][1]==document.getElementById('attributeName').value)){
                            var option = document.getElementById('attributeType');
                            if (document.getElementById('attributeName').value!=document.getElementById('attributeNew').value)
                                attributes[i][1]=document.getElementById('attributeNew').value;
                            attributes[i][2]=option.options[option.selectedIndex].text;
                            attributes[i][3]=document.getElementById('attributeWidth').value;
                            attributes[i][4]=document.getElementById('attributeScale').value;
                            attributes[i][5]=document.getElementById('attributeNull').checked.toString();
                            attributes[i][6]=document.getElementById('attributeIdentity').checked.toString();
                            attributes[i][7]=document.getElementById('attributeSeed').value;
                            attributes[i][8]=document.getElementById('attributeIncrement').value;
                            //alert (document.getElementById('attributePK').checked);
                            attributes[i][9]=document.getElementById('attributePK').checked.toString();
                        }
                }
                contentEntity(document.getElementById('entityId').value);
                closeDialogBox();
            }

            function attributeSelectedEdit(){
                var entity = document.getElementById('entityId').value;
                //alert (document.getElementById('attributeSelect').value);
                var option = document.getElementById('attributeSelect');
                var index = option.selectedIndex ;
                var attribute = option.options[index].text;
                closeDialogBox();
                //alert (entity+' '+attribute);
                DialogBox('Edit Attribute:', editAtta, entity);



                for(var i=0; i<attributes.length; i++){
                        if ((attributes[i][0]==entity) && (attributes[i][1]==attribute)){
                            //alert(attributes[i][2]);
                            document.getElementById('entityId').value = attributes[i][0];
                            document.getElementById('attributeName').value = attributes[i][1];
                            document.getElementById('attributeNew').value = attributes[i][1];
                            var myselect = document.getElementById('attributeType');
                            
                            for (var j=0; j<myselect.options.length; j++){
                                if (myselect.options[j].text == attributes[i][2])
                                     //break;
                                     myselect.options[j].selected = true;
                                
                            }

                            //document.getElementById('attributeType').selectedIndex = "'"+attributes[i][2]+"'";
                            //document.getElementById('attributeType').options[attributes[i][2]].selected = true;
                            //selectedIndex = "'"+attributes[i][2]+"'";
                            document.getElementById('attributeWidth').value = attributes[i][3];
                            document.getElementById('attributeScale').value = attributes[i][4];
                            //alert (document.getElementById('attributeNull').checked);
                            //alert (attributes[i][5]);
                            //document.getElementById('attributeNull').checked = attributes[i][5];
                            if (attributes[i][5]=='false') document.getElementById('attributeNull').checked = false;
                            else document.getElementById('attributeNull').checked = true;
                            //document.getElementById('attributeNull').checked = new Boolean(attributes[i][5]);
                            if (attributes[i][6]=='false') document.getElementById('attributeIdentity').checked = false;
                            else document.getElementById('attributeIdentity').checked = true;
                            document.getElementById('attributeSeed').value = attributes[i][7];
                            document.getElementById('attributeIncrement').value = attributes[i][8];
                            if (attributes[i][9]=='false') document.getElementById('attributePK').checked = false;
                            else document.getElementById('attributePK').checked = true;
                            
                        }
                }
            }
            function attributeSelectedRemove() {
                for(i=attributes.length-1; i>-1; i--)
                    if ((attributes[i][0]==document.getElementById('entityId').value) && (attributes[i][1]==document.getElementById('attributeSelect').value))
                        attributes.splice(i,1);
                contentEntity(document.getElementById('entityId').value);
                closeDialogBox();
            }
            var addAtt =    '<table border="0">'+
                            '<tr><td>Entity:</td><td><input type="text" name="entityId" id="entityId" value="" readonly="readonly" /></td></tr>'+
                            '<tr><td>Name:</td><td><input type="text" name="attributeName" id="attributeName" value="" /></td></tr>'+
                            '<tr><td>Type:</td><td><select name="attributeType" id="attributeType"><option>Char</option><option>DateTime</option><option>Float</option><option>Integer</option><option>Text</option><option>Varchar</option></select></td></tr>'+
                            '<tr><td>Width & Scale</td><td><input type="text" name="attributeWidth" id="attributeWidth" value="12" /><input type="text" name="attributeScale" id="attributeScale" value="0" /></td></tr>'+
                            '<tr><td>Allow Nulls?</td><td><input type="checkbox" name="attributeNull" id="attributeNull" /></td></tr>'+
                            '<tr><td>Identity?</td><td><input type="checkbox" name="attributeIdentity" id="attributeIdentity" /></td></tr>'+
                            '<tr><td>Seed & Increment</td><td><input type="text" name="attributeSeed" id="attributeSeed" value="0" /><input type="text" name="attributeIncrement" id="attributeIncrement" value="0" /></td></tr>'+
                            '<tr><td>Primary Key?</td><td><input type="checkbox" name="attributePK" id="attributePK"  /></td></tr>'+
                            '<tr><td><input type="button" value="Add" name="add" onclick="attributeAdd();" /></td><td><input type="button" value="Close" name="close" onclick="closeDialogBox();return false" /></td></tr>'+
                            '</table>';

            var editAtt =   '<table border="0">'+
                            '<tr><td>Entity:</td><td><input type="text" name="entityId" id="entityId" value="" readonly="readonly" /></td></tr>'+
                            '<tr><td>Attribute:</td><td><select name="attributeSelect" id="attributeSelect"></select></td></tr>'+
                            '<tr><td><input type="button" value="Edit" name="edit" onclick="attributeSelectedEdit();" /></td><td><input type="button" value="Close" name="close" onclick="closeDialogBox();return false" /></td></tr>'+
                            '</table>';

            var xmlShow =   '<table border="0">'+
                            '<tr><td><iframe src ="html_intro.asp" width="100%" height="300"><p>Your browser does not support iframes.</p></iframe></td></tr>'
                            '<tr><td><input type="button" value="Close" name="close" onclick="closeDialogBox();return false" /></td></tr>'+
                            '</table>';

            var editAtta =   '<table border="0">'+
                            '<input type="hidden" name="edit" id="edit" value="" />'+
                            '<tr><td>Entity:</td><td><input type="text" name="entityId" id="entityId" value="" readonly="readonly" /><input type="hidden" id="attributeName" name="attributeName" value="" /></td></tr>'+
                            '<tr><td>Name:</td><td><input type="text" name="attributeNew" id="attributeNew"  value="" /></td></tr>'+
                            '<tr><td>Type:</td><td><select name="attributeType" id="attributeType"><option>Char</option><option>DateTime</option><option>Float</option><option>Integer</option><option>Text</option><option>Varchar</option></select></td></tr>'+
                            '<tr><td>Width & Scale</td><td><input type="text" name="attributeWidth" id="attributeWidth" value="12" /><input type="text" name="attributeScale" id="attributeScale" value="0" /></td></tr>'+
                            '<tr><td>Allow Nulls?</td><td><input type="checkbox" name="attributeNull" id="attributeNull"  /></td></tr>'+
                            '<tr><td>Identity?</td><td><input type="checkbox" name="attributeIdentity" id="attributeIdentity" /></td></tr>'+
                            '<tr><td>Seed & Increment</td><td><input type="text" name="attributeSeed" id="attributeSeed" value="0" /><input type="text" name="attributeIncrement" id="attributeIncrement" value="0" /></td></tr>'+
                            '<tr><td>Primary Key?</td><td><input type="checkbox" name="attributePK" id="attributePK"  /></td></tr>'+
                            '<tr><td><input type="button" value="Save" name="save" onclick="attributeSaveEdit();" /></td><td><input type="button" value="Close" name="close" onclick="closeDialogBox();return false" /></td></tr>'+
                            '</table>';

            var removeAtt = '<table border="0">'+
                            '<tr><td>Entity:</td><td><input type="text" name="entityId" id="entityId" value="" readonly="readonly" /></td></tr>'+
                            '<tr><td>Attribute:</td><td><select name="attributeSelect" id="attributeSelect"></select></td></tr>'+
                            '<tr><td><input type="button" value="Remove" name="remove" onclick="attributeSelectedRemove();" /></td><td><input type="button" value="Close" name="close" onclick="closeDialogBox();return false" /></td></tr>'+
                            '</table>';

            function exportJPG(){
var canvas = document.getElementById("canvas");
          // no argument defaults to image/png; image/jpeg, etc also work on some
          // implementations -- image/png is the only one that must be supported per spec.
          window.location = canvas.toDataURL("image/png");
            }

            function httpRequest(){
                var xmlhttp=false;
                try {
                    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
                } catch (e) {
                    try {
                        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                    } catch (E) {
                        xmlhttp = false;
                    }
                }
                if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
                    xmlhttp = new XMLHttpRequest();
                }
                return xmlhttp;
            }



            function save(location, pass){
                // Open PHP script for save
                var http=httpRequest();
                http.open("POST", "xmlsave.php",true);
                http.onreadystatechange=function() {
                    if (http.readyState==4) alert(http.responseText);
                }
                http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                http.send("location="+location+"&pass="+pass+"&reltype="+document.getElementById('relationshipType').value+"&entities="+entities+"&attributes="+attributes+"&relations="+relations);
            }



        </script>
        <?//<script type="text/javascript" src="wz_jsgraphics.js"></script>?>
        <script type="text/JavaScript" src="jsDraw2D.js"></script>
    </head>
    <body id="body">
        <?php
        // put your code here
        error_reporting(0);
        $open_selected = false;
        if ($_REQUEST["action"]=="new"){
            if ($_POST["xmlname"]=="") echo "<META HTTP-EQUIV=Refresh CONTENT=0;URL=index.php>";
            $filename = $_POST["xmlname"].".xml";
            $file_exists = false;
            foreach ($files as $tempfile)
                if ($filename==$tempfile) $file_exists = true;
            if ($file_exists) {
                echo "<script>alert ('Filename exists!!');</script>";
                echo "<META HTTP-EQUIV=Refresh CONTENT=0;URL=index.php>";
            }
            $filepass = $_POST["xmlpass"];?>
            <script type="text/JavaScript">filepass = '<?echo $filepass;?>';</script><?
            $location = "xml/".$filename;
        }
        elseif ($_REQUEST["action"]=="open"){
            $open_selected = true;
            $filename = $_POST["file_list"];
            $location = "xml/".$filename;
        }
        elseif ($_REQUEST["action"]=="upload"){
            $filename = $_FILES["file"]["name"];
            $location = "xml/".$filename;
            $file_exists = false;
            foreach ($files as $tempfile)
                if ($filename==$tempfile) $file_exists = true;
            if ($file_exists) {
                echo "<script>alert ('Filename exists!!');</script>";
                echo "<META HTTP-EQUIV=Refresh CONTENT=0;URL=index.php>";
            }
            else{
                if (end(explode(".", strtolower($filename)))=="xml"){
                    if (move_uploaded_file($_FILES["file"]["tmp_name"],$location)){
                        $filename = $_FILES["file"]["name"];
                        include("xmlload.php");
                        echo "<script>drawOpen = true;</script>";
                    }
                    else{
                        echo "<script>alert ('Upload error!!');</script>";
                        echo "<META HTTP-EQUIV=Refresh CONTENT=0;URL=index.php>";                    
                    }
                
                }
                else{
                    echo "<script>alert ('File extension not allowed!!');</script>";
                    echo "<META HTTP-EQUIV=Refresh CONTENT=0;URL=index.php>";
                }
            }
        }
        else echo "<META HTTP-EQUIV=Refresh CONTENT=0;URL=index.php>";
        
        ?>
        <table border="0" style="height:100%;width:100%;" cellpadding="5">
            <tr valign="top">
                <td style="width:33%;height:5%;">
                    <a href="index.php">Home</a>

                </td>
                <td style="width:33%;height:5%;" align="center">
                    <select id="relationshipType" name="relationshipType" onchange="changeRelationship(); return false;">
                        <option value="Opposite">Relationship by Opposite</option>
                        <option value="Participation">Relationship by Participation</option>
                    </select>
                </td>
                <td  align="right" style="width:33%;height:5%;">
                    <img src="images/logomini.png" alt="logomini" />
                </td>
            </tr>
            <tr>
                <td style="height:95%;width:95%" colspan="3" valign="top" align="left">
                        <table border="0" style="height:100%;width:100%">
                            <tr style="height:10%;width:100%">
                                <td align="center" width="100%">
                                    <input type="button" value="Add Entity" name="addEntity" onclick="addEntity();" />
                                    <input type="button" value="Save Model" name="save" onclick="save('<?echo $location;?>',filepass); return false;" />
                                    <input type="button" value="Change Pass" name="chgpass" onclick="change_pass(); return false;" />
                                    <input type="button" value="View XML" name="viewXML" onclick="showXML('<?echo $location;?>'); return false;" />
                                    <input type="button" value="Download" name="download" onclick="window.open('download.php?filename=<?echo $location;?>'); " />
                                    <input type="button" value="Z TEX" name="ztex" onclick="window.open('ztex.php?location=<?echo $location;?>'); " />
                                    <input type="button" value="Z PDF" name="zpdf" onclick="window.open('zpdf.php?location=<?echo $location;?>'); " />
                                </td>
                            </tr>
                            <tr>
                                <td id="tempo" colspan="3"><div id="canvas" style="border: 1px dotted gray; height:100%;width:100%"></div></td>
                            </tr>
                        </table>
                </td>
            </tr>
            <?
            //<tr><td colspan="2" style="height:0%;"><pre id="debug">debug</pre><a id="aEnable" style="display:none" href="#">Enable context menus</a></td></tr>
            ?>
        </table>
        <script type="text/javascript" src="drag.js"></script>
        <?//<script type="text/javascript" src="drag.js"></script>?>
        <div id="divContext" style="border: 1px solid blue; display: none; position: absolute; z-index:1000">        
            <ul class="cmenu">
                <li>Entities</li>
                <li><a id="aDelete" href="#">Delete Entity</a></li>
                <li><a id="aRename" href="#">Rename Entity</a></li>
                <li><a id="aInfo" href="#">Information</a></li>
                <li class="topSep">Relationships</li>
                <li><a id="aParent" href="#">Set Parent</a></li>
                <li><a id="aChild" href="#">Set Child</a></li>
                <li><a id="aDeleter" href="#">Delete Relationships</a></li>
                <li class="topSep">Attributes</li>
                <li><a id="aAdd" href="#">Add Attribute</a></li>
                <li><a id="aEdit" href="#">Edit Attribute</a></li>
                <li><a id="aRemove" href="#">Remove Attribute</a></li>
                <?//<li class="topSep"><a id="aDisable" href="#">disable this menu</a></li>?>
            </ul>
        </div>



        <?

        if ($open_selected){
            include("xmlload.php");
            if ($filepass==$_POST["xmlpass"]) echo "<script>drawOpen = true;</script>";
            else {
                echo "<script>alert ('Incorrect Password!!');</script>";
                echo "<META HTTP-EQUIV=Refresh CONTENT=0;URL=index.php>";
            }
        }


        ?>


        <script type="text/javascript" src="context.js"></script>
        <script type="text/javascript">

            //var jg = new jsGraphics("canvas");
            var gr = new jsGraphics(document.getElementById("canvas"));

    //Create jsColor object
    var white = new jsColor("#CCCCCC");
    var gray = new jsColor("#666666");
    var black = new jsColor("#222222");

    //Create jsPen object
                var ind = new jsPen(white,1);
                var dep = new jsPen(gray,1);
        var font = new jsFont("arial","normal","11px");
            var car = new jsPen(black,1);

            if (drawOpen) drawModel();

Array.prototype.search = function(s,q){
  var len = this.length;
  for(var i=0; i<len; i++){
    if(this[i].constructor == Array){
      if(this[i].search(s,q)){
        return true;
        break;
      }
     } else {
       if(q){
         if(this[i].indexOf(s) != -1){
           return true;
           break;
         }
      } else {
        if(this[i]==s){
          return true;
          break;
        }
      }
    }
  }
  return false;
}

            function change_pass(){
                filepass = prompt("New Password:");
            }

            function addEntity(){
                var name = prompt("Entity Name:");
                var isNew = true;

                if ((name == null) || (name=="")) window.status='Type a Entity Name.';
                else {

                    for(i=entities.length-1; i>-1; i--)
                        if (entities[i][0]==name)
                            isNew = false;
                    if (isNew){

                        var div = document.createElement("div");
                        div.id = name;
                        div.className = "drag";
                        div.style.width = "80px";
                        div.style.height = "30px";
                        div.style.left = "250px";
                        div.style.top = "150px";
                        div.style.border = "1px solid #333";
                        //div.appendChild('<center>'+name.toUpperCase()+'</center>');
                        div.innerHTML = name.toUpperCase();
                        //var canvas = document.getElementById("canvas");
                        body.appendChild(div);

                        var entity = [];
                        entity.push(name);
                        //entity.push(document.getElementById(name).style.width);
                        //entity.push(document.getElementById(name).style.height);
                        entity.push(document.getElementById(name).style.left);
                        entity.push(document.getElementById(name).style.top);
                        entities.push(entity);
                    }
                }
            }



            function addEntity1(){
                var name = prompt("Entity Name:");
                if ((name == null) || (name=="")) window.status='Type a Entity Name.';
                else {
                    for(i=entities.length-1; i>-1; i--)
                        if (entities[i][0]==name)
                            isNew = false;
                    if (isNew){
                        var handle = document.createElement("div");
                        handle.id= name;
                        handle.className = "handle";
                        handle.align= "center";
                        handle.innerHTML = name;
                        var div = document.createElement("div");
                        div.id = name+'root';
                        div.className = "root";
                        //div.style.width = "80px";
                        //div.style.height = "30px";
                        div.style.left = "250px";
                        div.style.top = "150px";
                        div.appendChild(handle);
                        //div.style.border = "1px solid #333";
                        //div.appendChild('<center>'+name.toUpperCase()+'</center>');
                        //div.innerHTML = '<center>'+name.toUpperCase()+'</center>';
                        body.appendChild(div);
                        Drag.init(document.getElementById(name),document.getElementById(name+'root'));
                        //SET_DHTML(name);
                    }
                }
            }

            function deleteEntity(name){
                body.removeChild(document.getElementById(name));
                deleteAttributes(name);
                deleteRelations(name);
                deleteEntities(name);

            }
            function deleteAttributes(name){
                for(i=attributes.length-1; i>-1; i--)
                    if (attributes[i][0]==name)
                        attributes.splice(i,1);
            }
            function deleteRelations(name){
                for(i=relations.length-1; i>-1; i--)
                    if ((relations[i][0]==name) || (relations[i][1]==name))
                        relations.splice(i,1);
                drawRelations();
                CloseContext();
            }
            function deleteEntities(name){
                for(i=entities.length-1; i>-1; i--)
                    if (entities[i][0]==name)
                        entities.splice(i,1);
            }

            function contentEntity(id){
                var div = document.getElementById(id);
                div.innerHTML  = id.toUpperCase();;
                for (var i=0;i<attributes.length;i++){
                    if (attributes[i][0]==id) div.innerHTML  += "<br>"+attributes[i][1];
                }
            }
            function renameEntity(id){
                var name = prompt("Entity Name:");
                var noexist = true;
                if ((name == null) || (name=="")) window.status="Type a Entity Name.";
                else {
                    for(i=entities.length-1; i>-1; i--)
                        if (entities[i][0]==name)
                            noexist = false;
                    if (noexist){
                        var div = document.getElementById(id);
                        div.id = name;
                        for(var i=0; i<attributes.length; i++){
                            if (attributes[i][0]==id) attributes[i][0]=name;
                        }
                        contentEntity(name);
                        for(var i=0; i<relations.length; i++){
                            if (relations[i][0]==id) relations[i][0]=name;
                            if (relations[i][1]==id) relations[i][1]=name;
                        }
                        for(var i=0; i<entities.length; i++){
                            if (entities[i][0]==id) entities[i][0]=name;
                        }
                        updateInformation(name);
                    }
                }
                CloseContext();
            }
            function updateInformation(id){
                for(var i=0; i<entities.length; i++){
                    if (entities[i][0]==id){
                        //entities[i][1]=document.getElementById(id).style.width;
                        //entities[i][2]=document.getElementById(id).style.height;
                        entities[i][1]=document.getElementById(id).style.left;
                        entities[i][2]=document.getElementById(id).style.top;
                    } 
                }
            }
            function Information(id){
                var div = document.getElementById(id);
                for(var i=0; i<entities.length; i++){
                    if (entities[i][0]==id){
                        alert(entities[i][0]+ ' ' + entities[i][1] + ' ' + entities[i][2]+' '+div.offsetWidth );
                    }
                }
                CloseContext();
            }



            function setParent(id) {
                //CloseContext();
                var dialogBackground = document.createElement('div');
                dialogBackground.className = "dialogBackground";
                dialogBackground.setAttribute("id", "dialogBackground");
                var dialogBox = document.createElement('div');
                dialogBox.className = "dialogBox";
                dialogBox.setAttribute("id", "dialogBox");
                // create contents of the dialog box
                var dialogBoxContents = "";
                dialogBoxContents += "<table width='100%'>";
                dialogBoxContents += "<tr><td width='100%'>Select the cardinality</td></tr>";
                dialogBoxContents += "<tr><td valign=\"middle\" align=\"center\">";
                dialogBoxContents += '<input type="hidden" id="idParent" name="idParent" value="'+id+'" />';
                dialogBoxContents += "<select size='4' id='cardParent' name='cardParent' onclick='setParentC();'>";
                dialogBoxContents += "<option value='01'>01</option><option value='0N'>0N</option>";
                dialogBoxContents += "<option value='11'>11</option><option value='1N'>1N</option></select>";
                dialogBoxContents += "</td>";
                dialogBoxContents += "</table>";
                dialogBox.innerHTML = dialogBoxContents;                
                document.body.appendChild(dialogBox);
                document.body.appendChild(dialogBackground);
            }

            function setParentC() {

                parent=document.getElementById('idParent').value;
                //alert (parent);
                cardParent = document.getElementById('cardParent').value;
                document.body.removeChild(document.getElementById('dialogBackground'));
                document.body.removeChild(document.getElementById('dialogBox'));
                CloseContext();
            }



            function setChild(id){
                if (parent == '')
                    alert("Set parent first...")
                else{

                var dialogBackground = document.createElement('div');
                dialogBackground.className = "dialogBackground";
                dialogBackground.setAttribute("id", "dialogBackground");
                var dialogBox = document.createElement('div');
                dialogBox.className = "dialogBox";
                dialogBox.setAttribute("id", "dialogBox");
                // create contents of the dialog box
                var dialogBoxContents = "";
                dialogBoxContents += "<table width='100%'>";
                dialogBoxContents += "<tr><td width='100%'>Select the cardinality</td></tr>";
                dialogBoxContents += "<tr><td valign=\"middle\" align=\"center\">";
                dialogBoxContents += '<input type="hidden" id="idChild" name="idChild" value="'+id+'" />';
                
                dialogBoxContents += '<input type="checkbox" id="dependency" name="dependency" value="ON" checked="checked" />';
                                /*<td align="center" width="25%" >Dependency type:<select id="dependency" name="dependency">
                                        <option value="1">Independent</option>
                                        <option value="2">Dependent</option>
                                    </select>
                                </td>*/

                dialogBoxContents += "<select size='4' id='cardChild' name='cardChild' onclick='setChildC();'>";
                dialogBoxContents += "<option value='01'>01</option><option value='0N'>0N</option>";
                dialogBoxContents += "<option value='11'>11</option><option value='1N'>1N</option></select>";
                dialogBoxContents += "</td>";
                dialogBoxContents += "</table>";
                //alert (dialogBoxContents);
                dialogBox.innerHTML = dialogBoxContents;
                document.body.appendChild(dialogBox);
                document.body.appendChild(dialogBackground);
                }
            }

            function setChildC(){

                    child = document.getElementById('idChild').value;
                    var dependency = document.getElementById('dependency').checked.toString();
        //alert (child);
        cardChild = document.getElementById('cardChild').value;
                document.body.removeChild(document.getElementById('dialogBackground'));
                document.body.removeChild(document.getElementById('dialogBox'));
                CloseContext();

                    relation = [];
                    if (document.getElementById('relationshipType').value=="Opposite"){
                        if (((cardParent=='0N') && ((cardChild=='01') || (cardChild=='11'))) ||
                            ((cardParent=='1N') && ((cardChild=='01') || (cardChild=='11')))){
                            relation.push(child);
                            relation.push(parent);
                            relation.push(cardChild);
                            relation.push(cardParent);
                            relation.push(dependency);
                            relations.push(relation);
                        }
                        else{
                            relation.push(parent);
                            relation.push(child);
                            relation.push(cardParent);
                            relation.push(cardChild);
                            relation.push(dependency);
                            relations.push(relation);
                        }
                    }
                    else{
                        if (((cardParent=='01') && ((cardChild=='0N') || (cardChild=='1N'))) ||
                            ((cardParent=='11') && ((cardChild=='0N') || (cardChild=='1N')))){
                            relation.push(child);
                            relation.push(parent);
                            relation.push(cardChild);
                            relation.push(cardParent);
                            relation.push(dependency);
                            relations.push(relation);
                        }
                        else{
                            relation.push(parent);
                            relation.push(child);
                            relation.push(cardParent);
                            relation.push(cardChild);
                            relation.push(dependency);
                            relations.push(relation);
                        }

                    }
                    drawRelations();
                    parent = '';
                    child = '';
                
            }

            function drawModel(){
                for(i=entities.length-1; i>-1; i--){
                        var div = document.createElement("div");
                        div.id = entities[i][0];
                        div.className = "drag";
                        div.style.width = "80px";
                        div.style.height = "30px";
                        div.style.left = entities[i][1];
                        div.style.top = entities[i][2];
                        div.style.border = "1px solid #333";
                        //div.appendChild('<center>'+name.toUpperCase()+'</center>');
                        div.innerHTML = entities[i][0].toUpperCase();
                        body.appendChild(div);
                        for (var j=0;j<attributes.length;j++){
                            if (attributes[j][0]==entities[i][0]) div.innerHTML  += "<br>"+attributes[j][1];
                        }
                }
                drawRelations();
            }

            function changeRelationship(){ //opposite or participation
                var cardTemp = "";
                for(var i=0; i<relations.length; i++){
                    cardTemp = relations[i][2];
                    relations[i][2] = relations[i][3];
                    relations[i][3] = cardTemp;
                }
                drawRelations();
            }

            function drawRelations(){
                gr.clear();
                for (var i=0;i<relations.length;i++){
                    var divp = document.getElementById(relations[i][0]);
                    var divc = document.getElementById(relations[i][1]);
                    //var x1 = parseInt(divp.style.left)+20+(parseInt(divp.style.width)/2);
                    var x1 = parseInt(divp.style.left)+20+parseInt(divp.offsetWidth)/2;
                    var y1 = parseInt(divp.style.top)+(parseInt(divp.offsetHeight)/2);
                    //var x2 = parseInt(divc.style.left)+20+(parseInt(divc.style.width)/2);
                    var x2 = parseInt(divc.style.left)+20+parseInt(divc.offsetWidth)/2;
                    var y2 = parseInt(divc.style.top)+(parseInt(divc.offsetHeight)/2);

                    var m = 10000;
                    if (Math.abs(x2-x1)!=0)
                        m = (y2-y1)/(x2-x1);
                    var b = y1-m*x1;

                    var pmx = ((x1+x2)/2);
                    var pmy = ((y1+y2)/2);

                    var x3 = ((x1+pmx)/2);
                    var y3 = ((y1+pmy)/2);
                    var x4 = ((x2+pmx)/2);
                    var y4 = ((y2+pmy)/2);

                    if (relations[i][0]==relations[i][1]){
                        var xf = parseInt(divp.style.left)+parseInt(divp.offsetWidth)+20;
                        var yf = parseInt(divp.style.top);

                        var pt0 = new jsPoint(xf-20,yf-3);
                        var pt1 = new jsPoint(xf-20,yf-13);
                        var pt2 = new jsPoint(xf-19,yf-15);
                        var pt3 = new jsPoint(xf-7,yf-15);
                        var pt4 = new jsPoint(xf-4,yf-15);
                        var pt5 = new jsPoint(xf+9,yf-15);
                        var pt6 = new jsPoint(xf+10,yf-13);
                        var pt7 = new jsPoint(xf+10,yf-1);
                        var pt8 = new jsPoint(xf+10,yf+2);
                        var pt9 = new jsPoint(xf+10,yf+13);
                        var pt10 = new jsPoint(xf+8,yf+15);
                        var pt11 = new jsPoint(xf+2,yf+15);

                        //Draw Lines between 2 points
                        gr.drawLine(dep,pt0,pt1);
                        gr.drawLine(dep,pt2,pt3);
                        gr.drawLine(dep,pt4,pt5);
                        gr.drawLine(dep,pt6,pt7);
                        gr.drawLine(dep,pt8,pt9);
                        gr.drawLine(dep,pt10,pt11);

                        var carp = new jsPoint(xf-18,yf-30);
                        var carc = new jsPoint(xf+4,yf+17);
                        gr.drawText(relations[i][2],carp,font);
                        gr.drawText(relations[i][3],carc,font);

                        if (document.getElementById('relationshipType').value=="Participation"){
                            gr.fillPolygon(black, new Array(new jsPoint(xf-8+10,yf-15),new jsPoint(xf+10,yf-8-15),new jsPoint(xf+8+10,yf-15),new jsPoint(xf+10,yf+8-15)));
                        }
                    }
                    else{
                        if (relations[i][4]=="true") { //independent
                            if (Math.abs(x1-x2)<50){
                                var iy0 = parseInt(y1+(y2-y1)*0);
                                var iy1 = parseInt(y1+(y2-y1)*0.20);
                                var iy2 = parseInt(y1+(y2-y1)*0.25);
                                var iy3 = parseInt(y1+(y2-y1)*0.35);
                                var iy4 = parseInt(y1+(y2-y1)*0.40);
                                var iy5 = parseInt(y1+(y2-y1)*0.50);
                                var iy6 = parseInt(y1+(y2-y1)*0.55);
                                var iy7 = parseInt(y1+(y2-y1)*0.65);
                                var iy8 = parseInt(y1+(y2-y1)*0.70);
                                var iy9 = parseInt(y1+(y2-y1)*0.80);
                                var iy10 = parseInt(y1+(y2-y1)*0.85);
                                var iy11 = parseInt(y1+(y2-y1)*1);

                                var ix0 = parseInt((iy0-b)/m);
                                var ix1 = parseInt((iy1-b)/m);
                                var ix2 = parseInt((iy2-b)/m);
                                var ix3 = parseInt((iy3-b)/m);
                                var ix4 = parseInt((iy4-b)/m);
                                var ix5 = parseInt((iy5-b)/m);
                                var ix6 = parseInt((iy6-b)/m);
                                var ix7 = parseInt((iy7-b)/m);
                                var ix8 = parseInt((iy8-b)/m);
                                var ix9 = parseInt((iy9-b)/m);
                                var ix10 = parseInt((iy10-b)/m);
                                var ix11 = parseInt((iy11-b)/m);
                            }
                            else{
                                var ix0 = parseInt(x1+(x2-x1)*0);
                                var ix1 = parseInt(x1+(x2-x1)*0.20);
                                var ix2 = parseInt(x1+(x2-x1)*0.25);
                                var ix3 = parseInt(x1+(x2-x1)*0.35);
                                var ix4 = parseInt(x1+(x2-x1)*0.40);
                                var ix5 = parseInt(x1+(x2-x1)*0.50);
                                var ix6 = parseInt(x1+(x2-x1)*0.55);
                                var ix7 = parseInt(x1+(x2-x1)*0.65);
                                var ix8 = parseInt(x1+(x2-x1)*0.70);
                                var ix9 = parseInt(x1+(x2-x1)*0.80);
                                var ix10 = parseInt(x1+(x2-x1)*0.85);
                                var ix11 = parseInt(x1+(x2-x1)*1);

                                var iy0 = parseInt(m*ix0+b);
                                var iy1 = parseInt(m*ix1+b);
                                var iy2 = parseInt(m*ix2+b);
                                var iy3 = parseInt(m*ix3+b);
                                var iy4 = parseInt(m*ix4+b);
                                var iy5 = parseInt(m*ix5+b);
                                var iy6 = parseInt(m*ix6+b);
                                var iy7 = parseInt(m*ix7+b);
                                var iy8 = parseInt(m*ix8+b);
                                var iy9 = parseInt(m*ix9+b);
                                var iy10 = parseInt(m*ix10+b);
                                var iy11 = parseInt(m*ix11+b);
                            }

                            var pt0 = new jsPoint(ix0,iy0);
                            var pt1 = new jsPoint(ix1,iy1);
                            var pt2 = new jsPoint(ix2,iy2);
                            var pt3 = new jsPoint(ix3,iy3);
                            var pt4 = new jsPoint(ix4,iy4);
                            var pt5 = new jsPoint(ix5,iy5);
                            var pt6 = new jsPoint(ix6,iy6);
                            var pt7 = new jsPoint(ix7,iy7);
                            var pt8 = new jsPoint(ix8,iy8);
                            var pt9 = new jsPoint(ix9,iy9);
                            var pt10 = new jsPoint(ix10,iy10);
                            var pt11 = new jsPoint(ix11,iy11);

                            //Draw Lines between 2 points
                            gr.drawLine(dep,pt0,pt1);
                            gr.drawLine(dep,pt2,pt3);
                            gr.drawLine(dep,pt4,pt5);
                            gr.drawLine(dep,pt6,pt7);
                            gr.drawLine(dep,pt8,pt9);
                            gr.drawLine(dep,pt10,pt11);
                        }
                        else {
                            var pt1 = new jsPoint(x1,y1);
                            var pt2 = new jsPoint(x2,y2);
                            gr.drawLine(dep,pt1,pt2);
                        }

                        // draw cardinality
                        if ((m>-0.6) && (m<0.6)){
                            if ((x3>x1) && (Math.abs(x1-x3)<(parseInt(divp.offsetWidth)/2)))
                                x3 = x3 + ((parseInt(divp.offsetWidth)/2)-Math.abs(x1-x3)) ;
                            else if ((x3<x1) && (Math.abs(x1-x3)<((parseInt(divp.offsetWidth)/2)+20)))
                                x3 = x3 - ((parseInt(divp.offsetWidth)/2)-Math.abs(x1-x3)) -20;
                            if ((x4>x2) && (Math.abs(x2-x4)<(parseInt(divc.offsetWidth)/2)))
                                x4 = x4 + ((parseInt(divc.offsetWidth)/2)-Math.abs(x2-x4)) ;
                            else if ((x4<x2) && (Math.abs(x2-x4)<((parseInt(divc.offsetWidth)/2)+20)))
                                x4 = x4 - ((parseInt(divc.offsetWidth)/2)-Math.abs(x2-x4)) -20;
                        }
                        else{
                            x3 = x3+5;
                            x4 = x4+5;
                            if ((y3>y1) && (Math.abs(y1-y3)<(parseInt(divp.offsetHeight)/2)))
                                y3 = y3 + ((parseInt(divp.offsetHeight)/2)-Math.abs(y1-y3)) ;
                            else if ((y3<y1) && (Math.abs(y1-y3)<((parseInt(divp.offsetHeight)/2)+20)))
                                y3 = y3 - ((parseInt(divp.offsetHeight)/2)-Math.abs(y1-y3))-20;
                            if ((y4>y2) && (Math.abs(y2-y4)<(parseInt(divc.offsetHeight)/2)))
                                y4 = y4 + ((parseInt(divc.offsetHeight)/2)-Math.abs(y2-y4)) ;
                            else if ((y4<y2) && (Math.abs(y2-y4)<((parseInt(divc.offsetHeight)/2)+20)))
                                y4 = y4 - ((parseInt(divc.offsetHeight)/2)-Math.abs(y2-y4))-20 ;
                        }

                        var carp = new jsPoint(x3,y3);
                        var carc = new jsPoint(x4,y4)
                        gr.drawText(relations[i][2],carp,font);
                        gr.drawText(relations[i][3],carc,font);

                        if (document.getElementById('relationshipType').value=="Participation")
                            gr.fillPolygon(black, new Array(new jsPoint(pmx-8,pmy),new jsPoint(pmx,pmy-8),new jsPoint(pmx+8,pmy),new jsPoint(pmx,pmy+8)));

                    }
                }
            }
           
        </script>

        <?
        ?>
    </body>
</html>

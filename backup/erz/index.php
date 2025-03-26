<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<?php 
    $directorio=opendir("xml");
    $list = '<form name="open_xml" action="er.php?action=open" method="POST" enctype="multipart/form-data">' ;
    $list = $list.'<select name="file_list">';
$archivos = array();
	while ($archivo = readdir($directorio))
         if (($archivo != '.') and ($archivo != '..'))
		array_push($archivos, $archivo);

	sort($archivos);
	foreach ($archivos as $a)

            $list = $list."<option>".$a."</option>";

    
    $list = $list.'</select>';
    $list = $list.'<br><br>password: <input type="text" name="xmlpass" value="" />';
    $list = $list.'<br><br><input type="submit" value="Open XML" name="open_xml" />';
    $list = $list.'<input type="button" value="Close" name="close" onclick="closeDialogBox();return false" />';
    $list = $list.'</form>';
    $list = "'".$list."'";
    closedir($directorio);
?>

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>ERZ - Entity Relationship to Z Notation</title>
        <link rel="stylesheet" type="text/css" href="style.css" />
        <script>
            function DialogBox(title, htmlContents) {

	var dialogBackground = document.createElement('div');
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

}

function closeDialogBox() {
	document.body.removeChild(document.getElementById('dialogBackground'));
	document.body.removeChild(document.getElementById('dialogBox'));
}

        var new_xml =   '<form name="new_xml" action="er.php?action=new" method="POST">' +
                        '<br><br><input type="text" name="xmlname" value="" />' +
    			'<br><br>password: <input type="text" name="xmlpass" value="" />' +
                        '<br><br><input type="submit" value="Create XML" name="create_xml" />' +
                        '<input type="button" value="Close" name="close" onclick="closeDialogBox();return false" />' +
                        '</form>';


        var upload_xml =    '<form name="upload_xml" action="er.php?action=upload" method="POST" enctype="multipart/form-data">' +
                            '<br><br><input type="file" name="file" value="" />' +
                            '<br><br><input type="submit" value="Upload XML" name="upload_xml" />'+
                            '<input type="button" value="Close" name="close" onclick="closeDialogBox();return false" />' +
                            '</form>';


    </script>


    </head>
    <body vlink="blue">
        <script>
            var open_xml = <?echo $list;?>;
        </script>
        <table style="height:100%;width:100%;" >
            <tbody>
                <tr align="center" valign="middle">
                    <td><table>

                            <thead>
                                <tr>
                                    <th colspan="2"><img src="images/logo.png" alt="logo"/>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td height="20px">
                                    </td>
                                </tr>
                                <tr align="center" >
                                    <td>
                                        Home -
                                        <a href="" onclick="DialogBox('Type the file name:', new_xml); return false">New </a> -
                                        <a href="" onclick="DialogBox('Select the file name:', open_xml); return false">Open</a> -
                                        <a href="" onclick="DialogBox('Browse the file name:', upload_xml); return false">Upload</a>
                                    </td>
                                </tr>
<tr><td><script type="text/javascript" src="http://yx-ads6.com/banner.php?section=General&pub=662155&format=728x90&ga=g"></script></td></tr>

                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="bottom">
                        <?php include("counter.php")?>
                    </td>
                </tr>
            </tbody>
        </table>
    </body>
</html>
	
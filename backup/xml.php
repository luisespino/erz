<!--
To change this template, choose Tools | Templates
and open the template in the editor.

-->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Native XML Database</title>
        <link rel="stylesheet" type="text/css" href="style.css" />
        <script>
            function startDownload(url){
                window.location = url;
            }
        </script>
    </head>
    <body>
        <?php
        // put your code here
        error_reporting(0);
        if ($_REQUEST["action"]=="new"):
            $filename = $_POST["xmlname"];
            $location = "xml/".$filename;
        elseif ($_REQUEST["action"]=="open"):
            $filename = $_POST["file_list"];
            $location = "xml/".$filename;
        elseif ($_REQUEST["action"]=="upload"):
            $location = "xml/".$_FILES["file"]["name"];
            if (move_uploaded_file($_FILES["file"]["tmp_name"],$location))
                $filename = $_FILES["file"]["name"];
            else
                echo "Upload error!";
        elseif ($_REQUEST["action"]=="save"):
            $location = $_REQUEST["location"];
            $file = fopen($location, 'w');
            fwrite($file,stripslashes($_REQUEST["code"]));
            fclose($file);
        elseif ($_REQUEST["action"]=="query"):
            $location = $_REQUEST["location"];
            $xml = new DOMDocument();
            $xml->load($location);
            $xpath = new DOMXpath($xml);
            $elements = $xpath->evaluate(stripslashes($_REQUEST["query"]));
        else: echo "<META HTTP-EQUIV=Refresh CONTENT=0;URL=index.php>";
        endif;

        ?>
        <table border="0" style="height:100%;width:100%;" cellpadding="5">
            <tr valign="top">
                <td>
                    <a href="index.php">Home</a>
                </td>
                <td  align="right" style="height:5%;">
                    <img src="images/logomini.png" alt="logomini" />
                </td>
            </tr>

            <tr>
                <td  id="framecode" style="width:55%" >
                    <form  name="save" action="xml.php?action=save" method="POST">
                    <div style="border: 1px solid black; padding: 0px;">
                            <input type="hidden" name="location" value="<?echo $location;?>" />
                            <input type="submit" value="Save" name="save" />
                            <input type="button" value="Download" name="download" onclick="window.open('download.php?filename=<?echo $location;?>'); "/>
                            <textarea id="code" name="code" cols="0" rows="0"><?
                                if ($_REQUEST["action"]=="new") echo '<?xml version="1.0"?>';
                                else{
                                    $fh = fopen($location, 'r');
                                    $theData = fread($fh, filesize($location));
                                    fclose($fh);
                                    echo $theData;
                                }
                            ?></textarea>
                    </div>
                    </form>
                </td>



                <td align="center" style="height:95%;width:45%">

                    <form style="height:96.5%;width:100%;border: 1px solid black;" name="query" action="xml.php?action=query" method="POST">
                        

                        <input type="hidden" name="location" value="<?echo $location;?>">
                        <textarea name="query"  rows="0" cols="20"  style="margin-top:3%; width:95%;height:42%" ><?
                        if ($_REQUEST["action"]=="query") echo stripslashes($_REQUEST["query"]);
                        else echo "Type Query...";?></textarea>
                        <input type="submit" value="Execute Query" name="execute" /><br><br>
                    <div id="Layer1"  style="text-align:left;border: 1px solid LightGrey;width:95%; height:42%; overflow: scroll;">

                          <?
                        if ($_REQUEST["action"]=="query"){
                            
                            $content="";
                            if (is_object($elements)){
                                if ($elements->length>0){
                                    foreach ($elements as $element){
                                        //echo $element->textContent ;//->nodeValue."";
                                        $content = $content.$element->textContent."<br>";//->nodeValue."";
                                    }
                                    echo $content;
                                }
                                else echo "No results.";
                            }
                            else echo "Error in syntax.";
                        }
                        else echo "Query's Result...";
                        ?>

</div>

                   </form>
                </td>                
            </tr>

        </table>
        <?
        ?>
    </body>
</html>

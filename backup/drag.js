/* 
 * Drag and drop library.
 * 
 */

var _startX = 0;            // mouse starting positions
var _startY = 0;
var _offsetX = 0;           // current element offset
var _offsetY = 0;
var _dragElement;           // needs to be passed from OnMouseDown to OnMouseMove
var _oldZIndex = 0;         // we temporarily increase the z-index during drag
var _debug = ""; // $('debug');    // makes life easier

InitDragDrop();

function InitDragDrop()
{
    document.onmousedown = OnMouseDown;
    document.onmouseup = OnMouseUp;
}

function OnMouseDown(e)
{
    // IE is retarded and doesn't pass the event object
    if (e == null)
        e = window.event;

    // IE uses srcElement, others use target
    var target = e.target != null ? e.target : e.srcElement;

    //_debug.innerHTML = target.className == 'drag'
    //    ? 'draggable element clicked'
    //    : 'NON-draggable element clicked';

    // for IE, left click == 1
    // for Firefox, left click == 0
    if ((e.button == 1 && window.event != null ||
        e.button == 0) &&
        target.className == 'drag')
    {

        //jg.clear();
        gr.clear();
        //jg.paint();
        // grab the mouse position
        _startX = e.clientX;
        _startY = e.clientY;

        // grab the clicked element's position
        _offsetX = ExtractNumber(target.style.left);
        _offsetY = ExtractNumber(target.style.top);

        // bring the clicked element to the front while it is being dragged
        _oldZIndex = target.style.zIndex;
        target.style.zIndex = 10000;

        // we need to access the element in OnMouseMove
        _dragElement = target;

        // tell our code to start moving the element with the mouse
        document.onmousemove = OnMouseMove;

        // cancel out any text selections
        document.body.focus();

        // prevent text selection in IE
        document.onselectstart = function () { return false; };
        // prevent IE from trying to drag an image
        target.ondragstart = function() { return false; };

        // prevent text selection (except IE)
        return false;
    }
}

function OnMouseMove(e)
{
    if (e == null)
        var e = window.event;

    var x1 = findPosX(document.getElementById('canvas'))-20; //min x
    var y1 = findPosY(document.getElementById('canvas')); //min y
    var x2 = x1 + document.getElementById('canvas').offsetWidth - _dragElement.offsetWidth; //max x
    var y2 = y1 + document.getElementById('canvas').offsetHeight - _dragElement.offsetHeight; //max y

    var movx = _offsetX + e.clientX - _startX ;
    var movy = _offsetY + e.clientY - _startY;

    // this is the actual "drag code" 
    if ((movx>=x1) && (movx<x2))
        _dragElement.style.left = movx + 'px';
    else if (movx<x1)
        _dragElement.style.left = x1 + 'px';
    else
        _dragElement.style.left = x2 + 'px';


    if ((movy>=y1) && (movy<y2))
        _dragElement.style.top = movy + 'px';
    else if (movy<y1)
        _dragElement.style.top = y1 + 'px';
    else
        _dragElement.style.top = y2 + 'px';

    //_debug.innerHTML = '(' + _dragElement.style.left + ', ' +
     //   _dragElement.style.top + ')';
//    var rn = Math.floor(Math.random()*11)
//    if (rn>4)
//drawRelations();

}

function OnMouseUp(e)
{
    
    //alert(document.getElementById('canvas').offsetWidth);//+ ' ' + findPosY(document.getElementById('canvas'))); // +' '+document.getElementById('canvas').offsetLeft+' '+document.getElementById('canvas').offsetWidth );
    if (_dragElement != null)
    {
        _dragElement.style.zIndex = _oldZIndex;

        // we're done with these events until the next OnMouseDown
        document.onmousemove = null;
        document.onselectstart = null;
        _dragElement.ondragstart = null;


        drawRelations(); //redibuja lineas
        updateInformation(_dragElement.id); //cambia informacion de posicion


        // this is how we know we're not dragging
        _dragElement = null;

        //_debug.innerHTML = 'mouse up';


    }
}

function ExtractNumber(value)
{
    var n = parseInt(value);

    return n == null || isNaN(n) ? 0 : n;
}

// this is simply a shortcut for the eyes and fingers
function $(id)
{
    return document.getElementById(id);
}







// temporal

function findPosX(obj)
{
	var curleft = 0;
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			curleft += obj.offsetLeft
			obj = obj.offsetParent;
		}
	}
	else if (obj.x)
		curleft += obj.x;
	return curleft;

}

function findPosY(obj)
{
	var curtop = 0;
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			curtop += obj.offsetTop
			obj = obj.offsetParent;
		}
	}
	else if (obj.y)
		curtop += obj.y;
	return curtop;
}


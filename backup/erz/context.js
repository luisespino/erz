/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

var _replaceContext = false;        // replace the system context menu?
var _mouseOverContext = false;      // is the mouse over the context menu?
var _noContext = false;             // disable the context menu?
var _divContext = $('divContext');  // makes my life easier

InitContext();

function InitContext()
{
    _divContext.onmouseover = function() { _mouseOverContext = true; };
    _divContext.onmouseout = function() { _mouseOverContext = false; };

    //$('aDisable').onclick = DisableContext;
    //$('aEnable').onclick = EnableContext;

    document.body.onmousedown = ContextMouseDown;
    document.body.oncontextmenu = ContextShow;
}

// call from the onMouseDown event, passing the event if standards compliant
function ContextMouseDown(event)
{
    if (_noContext || _mouseOverContext)
        return;

    // IE is evil and doesn't pass the event object
    if (event == null)
        event = window.event;

    // we assume we have a standards compliant browser, but check if we have IE
    var target = event.target != null ? event.target : event.srcElement;

    // only show the context menu if the right mouse button is pressed
    //   and a hyperlink has been clicked (the code can be made more selective)
    if (event.button == 2 && target.tagName.toLowerCase() == 'div' && target.id!= "canvas" )
        _replaceContext = true;
    else if (!_mouseOverContext)
        _divContext.style.display = 'none';
}

function CloseContext()
{
    _mouseOverContext = false;
    _divContext.style.display = 'none';
}

// call from the onContextMenu event, passing the event
// if this function returns false, the browser's context menu will not show up
function ContextShow(event)
{
    if (_noContext || _mouseOverContext)
        return;

    // IE is evil and doesn't pass the event object
    if (event == null)
        event = window.event;

    // we assume we have a standards compliant browser, but check if we have IE
    var target = event.target != null ? event.target : event.srcElement;

    if (_replaceContext)
    {
        $('aDelete').href = "javascript:deleteEntity('"+target.id+"')";
        $('aRename').href = "javascript:renameEntity('"+target.id+"')";
        $('aInfo').href = "javascript:Information('"+target.id+"')";
        $('aDeleter').href = "javascript:deleteRelations('"+target.id+"')";
        $('aParent').href = "javascript:setParent('"+target.id+"')";
        $('aChild').href = "javascript:setChild('"+target.id+"')";
        $('aAdd').href = "javascript:DialogBox('Add Attribute:', '"+addAtt+"','"+target.id+"')";
        $('aEdit').href = "javascript:DialogBox('Edit Attribute:', '"+editAtt+"','"+target.id+"')";
        $('aRemove').href = "javascript:DialogBox('Remove Attributes:', '"+removeAtt+"','"+target.id+"')";

        // document.body.scrollTop does not work in IE
        var scrollTop = document.body.scrollTop ? document.body.scrollTop :
            document.documentElement.scrollTop;
        var scrollLeft = document.body.scrollLeft ? document.body.scrollLeft :
            document.documentElement.scrollLeft;

        // hide the menu first to avoid an "up-then-over" visual effect
        //1300x500
        _divContext.style.display = 'none';

        if (window.innerHeight){
            if (event.clientX+150 > window.innerWidth)
                _divContext.style.left = event.clientX + scrollLeft - 150  + 'px';
            else
                _divContext.style.left = event.clientX + scrollLeft + 'px';

            if (event.clientY+220 > window.innerHeight)
                _divContext.style.top = event.clientY + scrollTop - 220  + 'px';
            else
                _divContext.style.top = event.clientY + scrollTop + 'px';
        }
        else{ //IE
            if (event.clientX+150 > document.body.clientWidth)
                _divContext.style.left = event.clientX + scrollLeft - 150  + 'px';
            else
                _divContext.style.left = event.clientX + scrollLeft + 'px';

            if (event.clientY+220 > document.body.clientHeight)
                _divContext.style.top = event.clientY + scrollTop - 220  + 'px';
            else
                _divContext.style.top = event.clientY + scrollTop + 'px';
        }



        _divContext.style.display = 'block';

        _replaceContext = false;

        return false;
    }
}

function DisableContext()
{
    _noContext = true;
    CloseContext();
    //$('aEnable').style.display = '';

    return false;
}

function EnableContext()
{
    _noContext = false;
    _mouseOverContext = false; // this gets left enabled when "disable menus" is chosen
    //$('aEnable').style.display = 'none';

    return false;
}

// comes from prototype.js; this is simply easier on the eyes and fingers
function $(id)
{
    return document.getElementById(id);
}

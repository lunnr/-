/**
 * 
 * @author donecro
 * @date 2018-06-19
 * @description 正方教务系统教学评价脚本
 */
var iframe = document.querySelector('iframe');
status = false;
var j = document.querySelectorAll("ul.nav>li.top")[3].querySelectorAll("ul.sub>li").length;
var i = 0;    
function pj() {
    if (status) {
        return;
    }
    status = true; 
    if (j == 0) {
        iframe.setAttribute('onload', "javascript:dyniframesize('iframeautoheight');");
        iframe.contentDocument.getElementById("Button2").click();
        alert("Ok，收工，可以回家吃饭。。。");
        return;
    }

    for (var k=20;k>=0;--k) { 
        if(k == 0){   
            iframe.contentDocument.getElementById("Button1").click();
            return;
        }
        else{   
            var selects = iframe.contentDocument.querySelectorAll('table.datelist>tbody>tr>td>select');
            selects[i].selectedIndex = 1;i++;
            iframe.contentDocument.getElementById("pjxx").value = '老师很认真负责';
        }
    }
    --j;  
    status = false;
}
iframe.setAttribute('onload', "javascript:dyniframesize('iframeautoheight'); pj();");
pj();

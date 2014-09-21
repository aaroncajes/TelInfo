function init()
{
	try
	{
		var longName = navigator.mozMobileConnections[0].data.network.longName;
		var shortName = navigator.mozMobileConnections[0].data.network.shortName;
		var mnc = navigator.mozMobileConnections[0].data.network.mnc;
		var mcc = navigator.mozMobileConnections[0].data.network.mcc;
		var netState = navigator.mozMobileConnections[0].data.network.state;
		
		document.getElementById('lName').innerHTML = longName;
		document.getElementById('sName').innerHTML = shortName;
		document.getElementById('netMNC').innerHTML = mnc;
		document.getElementById('netMCC').innerHTML = mcc;
		document.getElementById('slot').innerHTML = "1";
		
		if(netState == 'null' || netState == null)
		{
			document.getElementById('state').innerHTML = "UNKNOWN";
		}
		else
		{
			document.getElementById('state').innerHTML = netState;
		}
	}
	catch(err)
	{
		var longName = navigator.mozMobileConnections[1].data.network.longName;
		var shortName = navigator.mozMobileConnections[1].data.network.shortName;
		var mnc = navigator.mozMobileConnections[1].data.network.mnc;
		var mcc = navigator.mozMobileConnections[1].data.network.mcc;
		var netState = navigator.mozMobileConnections[1].data.network.state;
		
		document.getElementById('lName').innerHTML = longName;
		document.getElementById('sName').innerHTML = shortName;
		document.getElementById('netMNC').innerHTML = mnc;
		document.getElementById('netMCC').innerHTML = mcc;
		document.getElementById('slot').innerHTML = "1";
		
		if(netState == 'null' || netState == null)
		{
			document.getElementById('state').innerHTML = "UNKNOWN";
		}
		else
		{
			document.getElementById('state').innerHTML = netState;
		}
	}
}

window.onload = init;
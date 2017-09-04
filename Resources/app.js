//
// create root window
//
var win = Titanium.UI.createWindow({
    title:'Grandpa Vacation',
    backgroundColor:'white',
    navBarHidden: false,
    fullscreen: true,
    layout: 'vertical'
});

//add menu
win.activity.onCreateOptionsMenu = function(e) {
			var m1 = e.menu.add({
        title : 'Close Window',
        icon: 'images/1.png',
        showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
      });
			m1.addEventListener('click', function(e) {
				win.close();
			});
		};

		win.activity.onPrepareOptionsMenu = function(e) {
			var mi = e.menu.findItem(2);
			if (mi == null) {
				mi = e.menu.add({
					itemId : 2,
					order : 1,
					title : 'Toast',
          icon: 'images/2.png',
          showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
				});
				mi.addEventListener('click', function(e) {
					Ti.UI.createNotification({ message : "To you and yours." }).show();
				});
			}
		};

// HEADER
var header = Ti.UI.createView({height:50,borderWidth:1,borderColor:'#999',backgroundColor:'white'});
var headerLabel = Ti.UI.createLabel({color:'#777', textAlign:'center', height:'auto', text:'Header'});

header.add(headerLabel);

win.add(header);

// BODY
var body = Ti.UI.createView({height:Ti.UI.SIZE, layout:'vertical', backgroundColor:'#fff'});

var bodyView1 = Ti.UI.createView({backgroundColor:'#336699', height:100, left:10, right:10});//For Notes
var bodyView2 = Ti.UI.createView({backgroundColor:'#ff0000', height:50, left:10, right:10, top:10});//For Photos
var bodyView3 = Ti.UI.createView({backgroundColor:'orange', height:50, left:10, right:10, top:10});//For Videos
body.add(bodyView1);
body.add(bodyView2);
body.add(bodyView3);

win.add(body);

// FOOTER
var footer = Ti.UI.createView({height:50,borderWidth:1,borderColor:'#999',backgroundColor:'white'});
var footerLabel = Ti.UI.createLabel({color:'#777', textAlign:'center', height:'auto', text:'Footer'});//Instead by footer Links
footer.add(footerLabel);

win.add(footer);

//start window
win.open({ animated : true});

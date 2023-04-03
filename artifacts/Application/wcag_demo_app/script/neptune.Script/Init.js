// adding table data

function addData1(){
    var tableData1 = [
         	    { product: "Power Projector 1234", type: "Locked" },
				{ product: "Power Projector 1224", type: "LockedBy", additionalInfo: "John Doe" },
				{ product: "Power Projector 1244", type: "LockedBy", additionalInfo: "John Doe"  },
				{ product: "Gladiator MX 2134", type: "Draft" },
				{ product: "Hurricane GX 5648", type: "Unsaved" },
				{ product: "Hurricane GX 5658", type: "UnsavedBy", additionalInfo: "John Doe" },
				{ product: "Hurricane GX 5668", type: "UnsavedBy" , additionalInfo: "John Doe" },
				{ product: "Hurricane GX 5678", type: "Unsaved" },
				{ product: "Webcam", type: "Favorite" },
				{ product: "Deskjet Super Highspeed", type: "Flagged" }
];

modelTable.setData(tableData1);

}


// adding table data

function addData(){
    var tableData = [
         	    { product: "Power Projector 1234",weight:"0.84 KG",text:"Error", state :"Error"},
				{ product: "Power Projector 1224",weight:"0.44 KG",text:"None", state :"None"},
				{ product: "Power Projector 1244",weight:"0.64 KG", text:"Success", state :"Success" },
				{ product: "Gladiator MX 2134",weight:"1.0 KG",text:"Warning",state :"Warning"},
				{ product: "Hurricane GX 5648",weight:"0.84 KG",text:"Error", state :"Error"},
				{ product: "Hurricane GX 5658",weight:"1.84 KG",text:"None", state :"None"},
				{ product: "Hurricane GX 5668",weight:"1.14 KG",text:"Success", state :"Success"},
				{ product: "Hurricane GX 5678", weight:"2.84 KG",text:"Warning", state :"Warning"},
				{ product: "Webcam",weight:"0.84 KG",text:"Error" ,state :"Error"},
				{ product: "Deskjet Super Highspeed",weight:"1.24 KG",text:"Success", state :"Success"}
];

modelTable2.setData(tableData);

}



// Custom Init - Happens only once
sap.ui.getCore().attachInit(function(data) {

    setTimeout(function() {
		addData1();
        addData();
		//addDataUI();

    }, 200);

});




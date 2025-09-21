function doGet(e) {
  var ss = SpreadsheetApp.openById("YOUR_SHEET_ID");
  var sheet = ss.getSheetByName("Products");
  var data = sheet.getDataRange().getValues();
  var products = [];
  for (var i = 1; i < data.length; i++) {
    var product = {
      id: data[i][0],
      name: data[i][1],
      description: data[i][2],
      price: data[i][3],
      whatsapp: data[i][4]
    };
    products.push(product);
  }
  return ContentService.createTextOutput(JSON.stringify(products)).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var ss = SpreadsheetApp.openById("YOUR_SHEET_ID");
  var sheet = ss.getSheetByName("Products");
  var params = JSON.parse(e.postData.contents);
  var newRow = [
    new Date().getTime(),
    params.name,
    params.description,
    params.price,
    params.whatsapp
  ];
  sheet.appendRow(newRow);
  return ContentService.createTextOutput(JSON.stringify({
    "status": "success"
  })).setMimeType(ContentService.MimeType.JSON);
}

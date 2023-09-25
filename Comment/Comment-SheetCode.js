//GoogleAppsScript
//コピペここから
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var rowData = [];
  rowData.push(new Date());
  rowData.push(e.parameter.com);
  rowData.push(e.parameter.email);
  sheet.appendRow(rowData); 
  return ContentService.createTextOutput("Success");
}

//コピペここまで
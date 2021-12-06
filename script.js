

function doGet() {
  let sheet = SpreadsheetApp.getActiveSheet();
  let data = sheet.getDataRange().getValues();
   const jsonData = convertToJson(data);
  
  return ContentService
    .createTextOutput(JSON.stringify(jsonData))
    .setMimeType(ContentService.MimeType.JSON);
}

function convertToJson(data) {
  const headers = data[0]
  const raw_data = data.slice(1,)
  let json = []
  raw_data.forEach(d => {
      let object = {}
      for (let i = 0; i < headers.length; i++) {
        object[headers[i]] = d[i]
      }
      json.push(object)
  });
  return json
}




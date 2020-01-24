const fs = require('fs')
const { app } = require('electron').remote

module.exports = {
  readFile,
  saveFile,
  exists,
  checkFile,
}

function readFile (path, app_path='', lang='', return_type='file') {
  let final_path = ''

  if (app_path == 'root') {
    final_path = app.getAppPath() + '/'
  }
  if (app_path == 'override') {
    final_path = app.getPath('userData') + '/override/'
  }

  if (!(lang == '')) {
    final_path = final_path +'translations/'+lang+'/'
  }

  final_path = final_path + path

  // console.log('File path: '+final_path)

  if (return_type == 'file') {
      return fs.readFileSync(final_path)
  } else if (return_type == 'path') {
      return final_path
  }

}

function checkFile (path, app_path='', lang='') {
  let final_path = ''

  if (app_path == 'root') {
    final_path = app.getAppPath() + '/'
  }
  if (app_path == 'override') {
    final_path = app.getPath('userData') + '/override/'
  }

  if (!(lang == '')) {
    final_path = final_path +'translations/'+lang+'/'
  }

  final_path = final_path + path

  console.log('File path: '+final_path)

  if (fs.existsSync(final_path)) {
    return final_path
  } else {
    return ''
  }
  // fs.stat(final_path, function(err, stat) {
  //   if(err == null) {
  //       // console.log('File exists');
  //   } else {
  //       console.log('Some other error: ', err.code);
  //       final_path = ''
  //   }
  // })
  // try {
  //   fs.stat(final_path)
  //   return final_path
  // } catch (e) {
  //   final_path = ''
  // }
  return final_path
}

function saveFile (data, path) {
  try {
    fs.writeFileSync(path, data)
  } catch (e) {
    alert('Failed to save the file !')
  }
}

function exists (path, app_path=false) {
  if (app_path) {
    path = app.getAppPath() + '/'+path
  }
  return fs.existsSync(path)
}

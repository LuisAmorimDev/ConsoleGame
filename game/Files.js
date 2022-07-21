import fs from 'fs'
import os from 'os'
import Player from './Player.js';

const pathApp = os.homedir() + '\\ConsoleGame';
const pathSave = pathApp + `\\Save${Date.now()}.bin`;

export const Saver = (obj) => {
  if (!fs.existsSync(pathApp)) {
    pathApp = fs.mkdirSync(pathApp, (err) => {
      if (err)
        console.log(chalk.bold.bgblue(err.message));
    });
  }

  fs.writeFileSync(pathSave, JSON.stringify(obj), 'utf8', err => {
    if (err) {
      console.log(chalk.bold.bgblue(err.message));
    }
  });

}

export const Loader = (path) => {
  if (fs.existsSync(pathApp)) {
    let newestTime = Date.now();
    let newestFile = null;
    let player = new Player()
    if (!path)
      fs.readdir(pathApp, (err, list) => {
        list.forEach((file) => {
          let mtime = fs.statSync(pathApp + '\\' + file).mtime;
          if (mtime - Date.now() <= newestTime) {
            newestTime = mtime;
            newestFile = file;
          }
        })
        if (fs.existsSync(pathApp + '\\' + newestFile))
          player.Create(JSON.parse(fs.readFileSync(pathApp + '\\' + newestFile, 'utf8', (err, data) => {
            if (err) {
              console.log(chalk.bold.bgblue(err.message));
              return null;
            }
            return data;
          })))
      })
    else
      if (fs.existsSync(pathApp + '\\' + path))
        player.Create(JSON.parse(fs.readFileSync(pathApp + '\\' + path, 'utf8', (err, data) => {
          if (err) {
            console.log(chalk.bold.bgblue(err.message));
            return null;
          }
          return data;
        })))
    return player;
  } else
    return null;
}

export const getSaveFiles = () => {
  if (fs.existsSync(pathApp)) {
    let array = [];
    fs.readdir(pathApp, (err, list) => {
      list.forEach(file => { array.push(file) });
    });
    return array;
  } else {
    return [];
  }
}

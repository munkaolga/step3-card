function addLocalStorageData(t){const e=getDataPatient();e.push(t),localStorage.setItem("patient",JSON.stringify(e))}function getTokenFromStorage(){return localStorage.getItem("token")}function getDataPatient(){return JSON.parse(localStorage.getItem("patient")||"[]")}function writeTokenToStorage(t){localStorage.setItem("token",t)}export{getDataPatient,addLocalStorageData,writeTokenToStorage,getTokenFromStorage};
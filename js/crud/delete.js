function deleteAllSave() {
    const myDiv = document.getElementById("outputDiv");
    const paragraphs = myDiv.getElementsByTagName("p");
  
    // Menghapus semua elemen <p> di dalam <div>
    while (paragraphs.length > 0) {
      myDiv.removeChild(paragraphs[0]);
    }
    localStorage.removeItem("storedStrings");
    localStorage.clear();
  }

export {deleteAllSave};
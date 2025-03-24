Java.perform(function () {
    const LOADED_CLASSES = Java.enumerateLoadedClassesSync();
    const FILE = Java.use("java.io.File").$new("/sdcard/Download/output.txt");
    const FILE_WRITER = Java.use("java.io.FileWriter").$new(FILE);
    const BUFFERED_WRITER = Java.use("java.io.BufferedWriter").$new(FILE_WRITER);
    
    console.log("Enumerating loaded classes...");
    
    LOADED_CLASSES.forEach(function (className) {
        console.log(className);
        BUFFERED_WRITER.write(className + "\n",0,className.length + 1);
    });
    BUFFERED_WRITER.close();
    FILE_WRITER.close();

    console.log("Done enumerating classes.");
});

Java.perform(function () {
    const LOADED_CLASSES = Java.enumerateLoadedClassesSync();
    const BUILD_CLASS = Java.use("<PUT THE CLASS NAME, HERE>");
    const FIELDS = BUILD_CLASS.class.getDeclaredFields();
    const METHODS = BUILD_CLASS.class.getDeclaredMethods();
    
    LOADED_CLASSES.forEach(function (className) {
        console.log(className + "\n");
        FIELDS.forEach(function (field) {
            console.log("Field: " + field.getName());
        });
        METHODS.forEach(function (method) {
            console.log("Method: " + method.getName());
        });
    });
});

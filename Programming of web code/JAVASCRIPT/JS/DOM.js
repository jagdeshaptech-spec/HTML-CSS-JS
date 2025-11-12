const Subjects = {
    Sub_1: "Mathematics",
    Sub_2: "Physics",
    Sub_3: "Chemistry", 
    Sub_4: "Biology",
    Sub_5: "Computer Science",
    Sub_6: "History",
    Sub_Class: function() {
        return [this.Sub_1, this.Sub_2, this.Sub_3, this.Sub_4, this.Sub_5, this.Sub_6];
    }
}
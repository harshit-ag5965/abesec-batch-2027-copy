class Student {
    String studentName;
    int rollNumber;

    public Student(String studentName, int rollNumber) {
        System.out.println("pehle mai call hua hua" + this);
        this.studentName = studentName;
        this.rollNumber = rollNumber;
    }

    public static void main(String[] args) {
        Student student1 = new Student("John Doe", 101);
        System.out.println(student1);
        System.out.println(student1.studentName + " has roll number " + student1.rollNumber);
    }
}
public class CarColor {
    String color;

    public CarColor(String color){
        this.color = color;
    }

    public String getColor(){
        return color;
    }

    public void setColor(String color){
        this.color = color;
    }

    public void showCarColor(){
        System.out.println("The car is " + color);
    }
}
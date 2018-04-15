int boton = 2;
int led = 9;

void setup() {
pinMode(boton, INPUT_PULLUP);
pinMode(led,OUTPUT);
Serial.begin(9600); 
}

void loop() {
if (digitalRead(boton) == 0){
  Serial.println("HOLA A TODOS");
  }
}

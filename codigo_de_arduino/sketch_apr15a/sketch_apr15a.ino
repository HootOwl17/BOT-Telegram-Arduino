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
  delay(500);
  }
  if (Serial.available()){
    char LETRA = Serial.read();
    if (LETRA == "HOLA A TODOS"){
      digitalWrite(led, HIGH);
      }
      else if (LETRA == 'L'){
        digitalWrite(led, LOW);
        }
      }
    }
}
